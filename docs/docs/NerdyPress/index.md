# NerdyPress

NerdyPress is a browser-based generator for creating VitePress documentation
sites quickly. It turns a guided design and content form into a downloadable
VitePress project that is ready to install, run, customise, and deploy.

## Links

- [Open the live app](https://press.nerdytech.dev/)
- [View the project page](/projects/NerdyPress/)
- [View the GitHub repository](https://github.com/Nerdy-Technician/NerdyPress)

## What You Can Configure

- Site title, tagline, repo slug, header logo, site logo, and favicon.
- Theme palette, style preset, font pairing, button styling, and card styling.
- Navigation links, social icons, social placement, footer links, and footer text.
- Homepage buttons and feature cards.
- Documentation pages with slugs, descriptions, markdown content, and live preview.
- Integrations including local search, Mermaid, sitemap, edit links, last updated metadata, PWA support, Open Graph, robots.txt, analytics, and deployment targets.

## Generated Project

The downloaded site includes VitePress config, custom theme files, markdown
pages, public assets, package scripts, deployment helpers, and a README.

```text
my-vitepress-site/
├── .vitepress/
│   ├── config.mts
│   └── theme/
├── public/
├── index.md
├── guide.md
├── package.json
└── README.md
```

## Deployment Targets

NerdyPress can generate deployment helpers for:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
