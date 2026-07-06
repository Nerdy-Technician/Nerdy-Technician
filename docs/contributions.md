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
        <img src="https://github.com/jl94x4/Server-Manager-Portal/raw/main/static/logo.png" alt="">
      </span>
      <div>
        <h3>Server-Manager-Portal</h3>
        <p>Contributor</p>
      </div>
    </div>
    <p>A premium, fully-automated management and analytics portal for Plex/Jellyfin servers.</p>
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
