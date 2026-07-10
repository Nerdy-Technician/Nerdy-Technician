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

  image:
    src: https://avatars.githubusercontent.com/u/45691205?v=4
    alt: Nerdy Technician logo


features:
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

  - icon:
      src: /logos/homelab.png
      alt: Homelab logo
    title: Homelab
    details: A compact self-hosted rack build focused on tidy networking, automation, and low-power compute.
    link: /homelab
    linkText: View Homelab

  - icon: 🧰
    title: CV & Expertise
    details: Practical experience across endpoint management, automation, systems deployment, and security awareness.
    link: /cv/
    linkText: View CV
---

<section class="nt-home-band">
  <div class="nt-home-section-head">
    <p>Start Here</p>
    <h2>Pick the path that matches what you are building.</h2>
  </div>
  <div class="nt-home-quicklinks">
    <a href="/docs/">
      <span>Docs</span>
      Setup guides, project notes, naming conventions, and repeatable workflows.
    </a>
    <a href="/projects/">
      <span>Projects</span>
      Live tools, source repositories, and the ideas behind each build.
    </a>
    <a href="/homelab">
      <span>Homelab</span>
      A compact self-hosted stack focused on practical automation and tidy operations.
    </a>
  </div>
</section>

<section class="nt-home-band nt-home-band-split">
  <div>
    <p class="nt-home-kicker">Working Style</p>
    <h2>Documentation-first infrastructure work.</h2>
    <p>
      This site collects the scripts, builders, storefront notes, and operational
      patterns that make repeatable technical work easier to share and revisit.
    </p>
  </div>
  <div class="nt-home-proof-grid">
    <article>
      <strong>Automation</strong>
      <span>RMM scripts, installers, checks, and repeatable setup helpers.</span>
    </article>
    <article>
      <strong>Self-hosting</strong>
      <span>Service notes, rack decisions, monitoring ideas, and deployment habits.</span>
    </article>
    <article>
      <strong>Documentation</strong>
      <span>Readable project pages, guided docs, and browser-based site generation.</span>
    </article>
  </div>
</section>
