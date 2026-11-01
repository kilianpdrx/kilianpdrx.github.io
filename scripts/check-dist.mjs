// Fails the build when dist has a broken internal link, a missing page,
// an image with no alt attribute, or a hidden project.
import { readdirSync, readFileSync } from 'node:fs';
import { basename, posix } from 'node:path';

const DIST = 'dist';
const PROJECTS = 'src/content/projects';
const REQUIRED = ['/index.html', '/404.html', '/projects/index.html', '/robots.txt', '/favicon.ico', '/assets/Pouderoux_Kilian_EN.pdf'];

const files = new Set(
  readdirSync(DIST, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => posix.join('/', entry.parentPath.slice(DIST.length), entry.name)),
);

const read = (file) => readFileSync(posix.join(DIST, file), 'utf8');

// Same lookup as GitHub Pages. A Set stays case-sensitive on macOS too.
const resolve = (path) => [path, `${path}.html`, posix.join(path, 'index.html')].find((file) => files.has(file));

const idCache = new Map();
const idsIn = (file) => {
  if (!idCache.has(file)) {
    idCache.set(file, new Set([...read(file).matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])));
  }
  return idCache.get(file);
};

const errors = [];

for (const file of files) {
  if (!file.endsWith('.html')) continue;
  const html = read(file).replace(/<!--[\s\S]*?-->/g, '');

  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt=/.test(tag)) errors.push(`${file}: image with no alt attribute: ${tag}`);
  }

  const targets = [
    ...[...html.matchAll(/\s(?:href|src)="([^"]*)"/g)].map((match) => match[1]),
    ...[...html.matchAll(/url\("?(\/[^")]+)"?\)/g)].map((match) => match[1]),
  ];

  for (const target of targets) {
    if (!target || /^(?:[a-z][a-z+.-]*:|\/\/)/i.test(target)) continue;
    const [path, fragment] = target.split('#');
    const page = path ? resolve(posix.resolve(posix.dirname(file), decodeURI(path))) : file;
    if (!page) {
      errors.push(`${file}: broken link: ${target}`);
    } else if (fragment && !idsIn(page).has(fragment)) {
      errors.push(`${file}: missing anchor: ${target}`);
    }
  }
}

for (const route of REQUIRED) {
  if (!files.has(route)) errors.push(`missing route: ${route}`);
}

for (const name of readdirSync(PROJECTS)) {
  const source = readFileSync(posix.join(PROJECTS, name), 'utf8');
  const published = /^published:\s*true\s*$/m.test(source);
  const page = `/projects/${basename(name, '.md')}.html`;
  if (published && !files.has(page)) errors.push(`missing project page: ${page}`);
  if (!published && files.has(page)) errors.push(`hidden project was built: ${page}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s) found`);
  process.exit(1);
}

console.log(`${files.size} files checked`);
