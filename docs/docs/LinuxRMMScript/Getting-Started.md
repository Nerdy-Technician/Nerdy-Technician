<section class="linuxrmm-hero">
  <div>
    <p class="linuxrmm-eyebrow">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
      Tactical RMM for Linux
    </p>
    <h1>LinuxRMM-Script Setup</h1>
    <p>
      Install, update, and remove Tactical RMM Linux agents with MeshCentral
      details, Tactical RMM API values, and the correct client/site IDs.
    </p>
    <div class="linuxrmm-actions">
      <a href="https://github.com/Nerdy-Technician/LinuxRMM-Script" target="_blank" rel="noopener noreferrer">View repository</a>
      <a href="https://github.com/Nerdy-Technician/LinuxRMM-Script/wiki" target="_blank" rel="noopener noreferrer">Installation wiki</a>
    </div>
  </div>
  <div class="linuxrmm-hero-mark" aria-hidden="true">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
  </div>
</section>

## Quick Start

<div class="linuxrmm-steps">
  <article>
    <span>1</span>
    <h3>Download</h3>
    <p>Fetch the latest script directly from the LinuxRMM-Script repository.</p>
  </article>
  <article>
    <span>2</span>
    <h3>Make executable</h3>
    <p>Set execute permissions before running install, update, or uninstall commands.</p>
  </article>
  <article>
    <span>3</span>
    <h3>Install agent</h3>
    <p>Run the installer with MeshCentral, Tactical RMM, client, site, and auth values.</p>
  </article>
</div>

```bash
wget https://raw.githubusercontent.com/Nerdy-Technician/LinuxRMM-Script/refs/heads/main/rmmagent-linux.sh
sudo chmod +x rmmagent-linux.sh
```

## Required Values

<div class="linuxrmm-detail-grid">
  <article><strong>Mesh Agent URL</strong><span>From MeshCentral Add Agent for Linux/BSD/macOS. Copy the base URL without install flags.</span></article>
  <article><strong>API URL</strong><span>Your Tactical RMM API endpoint, usually something like <code>https://api.example.com</code>.</span></article>
  <article><strong>Client ID</strong><span>Visible in Tactical RMM when hovering over the client name.</span></article>
  <article><strong>Site ID</strong><span>Visible in Tactical RMM when hovering over the site name.</span></article>
  <article><strong>Auth Key</strong><span>Generated from the manual Windows agent install flow. Copy the value after <code>--auth</code>.</span></article>
  <article><strong>Agent Type</strong><span>Use <code>server</code> or <code>workstation</code>.</span></article>
</div>

## Install The Agent

```bash
./rmmagent-linux.sh install 'Mesh Agent URL' 'API URL' ClientID SiteID 'Auth Key' 'Agent Type'
```

Example:

```bash
./rmmagent-linux.sh install 'https://mesh.example.com/meshagents?id=XXXXX' 'https://api.example.com' 3 1 'XXXXX' server
```

Compilation can take several minutes depending on the device hardware.

## Cleaner Output

Use `--simple` when you want less noisy install output.

```bash
sudo bash rmmagent-linux.sh --simple install 'Mesh Agent URL' 'API URL' ClientID SiteID 'Auth Key' 'Agent Type'
```

<div class="linuxrmm-detail-grid">
  <article><strong>Readable progress</strong><span>Clear informational, success, and error messages.</span></article>
  <article><strong>Less clutter</strong><span>Download and compile progress is collapsed into easier-to-scan output.</span></article>
  <article><strong>Cleanup visibility</strong><span>Temporary file cleanup is shown clearly at the end of the run.</span></article>
</div>

## Architecture Detection

The script detects the system architecture with `uname -m` and maps it to the
correct agent type.

<div class="linuxrmm-code-grid">
  <article><strong>x86_64</strong><span>amd64</span></article>
  <article><strong>i386 / i686</strong><span>x86</span></article>
  <article><strong>aarch64</strong><span>arm64</span></article>
  <article><strong>armv7l</strong><span>armv6</span></article>
  <article><strong>armv6l</strong><span>armv6</span></article>
</div>

If the architecture is not recognized, the script exits safely with an error.

## Update Or Uninstall

<div class="linuxrmm-command-grid">
  <article>
    <h3>Update an agent</h3>
    <pre><code>./rmmagent-linux.sh update</code></pre>
  </article>
  <article>
    <h3>Remove an agent</h3>
    <pre><code>./rmmagent-linux.sh uninstall 'Mesh FQDN' 'Mesh ID'</code></pre>
  </article>
</div>

Use uninstall only when removal from Tactical RMM is not working. This does not
remove records from the Tactical RMM or MeshCentral dashboards; clean those up
manually if needed.

## Ubuntu Blank Screen Fix

Ubuntu workstations using Wayland may show a blank MeshCentral remote desktop
session. Switch GDM back to X11:

```bash
sudo sed -i '/WaylandEnable/s/^#//g' /etc/gdm3/custom.conf
sudo systemctl restart gdm
```

On Ubuntu 19 and earlier, the config path is `/etc/gdm/custom.conf`.

## Credits

LinuxRMM-Script builds on [Netvolt's LinuxRMM-Script](https://github.com/netvolt/LinuxRMM-Script)
with extended compatibility, cleaner output, and production-focused refinements.
