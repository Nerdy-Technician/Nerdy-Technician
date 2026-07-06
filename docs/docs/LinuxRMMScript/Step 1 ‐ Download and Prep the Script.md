<section class="linuxrmm-hero linuxrmm-hero-compact">
  <div>
    <p class="linuxrmm-eyebrow">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
      Step 1
    </p>
    <h1>Download And Prep The Script</h1>
    <p>
      Connect to the Linux device, download the installer, and make it
      executable before collecting the Tactical RMM and MeshCentral values.
    </p>
    <div class="linuxrmm-actions">
      <a href="/docs/LinuxRMMScript/Step%202%20‐%20Fetch%20Mesh%20URL">Next step</a>
      <a href="/docs/LinuxRMMScript/Getting-Started">Overview</a>
    </div>
  </div>
  <div class="linuxrmm-hero-mark" aria-hidden="true">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
  </div>
</section>

## Connect To The Server

```bash
ssh user@your-server-ip
```

If SSH uses a custom port:

```bash
ssh -p 2222 user@your-server-ip
```

## Download The Script

```bash
wget https://raw.githubusercontent.com/Nerdy-Technician/LinuxRMM-Script/refs/heads/main/rmmagent-linux.sh
```

## Make It Executable

```bash
sudo chmod 755 rmmagent-linux.sh
```

## Quick Checks

<div class="linuxrmm-detail-grid">
  <article><strong>File exists</strong><span>Run <code>ls -l rmmagent-linux.sh</code> and confirm the script is present.</span></article>
  <article><strong>Executable bit</strong><span>The permissions should show execute access for the script.</span></article>
  <article><strong>Keep terminal open</strong><span>You will reuse this server session when installing the agent.</span></article>
</div>
