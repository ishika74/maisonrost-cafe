# Maison Roast — Café Website

A responsive, premium café landing page built with React, TypeScript, Vite, and custom CSS.

## Features

- Responsive desktop and mobile layout
- Café story, menu, visit details, and contact sections
- Mobile navigation toggle
- Contact form with browser validation and status states
- Optional Formspree endpoint integration
- Accessible labels, semantic sections, image alt text, and reduced-motion support

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build and test production output

```bash
npm run build
npm run preview
```

## Make the contact form deliver messages

The form validates in the browser by default, but it does **not** send messages until you connect a form endpoint.

1. Create a form at [Formspree](https://formspree.io/).
2. Copy the endpoint URL they provide.
3. In local development, create a `.env` file in the project root:

   ```bash
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

4. Restart `npm run dev` and test a real submission.
5. In Vercel, open **Project → Settings → Environment Variables**, add `VITE_FORMSPREE_ENDPOINT` with the same endpoint, and redeploy.

Do not commit `.env` or private credentials. Vite exposes variables prefixed with `VITE_` to browser code, so only use a public form endpoint intended for client-side submission.

## Customize before submitting

Search `src/App.tsx` and replace the demo content:
- `Maison Roast` and the logo text
- `12 Market Lane, Your City` with a real address (or a clearly marked fictional project location)
- `hello@maisonroast.example` with the business email
- opening hours, menu items, and sample prices
- Google Maps link and Instagram profile
- image URLs with licensed photos or your own images

The sample menu prices are illustrative. Confirm all business details and image licensing before publishing.

## Publish to GitHub and Vercel

### GitHub

1. Create a new empty repository on GitHub, for example `maison-roast-cafe`.
2. In this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Build Maison Roast café website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/maison-roast-cafe.git
   git push -u origin main
   ```

3. Replace `YOUR_USERNAME` with your GitHub username and use the actual repository URL.

### Vercel

1. Sign in at [Vercel](https://vercel.com/) using GitHub.
2. Choose **Add New → Project** and import `maison-roast-cafe`.
3. Vercel should detect Vite automatically. Build command: `npm run build`; output directory: `dist`.
4. Add the Formspree environment variable if you configured it.
5. Click **Deploy** and wait for the build to finish.
6. Open the generated `*.vercel.app` URL and test mobile, desktop, navigation, and contact form.
7. Push future GitHub commits to `main`; Vercel can redeploy automatically.

## Submission checklist

- [ ] Replace demo content and verify all links
- [ ] `npm run build` completes successfully
- [ ] Test at mobile and desktop widths
- [ ] Test contact form (configure Formspree for actual delivery)
- [ ] Push source code to GitHub
- [ ] Deploy to Vercel
- [ ] Submit the live Vercel URL and GitHub repository URL
