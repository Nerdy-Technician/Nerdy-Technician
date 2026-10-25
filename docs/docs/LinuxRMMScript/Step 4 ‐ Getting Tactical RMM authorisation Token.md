<section class="linuxrmm-hero linuxrmm-hero-compact">
  <div>
    <p class="linuxrmm-eyebrow">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
      Step 4
    </p>
    <h1>Get The Tactical RMM Auth Token</h1>
    <p>
      Generate manual install instructions in Tactical RMM and copy only the
      auth token from the Windows command.
    </p>
    <div class="linuxrmm-actions">
      <a href="/docs/LinuxRMMScript/Step%205%20‐%20Install%20the%20Agent">Next step</a>
      <a href="/docs/LinuxRMMScript/Step%203%20‐%20Fetch%20your%20Site%20and%20Client%20ID">Previous step</a>
    </div>
  </div>
  <div class="linuxrmm-hero-mark" aria-hidden="true">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
  </div>
</section>

## Open Install Agents

In Tactical RMM, go to `Agents` then `Install Agents`.

![Tactical RMM Dashboard](/screenshots/linuxrmm/s4-dashboard.png)

![Install Agents Page](/screenshots/linuxrmm/s4-install-agents.png)

## Select Install Options

Select any client and site for this token lookup. The exact choice does not
matter here because the Linux install command will use the client and site IDs
you collected in step 3.

![Agent Install Options](/screenshots/linuxrmm/s4-install-options.png)

Set the token expiry to whatever is appropriate for your environment.

## Copy The Auth Value

Click `Show manual installation instructions`. The command will look similar to:

```text
tacticalagent-v2.9.1-windows-amd64.exe /VERYSILENT /SUPPRESSMSGBOXES && ping 127.0.0.1 -n 5 && "C:\Program Files\TacticalAgent\tacticalrmm.exe" -m install --api https://rmm-api.example.com --client-id 4 --site-id 7 --agent-type workstation --auth e88a2b5b1f6587e3bdf811f30043a083200cb5f4fcae2c5936870352b8133df5
```

You only need the long value after `--auth`.

<div class="linuxrmm-detail-grid">
  <article><strong>Copy this</strong><span><code>e88a2b5b1f6587e3bdf811f30043a083200cb5f4fcae2c5936870352b8133df5</code></span></article>
  <article><strong>Do not copy</strong><span>The Windows executable name, flags, ping command, or surrounding install text.</span></article>
  <article><strong>Keep private</strong><span>Treat the auth token like a secret and avoid posting it publicly.</span></article>
</div>
