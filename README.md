# Training Rebuild (Static PWA)

A mobile-first, Apple-style static web app for your 4-day performance rebuild program.

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Quick launch (right now)

If you just want to run and see it immediately on your computer:

1. Open a terminal in this folder.
2. Run:

```bash
python -m http.server 8000
```

3. Open your browser to:

`http://localhost:8000/index.html`

If `localhost` does not load, try:

`http://127.0.0.1:8000/index.html`

To stop the server, return to terminal and press `Ctrl + C`.

### Open on your phone on the same Wi-Fi (optional)

1. Find your computer LAN IP (example `192.168.1.25`).
2. Start server as above.
3. On phone Safari/Chrome open:

`http://<your-computer-ip>:8000/index.html`

(You may need to allow local network/firewall access on your computer.)


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


## Do I have to configure GitHub Pages Jekyll?

No. For this project, you do **not** need to configure Jekyll.

- This repo already includes a `.nojekyll` file, which tells GitHub Pages to skip Jekyll processing.
- Since this is a plain static app (HTML/CSS/JS), skipping Jekyll is the correct setup.
- Just keep **Settings → Pages → Source = GitHub Actions** and deploy via the workflow.


## Critical: this repo must be pushed to GitHub

If you are seeing Pages deploy a workflow named **"Deploy static content to Pages"** and not seeing this app, the likely issue is that your GitHub repository does not yet contain these files/commits.

Use this exact flow on your machine:

```bash
git clone <your-github-repo-url>
cd <repo>
# copy these project files in, or cherry-pick the commits

git add .
git commit -m "Add Training Rebuild static PWA"
git push origin main
```

Then in GitHub:
1. **Settings → Pages → Source: GitHub Actions**
2. **Actions → run/verify the Pages workflow is green**
3. Open the `page_url` shown in that run summary.

> Note: this coding environment does not auto-push to your GitHub account unless a remote is configured and pushed.


## How to swap videos

All exercise videos are centralized in `script.js` inside the `VIDEO_URLS` object near the top of the file.

1. Open `script.js`.
2. Find `const VIDEO_URLS = { ... }`.
3. Replace any value with your preferred YouTube embed URL:
   - format: `https://www.youtube.com/embed/<VIDEO_ID>`
4. Any exercise using a placeholder is marked in the UI with a **Needs video** badge so you can quickly find and replace it.


## How to swap exercise images

Exercise image paths live in `script.js` inside the `exercises` library object:

```js
const exercises = {
  bench_press: { imageSrc: 'assets/images/bench-press.svg', ... }
}
```

Replace any `imageSrc` with another local file in `/assets/images/`.
Use 16:9 images for best card layout.

## How to add/replace demo links

Demo links also live in `script.js` in the same `exercises` library object:

```js
bench_press: { demoUrl: 'https://www.youtube.com/watch?v=...' }
```

- Use full YouTube watch links.
- If `demoUrl` is `null`, the app shows **Demo (placeholder)** and a **Needs demo link** badge.

## GitHub Pages deploy (main branch only)

The Pages workflow is configured to deploy only from `main` plus manual runs:

```yaml
on:
  push:
    branches:
      - main
  workflow_dispatch:
```

So feature/Codex branches will not attempt deployment.
