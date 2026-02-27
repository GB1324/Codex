# Training Rebuild (Static PWA)

A mobile-first, Apple-style static web app for your 4-day performance rebuild program.

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

---

## Deployment options

If GitHub shows **"upgrade or make repository public to enable Pages"**, your current plan/repo visibility blocks Pages for this repo.

Use one of these options:

### Option A (quickest): Make repo public and use GitHub Pages

1. Push this project to GitHub.
2. In GitHub: **Settings → General → Danger Zone → Change repository visibility → Public**.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Commit/push to `main` (or `work` in this repo) and wait for workflow **Deploy static site to GitHub Pages** to pass.

Your URL becomes:

`https://<your-username>.github.io/<repo-name>/`

### Option B: Keep repo private and use Netlify (recommended private-friendly static hosting)

1. Create a free Netlify account.
2. Click **Add new site → Import an existing project**.
3. Connect your GitHub repo (private is fine).
4. Build command: *(leave empty)*
5. Publish directory: `.`
6. Deploy.

You get a live HTTPS URL immediately.

### Option C: Keep repo private and use Cloudflare Pages

1. Create Cloudflare account.
2. Go to **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select repo.
4. Framework preset: `None`.
5. Build command: *(empty)*
6. Build output directory: `.`

---

## If domain is blank after clicking Save in Pages

Check these in order:

1. **Correct URL format**
   - It should be `https://<username>.github.io/<repo-name>/` (repo name is required for project pages).
2. **Pages build actually deployed**
   - Go to **Actions** and verify **Deploy static site to GitHub Pages** finished green.
3. **Pages source is GitHub Actions**
   - In **Settings → Pages**, Source should be **GitHub Actions**.
4. **Wait 1–5 minutes for propagation**
   - First deploy can take a couple of minutes.
5. **Hard refresh / clear cache**
   - Browser may cache old responses.
6. **Try the Pages URL directly from the Actions run output**
   - It shows the exact deployed URL.

---

## iPhone install (Home Screen)

1. Open deployed URL in **Safari**.
2. Tap **Share**.
3. Tap **Add to Home Screen**.
4. Tap **Add**.

It will run in standalone app mode via the included manifest and service worker.

---

## Project structure

- `index.html`
- `styles.css`
- `script.js`
- `manifest.json`
- `service-worker.js`
- `icon.svg`
- `.github/workflows/deploy-pages.yml`
- `.nojekyll`
- `404.html`


## 404 on `https://gb1324.github.io/Codex/` (your screenshot case)

If you still see GitHub’s default **404 File not found** page, it means Pages is not serving this repository yet.

Do this exact sequence:

1. Go to **Settings → Pages** and confirm:
   - **Source** = `GitHub Actions`
   - The shown Pages URL matches your repo name exactly.
2. Go to **Actions** and run **Deploy static site to GitHub Pages** manually (**Run workflow**).
3. Open the workflow run and confirm the last step output contains `page_url`.
4. Open that exact `page_url` from the run summary.
5. If repo name case differs, try both:
   - `https://gb1324.github.io/Codex/`
   - `https://gb1324.github.io/codex/`
6. Wait 2–5 minutes, then hard refresh (`Cmd/Ctrl+Shift+R`).

If the workflow is green but URL still 404, the most common cause is that Pages source is still set to branch mode instead of GitHub Actions.
