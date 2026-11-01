# Kilian Pouderoux: portfolio

Personal portfolio built with [Astro](https://astro.build) and published at https://kilianpdrx.github.io. Pushing to `main` deploys it through GitHub Actions.

## Run locally

```bash
npm install
npm run dev
```

The Node version is set in `.nvmrc`.

To check a production build the same way the deploy does:

```bash
npm run build
npm run check:dist
```

## Edit the content

- Profile, education, experience and skills: `src/data/bio.json`
- Projects: one Markdown file per project in `src/content/projects/`. Set `published: false` to hide a project.
- Images: `public/img/`
- Resume: replace `public/assets/Pouderoux_Kilian_EN.pdf`
- Colours and fonts: `src/styles/tokens.css`

## Credits

Icons come from [Bootstrap Icons](https://icons.getbootstrap.com) (MIT License).
