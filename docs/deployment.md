# Deployment

1. Enable GitHub Pages for the repository: Settings → Pages → Build and deployment → Source = “GitHub Actions”.
2. Push the project to GitHub with the default branch named `main`.
3. Any push to `main` triggers `.github/workflows/deploy.yml`, which:
   - installs Node.js 20 and project dependencies,
   - sets `VITE_APP_BASE` so the Vite build uses the correct subpath,
   - builds the static bundle (`npm run build`) and publishes `dist/` to GitHub Pages.
4. To deploy manually, run the “Deploy to GitHub Pages” workflow via the Actions tab (`Run workflow`).

After the workflow completes, the published site URL is available in the workflow run summary and under Settings → Pages. No VPS is required unless you add backend services.***
