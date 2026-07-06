<section class="linuxrmm-hero linuxrmm-hero-compact">
  <div>
    <p class="linuxrmm-eyebrow">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
      Step 3
    </p>
    <h1>Fetch Client And Site IDs</h1>
    <p>
      Find the Tactical RMM client ID and site ID for the device location where
      the Linux agent should appear after installation.
    </p>
    <div class="linuxrmm-actions">
      <a href="/docs/LinuxRMMScript/Step%204%20‐%20Getting%20Tactical%20RMM%20authorisation%20Token">Next step</a>
      <a href="/docs/LinuxRMMScript/Step%202%20‐%20Fetch%20Mesh%20URL">Previous step</a>
    </div>
  </div>
  <div class="linuxrmm-hero-mark" aria-hidden="true">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
  </div>
</section>

## Log In To Tactical RMM

Open your Tactical RMM instance, for example `https://trmm.example.com`, and
log in with your account.

![Tactical RMM Login](https://github.com/user-attachments/assets/b838e2fb-8ddf-42be-9357-4c57a3e8c900)

## Locate The IDs

<div class="linuxrmm-steps">
  <article>
    <span>1</span>
    <h3>Find the client</h3>
    <p>Hover over the client name and read the client ID from the browser status bar.</p>
  </article>
  <article>
    <span>2</span>
    <h3>Find the site</h3>
    <p>Open the client, hover over the target site, and read the site ID.</p>
  </article>
  <article>
    <span>3</span>
    <h3>Record both values</h3>
    <p>The install command uses them in this order: <code>ClientID SiteID</code>.</p>
  </article>
</div>

![Client ID Example](https://github.com/user-attachments/assets/c8e37b40-385a-47a4-a3a3-9d3b548c4c57)

![Site ID Example](https://github.com/user-attachments/assets/cde514e5-ad6a-4643-b4c5-764c5f62d7a2)

## Example Values

<div class="linuxrmm-code-grid">
  <article><strong>Client ID</strong><span><code>4</code></span></article>
  <article><strong>Site ID</strong><span><code>7</code></span></article>
  <article><strong>Install order</strong><span><code>4 7</code></span></article>
</div>
