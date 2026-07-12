<style>
.contrib-page {
  width: 150%;
  max-width: 200%;
  box-sizing: border-box;
}

.contrib-list,
.contrib-list li {
  list-style: none !important;
  list-style-type: none !important;
}

.contrib-list li::marker {
  content: "";
}

.contrib-list {
  padding-left: 0;
  margin: 0 0 14px;
}

.contrib-list li {
  position: relative;
  padding-left: 22px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #b8b8b8;
  line-height: 1.5;
}

.contrib-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #c90000;
  opacity: 0.8;
  font-size: 12px;
  font-weight: 700;
}

.contrib-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: none;
}

@media (max-width: 720px) {
  .contrib-grid {
    grid-template-columns: 1fr;
  }
}

.contrib-subtle-link {
  display: inline-block;
  margin-top: 8px;
}

.contrib-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0 0 14px;
}

.contrib-badges a {
  line-height: 0;
}

.contrib-badges img {
  height: 20px;
  width: auto;
}
</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">


<div class="contrib-page">

<section class="contrib-hero">
  <p class="contrib-eyebrow">Open source &amp; community work</p>
  <h1><i class="ti ti-git-merge" style="color:#c90000; font-size:0.8em; margin-right:10px; vertical-align:2px;"></i>Contributions</h1>
  <p>
    I contribute where practical infrastructure meets real-world automation:
    scripts, docs, integrations, testing, and the small fixes that make tools
    easier for everyone else to run.
  </p>
  <div class="contrib-actions">
    <a href="https://github.com/Nerdy-Technician" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-github"></i> GitHub</a>
    <a href="mailto:roffo@nerdy-technician.social"><i class="ti ti-mail"></i>  Email</a>
    <a href="https://masto.nerdy-technician.social/@Roffo" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-mastodon"></i> Mastodon</a>
  </div>
</section>


