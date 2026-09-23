# ZoneSeven website for Netlify

This package is configured as a static Netlify site.

## Deploy from a Git repository

1. Upload this folder to GitHub, GitLab, or Bitbucket.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the repository. Netlify will read `netlify.toml` automatically.
4. Deploy the site.

Build command: `npm run build`

Publish directory: `dist/client`

## Manual drag-and-drop deploy

The separate `z7-netlify-deploy.zip` contains the already-built static site. Unzip it, then drag the resulting folder into Netlify Drop.

The site includes `/` and `/dashboard/`. The contact form copies or downloads a project brief locally; it does not send email.
