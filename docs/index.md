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
    <h2>Jump into the tools, scripts, and notes I actually run.</h2>
  </div>
  <div class="nt-home-quicklinks">
    <a href="/docs/">
      <span>Docs</span>
      NerdyPress, NerdyStore, RMM scripts, Linux agent installs, and the setup notes behind them.
    </a>
    <a href="/projects/">
      <span>Projects</span>
      Browser builders, automation repos, storefront experiments, boilerplates, and live project links.
    </a>
    <a href="/homelab">
      <span>Homelab</span>
      My self-hosted services, rack notes, dashboards, remote access, and practical hosting choices.
    </a>
  </div>
</section>

<section class="nt-home-band nt-home-band-split">
  <div>
    <p class="nt-home-kicker">What This Site Is</p>
    <h2>A working notebook for automation, self-hosting, and small useful tools.</h2>
    <p>
      I use this space to document the things I build and maintain: RMM scripts,
      VitePress generators, Nexterm ecosystem notes, Linux install helpers, and
      the homelab patterns that keep it all running.
    </p>
  </div>
  <div class="nt-home-proof-grid">
    <article>
      <strong>RMM & Linux</strong>
      <span>Tactical RMM checks, naming conventions, agent installers, and shell-first maintenance notes.</span>
    </article>
    <article>
      <strong>NerdyPress & Docs</strong>
      <span>VitePress site generation, project documentation, templates, and cleaner publishing workflows.</span>
    </article>
    <article>
      <strong>Homelab & Store</strong>
      <span>Self-hosted dashboards, service notes, NerdyStore catalog work, and deployment experiments.</span>
    </article>
  </div>
</section>