<div class="contrib-grid">
  <article class="contrib-card">
    <div class="contrib-card-header">
      <span class="contrib-icon">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="">
      </span>
      <div>
        <h3>LinuxRMM-Script</h3>
        <p>Active contributor</p>
      </div>
    </div>
    <p>
      Community-driven Linux automation for remote monitoring and management
      environments.
    </p>
    <div class="contrib-badges">
      <a href="https://github.com/netvolt/LinuxRMM-Script/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/netvolt/LinuxRMM-Script?style=flat&logo=github&color=c90000" alt="LinuxRMM-Script GitHub stars"></a>
      <a href="https://github.com/netvolt/LinuxRMM-Script/network/members" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/netvolt/LinuxRMM-Script?style=flat&logo=github&color=c90000" alt="LinuxRMM-Script GitHub forks"></a>
      <a href="https://github.com/netvolt/LinuxRMM-Script/issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/netvolt/LinuxRMM-Script?style=flat&logo=github&color=c90000" alt="LinuxRMM-Script GitHub issues"></a>
      <a href="https://github.com/netvolt/LinuxRMM-Script/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/contributors/netvolt/LinuxRMM-Script?style=flat&logo=github&color=c90000" alt="LinuxRMM-Script GitHub contributors"></a>
      <a href="https://github.com/netvolt/LinuxRMM-Script/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/netvolt/LinuxRMM-Script?style=flat&color=c90000" alt="LinuxRMM-Script license"></a>
      <a href="https://github.com/netvolt/LinuxRMM-Script/commits/main" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/last-commit/netvolt/LinuxRMM-Script?style=flat&logo=github&color=c90000" alt="LinuxRMM-Script last commit"></a>
    </div>
    <ul class="contrib-list">
      <li>Cross-platform compatibility improvements</li>
      <li>Error handling and performance tuning</li>
      <li>Extended automation features</li>
      <li>Community support and practical documentation</li>
    </ul>
    <a class="contrib-link" href="https://github.com/netvolt/LinuxRMM-Script" target="_blank" rel="noopener noreferrer">View repository</a>
  </article>

  <article class="contrib-card">
    <div class="contrib-card-header">
      <span class="contrib-icon">
        <img src="https://homarr.dev/img/favicon.png" alt="">
      </span>
      <div>
        <h3>Homarr</h3>
        <p>Contributor and integration developer</p>
      </div>
    </div>
    <p>
      Self-hosted dashboard for organizing and launching your homelab services
      from one clean web interface.
    </p>
    <div class="contrib-badges">
      <a href="https://github.com/homarr-labs/homarr/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/homarr-labs/homarr?style=flat&logo=github&color=c90000" alt="Homarr GitHub stars"></a>
      <a href="https://github.com/homarr-labs/homarr/network/members" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/homarr-labs/homarr?style=flat&logo=github&color=c90000" alt="Homarr GitHub forks"></a>
      <a href="https://github.com/homarr-labs/homarr/issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/homarr-labs/homarr?style=flat&logo=github&color=c90000" alt="Homarr GitHub issues"></a>
      <a href="https://github.com/homarr-labs/homarr/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/contributors/homarr-labs/homarr?style=flat&logo=github&color=c90000" alt="Homarr GitHub contributors"></a>
      <a href="https://github.com/homarr-labs/homarr/blob/dev/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/homarr-labs/homarr?style=flat&color=c90000" alt="Homarr license"></a>
      <a href="https://github.com/homarr-labs/homarr/commits/dev" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/last-commit/homarr-labs/homarr?style=flat&logo=github&color=c90000" alt="Homarr last commit"></a>
    </div>
    <ul class="contrib-list">
      <li>Helping maintain and improve the <a href="https://homarr.dev/docs/integrations/gotify/" target="_blank" rel="noopener noreferrer">Gotify</a> plugin for Homarr</li>
      <li>Helping maintain the <a href="https://homarr.dev/docs/integrations/traefik/" target="_blank" rel="noopener noreferrer">Traefik</a> plugin</li>
      <li>Developing other third-party integrations</li>
    </ul>
    <div class="contrib-card-actions">
      <a class="contrib-link" href="https://github.com/homarr-labs/homarr" target="_blank" rel="noopener noreferrer">View repository</a>
      <a class="contrib-link contrib-link-secondary" href="https://homarr.dev/" target="_blank" rel="noopener noreferrer">View site</a>
    </div>
    <a class="contrib-subtle-link" href="https://github.com/orgs/homarr-labs/teams/contributors" target="_blank" rel="noopener noreferrer">View all contributors →</a>
  </article>

  <article class="contrib-card">
    <div class="contrib-card-header">
      <span class="contrib-icon">
        <img src="https://nexterm.dev/assets/img/favicon.ico" alt="">
      </span>
      <div>
        <h3>Nexterm</h3>
        <p>Contributor and app developer</p>
      </div>
    </div>
    <p>
      Ecosystem work around third-party apps, scripts, snippets, and automation
      sources.
    </p>
    <div class="contrib-badges">
      <a href="https://github.com/gnmyt/Nexterm/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/gnmyt/Nexterm?style=flat&logo=github&color=c90000" alt="Nexterm GitHub stars"></a>
      <a href="https://github.com/gnmyt/Nexterm/network/members" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/gnmyt/Nexterm?style=flat&logo=github&color=c90000" alt="Nexterm GitHub forks"></a>
      <a href="https://github.com/gnmyt/Nexterm/issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/gnmyt/Nexterm?style=flat&logo=github&color=c90000" alt="Nexterm GitHub issues"></a>
      <a href="https://github.com/gnmyt/Nexterm/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/contributors/gnmyt/Nexterm?style=flat&logo=github&color=c90000" alt="Nexterm GitHub contributors"></a>
      <a href="https://github.com/gnmyt/Nexterm/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/gnmyt/Nexterm?style=flat&color=c90000" alt="Nexterm license"></a>
      <a href="https://github.com/gnmyt/Nexterm/commits/main" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/last-commit/gnmyt/Nexterm?style=flat&logo=github&color=c90000" alt="Nexterm last commit"></a>
    </div>
    <ul class="contrib-list">
      <li>Third-party app development with NerdyStore</li>
      <li>Source and catalog integration workflows</li>
      <li>Deployment and automation tooling</li>
      <li>Community feedback and issue reporting</li>
    </ul>
    <div class="contrib-card-actions">
      <a class="contrib-link" href="https://github.com/gnmyt/Nexterm" target="_blank" rel="noopener noreferrer">View repository</a>
      <a class="contrib-link contrib-link-secondary" href="https://nexterm.dev/" target="_blank" rel="noopener noreferrer">View site</a>
    </div>
  </article>

  <article class="contrib-card">
    <div class="contrib-card-header">
      <span class="contrib-icon">
        <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/authentik.png" alt="">
      </span>
      <div>
        <h3>Authentik Docs</h3>
        <p>Documentation contributor</p>
      </div>
    </div>
    <p>
      Documentation contributions for Authentik, the open-source identity
      provider used across self-hosted and infrastructure environments.
    </p>
    <div class="contrib-badges">
      <a href="https://github.com/goauthentik/authentik/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/goauthentik/authentik?style=flat&logo=github&color=c90000" alt="Authentik GitHub stars"></a>
      <a href="https://github.com/goauthentik/authentik/network/members" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/goauthentik/authentik?style=flat&logo=github&color=c90000" alt="Authentik GitHub forks"></a>
      <a href="https://github.com/goauthentik/authentik/issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/goauthentik/authentik?style=flat&logo=github&color=c90000" alt="Authentik GitHub issues"></a>
      <a href="https://github.com/goauthentik/authentik/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/contributors/goauthentik/authentik?style=flat&logo=github&color=c90000" alt="Authentik GitHub contributors"></a>
      <a href="https://github.com/goauthentik/authentik/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/goauthentik/authentik?style=flat&color=c90000" alt="Authentik license"></a>
      <a href="https://github.com/goauthentik/authentik/commits/main" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/last-commit/goauthentik/authentik?style=flat&logo=github&color=c90000" alt="Authentik last commit"></a>
    </div>
    <ul class="contrib-list">
      <li>Docs improvements for clearer setup and operational guidance</li>
      <li>Practical feedback from real self-hosted identity deployments</li>
      <li>Community-focused fixes that make the documentation easier to follow</li>
    </ul>
    <div class="contrib-card-actions">
      <a class="contrib-link" href="https://github.com/goauthentik/authentik" target="_blank" rel="noopener noreferrer">View repository</a>
      <a class="contrib-link contrib-link-secondary" href="https://docs.goauthentik.io/" target="_blank" rel="noopener noreferrer">View docs</a>
    </div>
  </article>

  <article class="contrib-card">
    <div class="contrib-card-header">
      <span class="contrib-icon">
        <img src="https://github.com/samuelloranger/labby/raw/main/src/web/public/icons/labby.svg" alt="">
      </span>
      <div>
        <h3>Labby</h3>
        <p>Contributor</p>
      </div>
    </div>
    <p>
      Self-hosted homelab dashboard built with Svelte and Bun, focused on
      widgets, live Docker stats, and real-time updates.
    </p>
    <div class="contrib-badges">
      <a href="https://github.com/samuelloranger/labby/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/samuelloranger/labby?style=flat&logo=github&color=c90000" alt="Labby GitHub stars"></a>
      <a href="https://github.com/samuelloranger/labby/network/members" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/samuelloranger/labby?style=flat&logo=github&color=c90000" alt="Labby GitHub forks"></a>
      <a href="https://github.com/samuelloranger/labby/issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/samuelloranger/labby?style=flat&logo=github&color=c90000" alt="Labby GitHub issues"></a>
      <a href="https://github.com/samuelloranger/labby/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/contributors/samuelloranger/labby?style=flat&logo=github&color=c90000" alt="Labby GitHub contributors"></a>
      <a href="https://github.com/samuelloranger/labby/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/samuelloranger/labby?style=flat&color=c90000" alt="Labby license"></a>
      <a href="https://github.com/samuelloranger/labby/commits/main" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/last-commit/samuelloranger/labby?style=flat&logo=github&color=c90000" alt="Labby last commit"></a>
    </div>
    <ul class="contrib-list">
      <li>Contributions to homelab dashboard functionality</li>
      <li>Practical feedback and improvements from self-hosted usage</li>
      <li>Community support around dashboard workflows and integrations</li>
    </ul>
    <div class="contrib-card-actions">
      <a class="contrib-link" href="https://github.com/samuelloranger/labby" target="_blank" rel="noopener noreferrer">View repository</a>
    </div>
  </article>

  <article class="contrib-card contrib-card-featured">
    <div class="contrib-card-header">
      <span class="contrib-icon">
        <img src="https://store.nerdytech.dev/favicon.svg" alt="">
      </span>
      <div>
        <h3>NerdyStore</h3>
        <p>Maintainer</p>
      </div>
    </div>
    <p>
      A third-party storefront for Nexterm and Nexploy apps, scripts, snippets,
      themes, and source catalog workflows.
    </p>
    <div class="contrib-badges">
      <a href="https://github.com/Nerdy-Technician/NerdyStore/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/Nerdy-Technician/NerdyStore?style=flat&logo=github&color=c90000" alt="NerdyStore GitHub stars"></a>
      <a href="https://github.com/Nerdy-Technician/NerdyStore/network/members" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/Nerdy-Technician/NerdyStore?style=flat&logo=github&color=c90000" alt="NerdyStore GitHub forks"></a>
      <a href="https://github.com/Nerdy-Technician/NerdyStore/issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/Nerdy-Technician/NerdyStore?style=flat&logo=github&color=c90000" alt="NerdyStore GitHub issues"></a>
      <a href="https://github.com/Nerdy-Technician/NerdyStore/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/contributors/Nerdy-Technician/NerdyStore?style=flat&logo=github&color=c90000" alt="NerdyStore GitHub contributors"></a>
      <a href="https://github.com/Nerdy-Technician/NerdyStore/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/Nerdy-Technician/NerdyStore?style=flat&color=c90000" alt="NerdyStore license"></a>
      <a href="https://github.com/Nerdy-Technician/NerdyStore/commits/main" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/last-commit/Nerdy-Technician/NerdyStore?style=flat&logo=github&color=c90000" alt="NerdyStore last commit"></a>
    </div>
    <ul class="contrib-list">
      <li>Catalog structure and source management</li>
      <li>App, script, snippet, and theme organisation</li>
      <li>Contributor-friendly workflows</li>
      <li>Documentation and release notes</li>
    </ul>
    <div class="contrib-card-actions">
      <a class="contrib-link" href="https://github.com/Nerdy-Technician/NerdyStore" target="_blank" rel="noopener noreferrer">View repository</a>
      <a class="contrib-link contrib-link-secondary" href="https://store.nerdytech.dev/" target="_blank" rel="noopener noreferrer">View store</a>
    </div>
  </article>

  <article class="contrib-card">
    <div class="contrib-card-header">
      <span class="contrib-icon">
        <img src="https://raw.githubusercontent.com/CyferShepard/Jellystat/main/public/favicon.ico" alt="">
      </span>
      <div>
        <h3>Jellystat</h3>
        <p>Contributor</p>
      </div>
    </div>
    <p>
      Free and open-source statistics app for Jellyfin, focused on playback
      history, user activity, library stats, and media-server insights.
    </p>
    <div class="contrib-badges">
      <a href="https://github.com/CyferShepard/Jellystat/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/CyferShepard/Jellystat?style=flat&logo=github&color=c90000" alt="Jellystat GitHub stars"></a>
      <a href="https://github.com/CyferShepard/Jellystat/network/members" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/CyferShepard/Jellystat?style=flat&logo=github&color=c90000" alt="Jellystat GitHub forks"></a>
      <a href="https://github.com/CyferShepard/Jellystat/issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/CyferShepard/Jellystat?style=flat&logo=github&color=c90000" alt="Jellystat GitHub issues"></a>
      <a href="https://github.com/CyferShepard/Jellystat/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/contributors/CyferShepard/Jellystat?style=flat&logo=github&color=c90000" alt="Jellystat GitHub contributors"></a>
      <a href="https://github.com/CyferShepard/Jellystat/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/CyferShepard/Jellystat?style=flat&color=c90000" alt="Jellystat license"></a>
      <a href="https://github.com/CyferShepard/Jellystat/commits/main" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/last-commit/CyferShepard/Jellystat?style=flat&logo=github&color=c90000" alt="Jellystat last commit"></a>
    </div>
    <ul class="contrib-list">
      <li>Contributions around Jellyfin statistics and media analytics workflows</li>
      <li>Practical feedback from self-hosted Jellyfin and monitoring setups</li>
      <li>Community support, testing, and issue-focused improvements</li>
    </ul>
    <div class="contrib-card-actions">
      <a class="contrib-link" href="https://github.com/CyferShepard/Jellystat" target="_blank" rel="noopener noreferrer">View repository</a>
    </div>
  </article>

  <article class="contrib-card">
    <div class="contrib-card-header">
      <span class="contrib-icon">
        <img src="https://github.com/jl94x4/Server-Manager-Portal/raw/main/static/logo.png" alt="">
      </span>
      <div>
        <h3>Server-Manager-Portal</h3>
        <p>Contributor</p>
      </div>
    </div>
    <p>A premium, fully-automated management and analytics portal for Plex/Jellyfin servers.</p>
    <div class="contrib-badges">
      <a href="https://github.com/jl94x4/Server-Manager-Portal/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/jl94x4/Server-Manager-Portal?style=flat&logo=github&color=c90000" alt="Server-Manager-Portal GitHub stars"></a>
      <a href="https://github.com/jl94x4/Server-Manager-Portal/network/members" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/jl94x4/Server-Manager-Portal?style=flat&logo=github&color=c90000" alt="Server-Manager-Portal GitHub forks"></a>
      <a href="https://github.com/jl94x4/Server-Manager-Portal/issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/jl94x4/Server-Manager-Portal?style=flat&logo=github&color=c90000" alt="Server-Manager-Portal GitHub issues"></a>
      <a href="https://github.com/jl94x4/Server-Manager-Portal/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/contributors/jl94x4/Server-Manager-Portal?style=flat&logo=github&color=c90000" alt="Server-Manager-Portal GitHub contributors"></a>
      <a href="https://github.com/jl94x4/Server-Manager-Portal/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/jl94x4/Server-Manager-Portal?style=flat&color=c90000" alt="Server-Manager-Portal license"></a>
      <a href="https://github.com/jl94x4/Server-Manager-Portal/commits/main" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/last-commit/jl94x4/Server-Manager-Portal?style=flat&logo=github&color=c90000" alt="Server-Manager-Portal last commit"></a>
    </div>
    <ul class="contrib-list">
      <li>Added full <a href="https://jellyfin.org/" target="_blank" rel="noopener noreferrer">Jellyfin</a> support alongside Plex, including auth, branding, and dashboards</li>
      <li>Built Jellyfin Quick Connect login and server-branded splash screens</li>
      <li>Added <a href="https://github.com/CyferShepard/Jellystat" target="_blank" rel="noopener noreferrer">Jellystat</a>-backed analytics and media-aware system diagnostics</li>
      <li>Made background tasks and user management media-player aware</li>
      <li>Reorganized Media Stack settings and added Jellyseerr support</li>
      <li>Added Jellyfin recently-added movies, shows, and music to the discover page</li>
      <li>Built branding proxy endpoints to pull server icon, favicon, and login splash directly from Jellyfin</li>
      <li>Added Jellyfin user sync with profile image import</li>
      <li>Added default status monitor entries for Jellyfin, Jellystat, Sonarr, Radarr, and Seerr</li>
      <li>Documented Jellyfin setup, Quick Connect, and branding behavior in the README</li>
    </ul>
    <div class="contrib-card-actions">
      <a class="contrib-link" href="https://github.com/jl94x4/Server-Manager-Portal/" target="_blank" rel="noopener noreferrer">View repository</a>
    </div>
  </article>
</div>

<h2 class="contrib-section-title">How I Like To Contribute</h2>

<div class="contrib-methods">
  <div>
    <strong>Fix the repeat pain</strong>
    <span>Improve scripts that solve real operational problems.</span>
  </div>
  <div>
    <strong>Document the path</strong>
    <span>Write clear notes so other people can repeat the work.</span>
  </div>
  <div>
    <strong>Test where it counts</strong>
    <span>Validate across practical Linux, Windows, RMM, and homelab setups.</span>
  </div>
  <div>
    <strong>Package the useful bits</strong>
    <span>Turn working automation into reusable tools and workflows.</span>
  </div>
</div>

<section class="contrib-contact">
  <div>
    <h2>Collaboration</h2>
    <p>
      Useful infrastructure, automation, self-hosting, and endpoint management
      projects are always interesting to me.
    </p>
  </div>
  <a href="mailto:roffo@nerdy-technician.social">Start a conversation</a>
</section>

</div>
