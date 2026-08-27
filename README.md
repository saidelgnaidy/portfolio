# Saeed Ahmed — Portfolio

Personal site for **Saeed Ahmed Mohamed**, Mobile Developer & Technical Lead. It covers shipped work in Flutter, native Android, biometrics, eKYC, and hardware-integrated products, plus internal tools like AppPulse and DevEval AI.

**Live:** [saidelgnaidy.github.io/portfolio](https://saidelgnaidy.github.io/portfolio)

[GitHub](https://github.com/saidelgnaidy) · [LinkedIn](https://linkedin.com/in/saidelgnaidy) · [Email](mailto:saeed.elgnaidy@gmail.com)

## What’s on the site

- Hero, about, skills, and experience from the CV
- Filterable project grid (Biometrics, Hardware, Identity, Enterprise)
- Click a tile for a full-size gallery plus overview, features, stack, and impact
- Dark theme by default, with a light-mode toggle
- Contact links and a downloadable CV (`public/cv.pdf`)

## Stack

React 18 · Vite 6 · Tailwind CSS · Framer Motion · Lucide

## Run locally

Requires Node 20+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (with base path `/portfolio/`).

```bash
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Content

| Path | Role |
| --- | --- |
| `src/data/projects.js` | Profile, short project cards, tech chips, stats, skills, experience |
| `src/data/projectDetails.js` | Long dialog copy (overview, features, stack, impact) |
| `public/cv.pdf` | CV download |
| `public/projects/<slug>/` | Screenshots used on tiles and in the dialog |

To add a project: put images under `public/projects/<slug>/`, register the gallery and card in `projects.js`, and add the matching writeup in `projectDetails.js`.

Vite `base` is `/portfolio/` so GitHub Pages can host the site at `https://saidelgnaidy.github.io/portfolio/`. If you rename the repo, update `vite.config.js` to match.

## Deploy

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the app and publishes `dist/` to GitHub Pages. The repository must stay **public** for the Pages URL to load on a free personal account.
