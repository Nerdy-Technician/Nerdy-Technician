<script setup>
import { onMounted, reactive, ref } from 'vue'

const storeStats = reactive({
  nexployApps: 72,
  nextermScripts: 112,
  nextermSnippets: 48,
  nextermThemes: 66
})

const statsStatus = ref('Live catalog counts')

onMounted(async () => {
  try {
    const [nexployResponse, nextermResponse] = await Promise.all([
      fetch('https://store.nerdytech.dev/categories.json'),
      fetch('https://store.nerdytech.dev/nexterm.json')
    ])

    if (!nexployResponse.ok || !nextermResponse.ok) {
      throw new Error('Unable to load NerdyStore stats')
    }

    const [nexployData, nextermData] = await Promise.all([
      nexployResponse.json(),
      nextermResponse.json()
    ])

    storeStats.nexployApps = nexployData.categories.reduce(
      (total, category) => total + Number(category.count || 0),
      0
    )

    const nextermCounts = Object.fromEntries(
      nextermData.categories.map((category) => [category.slug, Number(category.count || 0)])
    )

    storeStats.nextermScripts = nextermCounts.scripts ?? storeStats.nextermScripts
    storeStats.nextermSnippets = nextermCounts.snippets ?? storeStats.nextermSnippets
    storeStats.nextermThemes = nextermCounts.themes ?? storeStats.nextermThemes
    statsStatus.value = 'Updated from live store'
  } catch {
    statsStatus.value = 'Showing cached counts'
  }
})
</script>

<section class="store-hero">
  <div class="store-hero-copy">
    <p class="store-eyebrow">
      <img src="https://store.nerdytech.dev/favicon.svg" alt="" />
      NerdyStore Documentation
    </p>
    <h1>NerdyStore</h1>
    <p>
      A third-party storefront for Nexterm and Nexploy, built to make apps,
      scripts, snippets, themes, deployment tools, and automation bundles easy
      to browse and install.
    </p>
    <div class="store-actions">
      <a href="https://store.nerdytech.dev/" target="_blank" rel="noopener noreferrer">Open live store</a>
      <a href="https://github.com/Nerdy-Technician/NerdyStore" target="_blank" rel="noopener noreferrer">View repository</a>
    </div>
  </div>
  <div class="store-hero-mark" aria-hidden="true">
    <img src="https://store.nerdytech.dev/favicon.svg" alt="" />
  </div>
</section>

<section class="store-stats" aria-label="NerdyStore catalog categories">
  <div>
    <strong>{{ storeStats.nexployApps }}</strong>
    <span>Nexploy apps</span>
  </div>
  <div>
    <strong>{{ storeStats.nextermScripts }}</strong>
    <span>Nexterm scripts</span>
  </div>
  <div>
    <strong>{{ storeStats.nextermSnippets }}</strong>
    <span>Nexterm snippets</span>
  </div>
  <div>
    <strong>{{ storeStats.nextermThemes }}</strong>
    <span>Nexterm themes</span>
  </div>
</section>

<p class="store-stats-status">{{ statsStatus }}</p>

## Getting Started

<div class="store-steps">
  <article>
    <span>1</span>
    <h3>Add the source</h3>
    <p>Add <code>sources.nerdystore.dev</code> as a custom source in Nexterm or Nexploy.</p>
  </article>
  <article>
    <span>2</span>
    <h3>Browse the catalog</h3>
    <p>Switch to the NerdyStore source and filter through apps, scripts, snippets, themes, and bundles.</p>
  </article>
  <article>
    <span>3</span>
    <h3>Install or run</h3>
    <p>Choose an item, follow the prompts, and deploy it directly into your Nexterm or Nexploy workflow.</p>
  </article>
</div>

## Add The Source

<section class="store-guide">
  <div>
    <h3>Source details</h3>
    <p>Use these values when creating a new source in Nexterm or Nexploy.</p>
  </div>
  <div class="store-source-box">
    <span>Name</span>
    <code>NerdyStore</code>
    <span>URL</span>
    <code>sources.nerdystore.dev</code>
  </div>
</section>

<div class="store-screens">
  <figure>
    <img src="./image.png" alt="Sources page in Nexterm or Nexploy" />
    <figcaption>Open the source or repository settings.</figcaption>
  </figure>
  <figure>
    <img src="./image-1.png" alt="Add NerdyStore source form" />
    <figcaption>Add NerdyStore as a new source.</figcaption>
  </figure>
  <figure>
    <img src="./image-2.png" alt="Nexterm or Nexploy catalog navigation" />
    <figcaption>Open the relevant catalog area.</figcaption>
  </figure>
  <figure>
    <img src="./image-3.png" alt="NerdyStore source selected in the catalog" />
    <figcaption>Switch the catalog source to NerdyStore.</figcaption>
  </figure>
</div>

## Useful Links

<div class="store-link-grid">
  <a href="https://store.nerdytech.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://store.nerdytech.dev/favicon.svg" alt="" />
    <span>
      <strong>Live NerdyStore</strong>
      Browse the public storefront.
    </span>
  </a>
  <a href="https://github.com/Nerdy-Technician/NerdyStore" target="_blank" rel="noopener noreferrer">
    <span class="store-github-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </span>
    <span>
      <strong>GitHub repository</strong>
      View the source and contribute.
    </span>
  </a>
  <a href="https://docs.nexterm.dev" target="_blank" rel="noopener noreferrer">
    <img src="https://nexterm.dev/assets/img/favicon.ico" alt="" />
    <span>
      <strong>Nexterm docs</strong>
      Learn more about the platform.
    </span>
  </a>
</div>
