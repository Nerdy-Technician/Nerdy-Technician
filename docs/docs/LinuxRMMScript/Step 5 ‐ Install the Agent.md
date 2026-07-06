<section class="linuxrmm-hero linuxrmm-hero-compact">
  <div>
    <p class="linuxrmm-eyebrow">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
      Step 5
    </p>
    <h1>Install The Agent</h1>
    <p>
      Run the LinuxRMM install command with your MeshCentral URL, Tactical RMM
      API URL, client ID, site ID, auth token, and agent type.
    </p>
    <div class="linuxrmm-actions">
      <a href="/docs/LinuxRMMScript/Getting-Started">Overview</a>
      <a href="/docs/LinuxRMMScript/Step%204%20‐%20Getting%20Tactical%20RMM%20authorisation%20Token">Previous step</a>
    </div>
  </div>
  <div class="linuxrmm-hero-mark" aria-hidden="true">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
  </div>
</section>

## Confirm Your Values

<div class="linuxrmm-detail-grid">
  <article><strong>Mesh URL</strong><span>The base MeshCentral agent URL from step 2.</span></article>
  <article><strong>API URL</strong><span>Your Tactical RMM API URL, such as <code>https://rmm-api.example.com</code>.</span></article>
  <article><strong>Client and site</strong><span>The IDs from step 3, entered as <code>ClientID SiteID</code>.</span></article>
  <article><strong>Auth token</strong><span>The token copied from the manual install command in step 4.</span></article>
  <article><strong>Agent type</strong><span>Use <code>server</code> or <code>workstation</code>.</span></article>
  <article><strong>Script file</strong><span><code>rmmagent-linux.sh</code> should exist in your current directory.</span></article>
</div>

## Run The Install

```bash
sudo bash rmmagent-linux.sh install "https://mesh.example.com/meshagents?id=YOUR_KEY" "https://rmm-api.example.com" 4 7 "AUTH_TOKEN" server
```

For cleaner output:

```bash
sudo bash rmmagent-linux.sh --simple install "https://mesh.example.com/meshagents?id=YOUR_KEY" "https://rmm-api.example.com" 4 7 "AUTH_TOKEN" server
```

## Verify Installation

<div class="linuxrmm-command-grid">
  <article>
    <h3>Tactical agent</h3>
    <pre><code>systemctl status tacticalagent</code></pre>
  </article>
  <article>
    <h3>Mesh agent</h3>
    <pre><code>systemctl status meshagent</code></pre>
  </article>
</div>

Allow a few minutes for the Linux device to appear in Tactical RMM and
MeshCentral after the services start.

## Expected Result

<div class="linuxrmm-detail-grid">
  <article><strong>Service created</strong><span>The Tactical agent service is installed and enabled.</span></article>
  <article><strong>Agent visible</strong><span>The endpoint appears in Tactical RMM after it checks in.</span></article>
  <article><strong>Mesh connected</strong><span>The MeshCentral agent is installed and available for remote access.</span></article>
</div>
