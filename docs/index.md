---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Nerdy Technician"
  text: "Automation notes, self-hosted builds, and practical documentation"
  tagline: Reliable scripts, tidy docs, and infrastructure experiments built in the open.

  actions:
    - theme: brand
      text: Explore Projects
      link: /projects/
      type: primary
    - theme: alt
      text: Browse Docs
      link: /docs/
    - theme: alt
      text: Contributions
      link: /contributions
    - theme: alt
      text: Read Posts
      link: /posts/
    - theme: alt
      text: Get Involved
      link: /help

  image:
    src: https://avatars.githubusercontent.com/u/45691205?v=4
    alt: Nerdy Technician logo


features:
  - icon:
      src: /logos/jellyglance-icon.png
      alt: JellyGlance logo
    title: JellyGlance
    details: A modern Jellyfin analytics and media-control dashboard for sessions, users, libraries, statistics, Arr calendars, download queues, and webhooks.
    link: /projects/JellyGlance/
    linkText: View Project

  - icon:
      src: /logos/nerdypress-logo.png
      alt: NerdyPress logo
    title: NerdyPress
    details: A visual VitePress site generator with theme controls, page editing, integrations, and deployment workflows.
    link: /projects/NerdyPress/
    linkText: View Project

  - icon:
      src: /logos/nerdy-rmm-scripts.svg
      alt: Nerdy-RMMScripts logo
    title: Nerdy-RMMScripts
    details: Production-ready scripts for checks, monitoring, maintenance, security, software management, and RMM automation.
    link: /projects/Nerdy-RMMScripts/
    linkText: View Project

  - icon:
      src: https://store.nerdytech.dev/favicon.svg
      alt: NerdyStore logo
    title: NerdyStore
    details: A third-party storefront for the Nexterm and Nexploy ecosystem, with apps, scripts, snippets, and themes.
    link: /projects/NerdyStore/
    linkText: View Project

  - icon:
      src: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg
      alt: Tux Linux logo
    title: LinuxRMM-Script
    details: A guided Linux installer for Tactical RMM agents, with clearer prompts, logging, and architecture detection.
    link: /projects/LinuxRMMScript/
    linkText: View Project

  - icon:
      src: /logos/boilerplates.png
      alt: BoilerPlates logo
    title: BoilerPlates
    details: Reusable starter templates and snippets for faster, more consistent project setup.
    link: /projects/BoilerPlates/
    linkText: View Project

  - icon: 🧰
    title: CV & Expertise
    details: Practical experience across endpoint management, automation, systems deployment, and security awareness.
    link: /cv/
    linkText: View CV

  - icon:
      src: https://github.com/Nerdy-Technician/SnippyCode/raw/main/client/public/CodeSnippy.png
      alt: SnippyCode logo
    title: SnippyCode
    details: An active project currently being developed in the Nerdy Technician ecosystem.
    link: /projects/SnippyCode/
    linkText: View Project
---

<nav class="home-option-pills" aria-label="Explore Nerdy Technician">
  <span class="home-option-label">Explore the site</span>
  <a href="/projects/">Projects</a>
  <a href="/docs/">Documentation</a>
  <a href="/posts/">Posts</a>
  <a href="/homelab">Homelab</a>
  <a href="/help">Help Projects</a>
  <a href="/contributions">Contributions</a>
</nav>

<details class="home-console">
  <summary><span class="home-console-prompt">&gt;_</span> Open site console <span class="home-console-hint">quick launch / project status</span></summary>
  <div class="home-console-body">
    <div class="home-console-status">
      <span class="home-console-dot"></span>
      <strong>NERDY TECHNICIAN / ONLINE</strong>
      <span>8 projects indexed</span>
    </div>
    <div class="home-console-actions">
      <a href="/projects/">`projects` <span>Browse the catalogue</span></a>
      <a href="/posts/">`posts` <span>Read homelab notes</span></a>
      <a href="/help">`help` <span>Find volunteer roles</span></a>
      <a href="/docs/">`docs` <span>Open setup guides</span></a>
    </div>
  </div>
</details>

<nav class="mobile-app-dock" aria-label="Quick navigation">
  <a href="/"><span>⌂</span><small>Home</small></a>
  <a href="/projects/"><span>◈</span><small>Projects</small></a>
  <a href="/posts/"><span>✦</span><small>Posts</small></a>
  <a href="/help"><span>+</span><small>Help</small></a>
  <a href="/contributions"><span>↗</span><small>Contribute</small></a>
</nav>
