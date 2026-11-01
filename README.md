# Kilian Pouderoux: portfolio

Personal portfolio built with Jekyll and published at https://kilianpdrx.github.io. Pushing to `main` deploys it through GitHub Actions.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

The Ruby version is set in `.ruby-version`.

## Edit the content

- Profile, education, experience and skills: `_data/bio.json`
- Projects: one Markdown file per project in `projects/`. Set `published: false` to hide a project.
- Resume: replace `assets/Pouderoux_Kilian_EN.pdf`
