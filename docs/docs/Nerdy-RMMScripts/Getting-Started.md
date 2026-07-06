<section class="rmm-hero rmm-hero-compact">
  <div>
    <p class="rmm-eyebrow">
      <img src="/logos/nerdy-rmm-scripts.svg" alt="" />
      Getting started
    </p>
    <h1>Set Up Nerdy-RMMScripts</h1>
    <p>
      Clone the repository, choose scripts that match your RMM workflow, tune
      the variables for your environment, and test safely before rolling them
      out to production endpoints.
    </p>
    <div class="rmm-actions">
      <a href="https://github.com/Nerdy-Technician/Nerdy-RMMScripts" target="_blank" rel="noopener noreferrer">View repository</a>
      <a href="/docs/Nerdy-RMMScripts/Naming-Convention">Naming guide</a>
    </div>
  </div>
  <div class="rmm-hero-mark" aria-hidden="true">
    <img src="/logos/nerdy-rmm-scripts.svg" alt="" />
  </div>
</section>

## Before You Begin

<div class="rmm-checklist">
  <span>A workstation with Git installed</span>
  <span>Access to your RMM platform</span>
  <span>Permission to create or import custom scripts</span>
  <span>A test device or staging group for validation</span>
</div>

## Setup Flow

<div class="rmm-steps">
  <article>
    <span>1</span>
    <h3>Clone the repository</h3>
    <p>Download the latest scripts locally so you can inspect, edit, and test them.</p>
  </article>
  <article>
    <span>2</span>
    <h3>Pick a script</h3>
    <p>Browse by category and use the naming guide to understand the script purpose.</p>
  </article>
  <article>
    <span>3</span>
    <h3>Import into RMM</h3>
    <p>Copy the script into your platform's custom script module or automation library.</p>
  </article>
</div>

## Clone The Repository

```bash
git clone https://github.com/Nerdy-Technician/Nerdy-RMMScripts.git
cd Nerdy-RMMScripts
```

## Choose A Script

Scripts are grouped by practical admin tasks such as checks, monitoring,
maintenance, software management, security, networking, and agent workflows.
Start with the most specific category that matches the job you want the RMM to
perform.

<div class="rmm-category-grid">
  <span>Check</span>
  <span>Monitor</span>
  <span>Audit</span>
  <span>Collect</span>
  <span>Software Management</span>
  <span>Security</span>
  <span>Network</span>
  <span>Agent</span>
  <span>Maintain</span>
</div>

## Configure And Test

<div class="rmm-note-grid">
  <article>
    <h3>Review variables</h3>
    <p>Check paths, URLs, package names, credentials, thresholds, and any platform-specific settings before running the script.</p>
  </article>
  <article>
    <h3>Use staging first</h3>
    <p>Run the script against a lab machine or a small test group before assigning it to production devices.</p>
  </article>
  <article>
    <h3>Watch the output</h3>
    <p>Confirm exit codes, logs, and RMM result fields behave the way you expect.</p>
  </article>
</div>

## Next Steps

<div class="rmm-link-grid">
  <a href="/docs/Nerdy-RMMScripts/Naming-Convention">
    <img src="/logos/nerdy-rmm-scripts.svg" alt="" />
    <span>
      <strong>Naming Convention</strong>
      Learn the script prefixes, categories, and exit code expectations.
    </span>
  </a>
  <a href="/docs/Nerdy-RMMScripts/Issue-Reporting">
    <img src="/logos/nerdy-rmm-scripts.svg" alt="" />
    <span>
      <strong>Issue Reporting</strong>
      Send useful bug reports, feature requests, and diagnostics.
    </span>
  </a>
  <a href="https://github.com/Nerdy-Technician/Nerdy-RMMScripts" target="_blank" rel="noopener noreferrer">
    <img src="/logos/nerdy-rmm-scripts.svg" alt="" />
    <span>
      <strong>Repository</strong>
      Browse the source, scripts, open issues, and latest changes.
    </span>
  </a>
</div>
