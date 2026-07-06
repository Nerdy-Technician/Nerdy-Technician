<section class="linuxrmm-hero linuxrmm-hero-compact">
  <div>
    <p class="linuxrmm-eyebrow">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
      Step 2
    </p>
    <h1>Fetch The MeshCentral URL</h1>
    <p>
      Open MeshCentral, create a Linux agent command, and copy only the base
      download URL needed by the LinuxRMM installer.
    </p>
    <div class="linuxrmm-actions">
      <a href="/docs/LinuxRMMScript/Step%203%20‐%20Fetch%20your%20Site%20and%20Client%20ID">Next step</a>
      <a href="/docs/LinuxRMMScript/Step%201%20‐%20Download%20and%20Prep%20the%20Script">Previous step</a>
    </div>
  </div>
  <div class="linuxrmm-hero-mark" aria-hidden="true">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
  </div>
</section>

## Log In To MeshCentral

Use the MeshCentral credentials generated during the Tactical RMM installation.
If you see a generated account such as `admin_1` or your Tactical RMM username,
log out and use the default MeshCentral details instead.

![MeshCentral Login](https://github.com/user-attachments/assets/00dc0ed5-c3de-4a51-9802-c4c9822d7fdc)

## Add A New Agent

<div class="linuxrmm-detail-grid">
  <article><strong>Group</strong><span>Open the <code>Tactical RMM</code> device group.</span></article>
  <article><strong>Action</strong><span>Click <code>Add Agent</code>.</span></article>
  <article><strong>Installer</strong><span>Select the Linux/BSD/macOS binary installer option.</span></article>
</div>

Use these options:

<div class="linuxrmm-detail-grid">
  <article><strong>Operating system</strong><span><code>Linux / BSD / macOS Binary Installer</code></span></article>
  <article><strong>System type</strong><span><code>Linux x86-64</code></span></article>
  <article><strong>Install type</strong><span><code>Background and Interactive</code></span></article>
</div>

![MeshCentral Add Agent](https://github.com/user-attachments/assets/99ffc0db-53df-4334-bb9a-171d19852e0a)

## Copy The Base URL

MeshCentral may show a command like this:

```bash
wget -O meshagent "https://mesh.example.com/meshagents?id=YOUR_KEY&installflags=0&meshinstall=6"
```

For LinuxRMM-Script, copy only the base URL:

```text
https://mesh.example.com/meshagents?id=YOUR_KEY
```

Never share this key publicly. It is unique to your MeshCentral installation.
