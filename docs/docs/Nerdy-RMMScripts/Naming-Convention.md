<section class="rmm-hero rmm-hero-compact">
  <div>
    <p class="rmm-eyebrow">
      <img src="/logos/nerdy-rmm-scripts.svg" alt="" />
      Naming convention
    </p>
    <h1>Script Naming Guide</h1>
    <p>
      Nerdy-RMMScripts uses a predictable filename format so scripts are easy
      to scan, search, import, and maintain across RMM platforms.
    </p>
    <div class="rmm-actions">
      <a href="/docs/Nerdy-RMMScripts/Getting-Started">Getting started</a>
      <a href="https://github.com/Nerdy-Technician/Nerdy-RMMScripts" target="_blank" rel="noopener noreferrer">View repository</a>
    </div>
  </div>
  <div class="rmm-hero-mark" aria-hidden="true">
    <img src="/logos/nerdy-rmm-scripts.svg" alt="" />
  </div>
</section>

## Filename Format

```text
<Category> - <Descriptive Title>.<ext>
```

<div class="rmm-example-grid">
  <code>Monitor - CPU Usage.sh</code>
  <code>Security - Firewall Status.sh</code>
  <code>Agent - Wazuh Update.ps1</code>
  <code>Maintain - Disk Clean.bat</code>
</div>

## Rules

<div class="rmm-checklist">
  <span>Keep the original file extension</span>
  <span>Use spaces for readable titles</span>
  <span>Use one clear category prefix</span>
  <span>Separate category and title with <code> - </code></span>
</div>

## Category Reference

<div class="rmm-category-list">
  <article><strong>Check</strong><span>One-off status and health verification tests.</span></article>
  <article><strong>Monitor</strong><span>Ongoing resource, uptime, trend, or metric checks.</span></article>
  <article><strong>Audit</strong><span>Security, configuration, and compliance enumeration.</span></article>
  <article><strong>Collect</strong><span>Inventory and general data gathering.</span></article>
  <article><strong>Software Management</strong><span>Package install, update, repo, and software state tasks.</span></article>
  <article><strong>Security</strong><span>Hardening, firewall, access control, and enforcement workflows.</span></article>
  <article><strong>Network</strong><span>Routes, DNS, interfaces, connectivity, and diagnostics.</span></article>
  <article><strong>Agent</strong><span>Management and monitoring agent status or maintenance.</span></article>
  <article><strong>Maintain</strong><span>Cleanup, repair, pruning, and routine maintenance.</span></article>
  <article><strong>Customize</strong><span>Environment, profile, shell, or personalization changes.</span></article>
  <article><strong>Cron</strong><span>Crontab, scheduled task, and automation schedule checks.</span></article>
  <article><strong>Image</strong><span>Container image hygiene and cleanup.</span></article>
  <article><strong>OS</strong><span>Operating system settings and platform configuration.</span></article>
</div>

## Exit Codes

<div class="rmm-code-grid">
  <article>
    <strong>0</strong>
    <span>OK or successful completion.</span>
  </article>
  <article>
    <strong>1</strong>
    <span>Alert, error, or failed check.</span>
  </article>
  <article>
    <strong>2</strong>
    <span>Secondary state, such as auto-recovered or warning.</span>
  </article>
</div>

## Best Practices

<div class="rmm-note-grid">
  <article>
    <h3>Be specific</h3>
    <p>Choose the most accurate category and keep the title short enough to scan quickly.</p>
  </article>
  <article>
    <h3>Use title case</h3>
    <p>Prefer names like <code>Monitor - CPU Usage.sh</code> over vague names like <code>script.sh</code>.</p>
  </article>
  <article>
    <h3>Test exit codes</h3>
    <p>Make sure your RMM receives clear success, alert, and warning states.</p>
  </article>
</div>

## Choosing Between Similar Categories

Use `Collect -` for pure inventory and data gathering. Use `Audit -` when the
script is security-relevant, checks configuration drift, or produces reviewable
compliance information.
