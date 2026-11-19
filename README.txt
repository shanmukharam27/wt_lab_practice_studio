# WT Lab Practice Studio

A laptop-first, Vercel-ready static web app built from the supplied 40-set WT Lab question bank.

## Run locally
1. Extract the ZIP.
2. Open a terminal in this folder.
3. Run `python -m http.server 8000`
4. Open `http://localhost:8000` in Chrome.

Service workers require localhost or HTTPS. Opening index.html directly (`file://`) will show the app but offline caching will not install.

## Deploy to Vercel
1. Create a GitHub repository and upload all files in this folder.
2. Sign in to https://vercel.com and choose **Add New → Project**.
3. Import the repository.
4. Framework preset: **Other**. Build command: leave blank. Output directory: `.`.
5. Deploy. Vercel will provide a public `*.vercel.app` URL.

## Offline preparation
Open the deployed HTTPS URL once while online and wait for it to finish loading. CodeMirror assets are cached when the browser allows it. Then test by disconnecting Wi-Fi and reloading. Keep this ZIP as a backup. Local progress and edited code are stored in browser localStorage on that laptop.

## Important runtime notes
- HTML, CSS and browser JavaScript can run in the preview panel.
- PHP needs PHP installed locally and a local PHP server.
- MySQL needs a local database server and PHP's MySQL extension.
- Node.js programs need Node.js installed locally.
- AngularJS examples need the AngularJS library; the CDN copy is cached on first online visit where permitted.

## Scope note
All 40 sets / 80 questions from the supplied PDF are included. The app provides concise starter solutions and concept notes based on each prompt. Database-backed and multi-page tasks may need adaptation to your local schema/files. Check every program against your lab's exact requirements before the exam.
