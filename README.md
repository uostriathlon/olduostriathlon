# University of Sheffield Triathlon Club — Static Site (GitHub Pages)

Cleaned and rebuilt Wix export with a working static navigation bar.

## Features added for GitHub Pages

- **Working navigation** with hover/click dropdowns (About, Training, Races, Sponsors)
- All internal links rewritten so they resolve from both the home page and every sub-page
- Missing pages (gallery, contact-us, training, past-events) mapped to the closest existing page or a Contact section
- Broken Wix header/menu hidden so it no longer interferes
- Image paths normalized (spaces / percent-encoding removed, relative paths)
- Broken font files removed
- `.nojekyll` included so GitHub Pages does not run Jekyll

## Deploy

1. Unzip this archive.
2. Push the **contents** of the `olduostriathlon/` folder to the `main` (or `gh-pages`) branch of a GitHub repository.
3. Settings → Pages → Source = that branch / root.
4. Site URL will be `https://<username>.github.io/<repo>/`.

## Notes

- Original Wix interactive components (Thunderbolt runtime) cannot run as pure static files. The injected static nav replaces the broken menu.
- Some external assets (Facebook plugins, old Wix CDN scripts, analytics) still reference third-party hosts and may show console warnings; they are non-critical.
- Contact: triathlon@sheffield.ac.uk · Instagram [@sheffunitri](https://www.instagram.com/sheffunitri/) · Facebook [UoSTriathlon](https://www.facebook.com/UoSTriathlon/)
