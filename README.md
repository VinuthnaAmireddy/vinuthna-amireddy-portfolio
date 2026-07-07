# Vinuthna Amireddy · Portfolio

A fully static personal portfolio. Plain HTML, CSS, and vanilla JavaScript.
No frameworks, no build step, no backend, no third-party site builder. You own
every file, and you can open `index.html` directly in a browser to see the site.

Live URL after deployment: **https://vinuthnaamireddy.github.io/vinuthna-amireddy-portfolio/**

---

## Folder structure

```
/portfolio
  index.html          Page structure and meta tags (SEO, Open Graph)
  /css/styles.css     All styling. Colors are CSS variables at the top.
  /js/content.js      ALL editable content: projects, experience, skills...
  /js/main.js         Layout logic (rendering, animations, mobile menu)
  /assets/            favicon.svg and og-image.png
  sitemap.xml         For search engines
  robots.txt          For search engines
  README.md           This file
```

---

## Deploy free on GitHub Pages

GitHub Pages hosting is free, permanently, for public repositories. The only
thing in this whole setup that could ever cost money is an optional custom
domain (see the last section).

### 1. Create the repository on GitHub

1. Go to https://github.com/new (log in as `VinuthnaAmireddy`).
2. Repository name: `vinuthna-amireddy-portfolio`
3. Keep it **Public** (required for free GitHub Pages).
4. Do NOT tick "Add a README" (you already have one).
5. Click **Create repository**.

### 2. Push this folder

Open a terminal (Git Bash, PowerShell, or CMD) inside the `portfolio` folder
and run these commands one at a time:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/VinuthnaAmireddy/vinuthna-amireddy-portfolio.git
git push -u origin main
```

If git asks who you are first, set your identity once:

```bash
git config --global user.name "Vinuthna Amireddy"
git config --global user.email "you@example.com"
```

### 3. Turn on GitHub Pages

1. On the repository page, click **Settings** (top tab).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)**
4. Click **Save**.
5. Wait one or two minutes, then refresh the Pages settings page. It will show:
   "Your site is live at https://vinuthnaamireddy.github.io/vinuthna-amireddy-portfolio/"

That's it. Every future `git push` automatically updates the live site within
a minute or two.

### Netlify or Cloudflare Pages instead (optional)

The site is plain static files, so it works anywhere without changes:

- **Netlify**: app.netlify.com → "Add new site" → "Import an existing project"
  → pick the GitHub repo. Build command: leave empty. Publish directory: `/`.
- **Cloudflare Pages**: dash.cloudflare.com → Workers & Pages → Create →
  Pages → connect the repo. Build command: none. Output directory: `/`.

If you switch to either of these (or to a custom domain), update the URLs in
three places: the `<link rel="canonical">` and `og:`/`twitter:` meta tags in
`index.html`, plus `sitemap.xml` and `robots.txt`.

---

## How to edit the site later (no AI needed)

**Almost everything you'd want to change lives in one file: `js/content.js`.**

- **Add a project**: find the `projects:` list, copy one of the existing
  `{ ... }` blocks, paste it below, and change the text.
- **Add a job**: same idea in the `experience:` list. Newest entries go first.
- **Update the "Now" section**: edit the `now.cards` list. The FIRST card is
  the flagship and renders larger; give it a `steps` list to show the
  "how it works" row.
- **Skills, education, publications, about text, quick facts**: all in the
  same file, each block has a comment above it explaining the fields.

After editing, save and refresh your browser to check it, then:

```bash
git add .
git commit -m "Update content"
git push
```

Rule of thumb: if the page ever goes blank after an edit, you probably deleted
a comma, quote, or bracket in `content.js`. Undo your last change and retry.

Things that are NOT in `content.js`:

- **Email address / social links**: in `index.html` (they appear twice: hero
  and contact section). Search for `mailto:vinuthnaamireddy@gmail.com` and the
  LinkedIn/GitHub URLs.
- **Colors and fonts**: at the top of `css/styles.css` under `:root`.
- **Hero headline and tagline**: in `index.html`, inside the
  `<section class="hero">` block.

---

## Custom domain later (the only part that can cost money)

GitHub Pages hosting itself is free forever. If you want
`vinuthna.dev` or similar instead of the `github.io` address, the domain name
is the only thing you'd pay for (roughly 10 to 15 EUR per year at a registrar
like Namecheap, Porkbun, or INWX):

1. Buy the domain at any registrar.
2. In the repo: Settings → Pages → Custom domain → enter your domain → Save.
   GitHub creates a `CNAME` file in the repo.
3. At your registrar, add DNS records pointing to GitHub Pages:
   - A `CNAME` record for `www` pointing to `vinuthnaamireddy.github.io`
   - For the bare domain, four `A` records: `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Back in Pages settings, tick **Enforce HTTPS** once the certificate is
   ready (can take up to a day).
5. Update the canonical/og URLs in `index.html`, `sitemap.xml`, and
   `robots.txt` to the new domain.
