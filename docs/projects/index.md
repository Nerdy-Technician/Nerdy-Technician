<script setup>
import { computed, ref } from 'vue'

const projectFilter = ref('all')
const categoryFilter = ref('all')
const projectSearch = ref('')

const projects = [
  { name: 'JellyGlance', slug: 'JellyGlance', logo: '/logos/jellyglance-icon.png', status: 'Active', category: 'Dashboard', stack: 'React · Express · PostgreSQL', description: 'Jellyfin analytics and media-control dashboard for sessions, users, libraries, statistics, queues, and webhooks.', docs: '/docs/JellyGlance/', repository: 'https://github.com/Nerdy-Technician/JellyGlance', github: 'Nerdy-Technician/JellyGlance', preview: '/screenshots/jellyglance/home.png', featured: true },
  { name: 'NerdyPress', slug: 'NerdyPress', logo: '/logos/nerdypress-logo.png', status: 'Active', category: 'Generator', stack: 'Vue · VitePress · Node', description: 'Visual VitePress site generator with theme controls, page editing, integrations, and deployment helpers.', docs: '/docs/NerdyPress/', live: 'https://press.nerdytech.dev/', repository: 'https://github.com/Nerdy-Technician/NerdyPress', github: 'Nerdy-Technician/NerdyPress' },
  { name: 'Nerdy-RMMScripts', slug: 'Nerdy-RMMScripts', logo: '/logos/nerdy-rmm-scripts.svg', status: 'Maintained', category: 'Automation', stack: 'PowerShell · Shell · RMM', description: 'Production-ready scripts for RMM checks, monitoring, maintenance, security, inventory, and automation.', docs: '/docs/Nerdy-RMMScripts/', repository: 'https://github.com/Nerdy-Technician/Nerdy-RMMScripts', github: 'Nerdy-Technician/Nerdy-RMMScripts' },
  { name: 'NerdyStore', slug: 'NerdyStore', logo: 'https://store.nerdytech.dev/favicon.svg', status: 'Active', category: 'Storefront', stack: 'React · JSON · Nexterm', description: 'Third-party storefront for Nexterm and Nexploy apps, scripts, snippets, themes, and automation bundles.', docs: '/docs/NerdyStore/', live: 'https://store.nerdytech.dev/', repository: 'https://github.com/Nerdy-Technician/NerdyStore', github: 'Nerdy-Technician/NerdyStore' },
  { name: 'LinuxRMM-Script', slug: 'LinuxRMMScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', status: 'Maintained', category: 'Installer', stack: 'Shell · Tactical RMM · Linux', description: 'Guided Tactical RMM agent installer for Linux systems with clearer prompts and architecture detection.', docs: '/docs/LinuxRMMScript/Getting-Started', repository: 'https://github.com/Nerdy-Technician/LinuxRMM-Script', github: 'Nerdy-Technician/LinuxRMM-Script' },
  { name: 'BoilerPlates', slug: 'BoilerPlates', logo: '/logos/boilerplates.png', status: 'Maintained', category: 'Templates', stack: 'Markdown · Shell · Web', description: 'Reusable starter templates and snippets for faster, more consistent project setup.', docs: '/docs/BoilerPlates/Getting-Started', repository: 'https://github.com/Nerdy-Technician/Boiler-Plates', github: 'Nerdy-Technician/Boiler-Plates' },
  { name: 'SnippyCode', slug: 'SnippyCode', logo: 'https://github.com/Nerdy-Technician/SnippyCode/raw/main/client/public/CodeSnippy.png', status: 'Active', category: 'Snippet library', stack: 'TypeScript · React · PostgreSQL', description: 'Private, self-hosted snippet management with Monaco editing, search, version history, AI assistance, GitHub sync, roles, and raw links.', docs: '/projects/SnippyCode/', repository: 'https://github.com/Nerdy-Technician/SnippyCode', github: 'Nerdy-Technician/SnippyCode', featured: true }
]

const categories = [...new Set(projects.map((project) => project.category))]
const featuredProjects = projects.filter((project) => project.featured)

const visibleProjects = computed(() => {
  const query = projectSearch.value.trim().toLowerCase()
  return projects.filter((project) => {
    const matchesFilter = projectFilter.value === 'all' || project.status.toLowerCase() === projectFilter.value
    const matchesCategory = categoryFilter.value === 'all' || project.category === categoryFilter.value
    const searchable = `${project.name} ${project.category} ${project.stack} ${project.description}`.toLowerCase()
    return matchesFilter && matchesCategory && (!query || searchable.includes(query))
  })
})
</script>

<section class="projects-hero">
  <p class="projects-eyebrow">Portfolio projects / 2026</p>
  <h1>Projects</h1>
  <p>
    Tools, docs, storefronts, and automation projects built to make
    infrastructure easier to repeat, explain, deploy, and support.
  </p>
</section>

<section v-if="featuredProjects.length" class="featured-projects" aria-labelledby="featured-projects-title">
  <div class="featured-projects-heading">
    <p class="projects-eyebrow">Featured projects</p>
    <h2 id="featured-projects-title">Established work and active development.</h2>
  </div>
  <div class="featured-project-grid">
    <article v-for="project in featuredProjects" :key="project.name" class="featured-project">
      <img :src="project.logo" :alt="`${project.name} logo`" />
      <div>
        <span class="project-status">{{ project.status }}</span>
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <a :href="`/projects/${project.slug}/`">View the project <span aria-hidden="true">→</span></a>
      </div>
    </article>
  </div>
</section>

<section class="projects-catalog" aria-labelledby="projects-catalog-title">
  <div class="projects-catalog-head">
    <div>
      <p class="projects-eyebrow">The catalogue</p>
      <h2 id="projects-catalog-title">Find the right starting point.</h2>
    </div>
    <p>{{ visibleProjects.length }} of {{ projects.length }} projects shown</p>
  </div>
  <div class="projects-controls">
    <button type="button" :class="{ active: projectFilter === 'all' }" @click="projectFilter = 'all'">All projects</button>
    <button type="button" :class="{ active: projectFilter === 'active' }" @click="projectFilter = 'active'">Active</button>
    <button type="button" :class="{ active: projectFilter === 'maintained' }" @click="projectFilter = 'maintained'">Maintained</button>
    <button v-for="category in categories" :key="category" type="button" :class="{ active: categoryFilter === category }" @click="categoryFilter = category">{{ category }}</button>
    <input v-model="projectSearch" type="search" placeholder="Search projects" aria-label="Search projects" />
  </div>
</section>

<div class="projects-grid">
  <article v-for="project in visibleProjects" :key="project.name" class="project-card">
    <img :src="project.logo" :alt="`${project.name} logo`" />
    <div>
      <div class="project-card-top">
        <span class="project-status">{{ project.status }}</span>
        <span class="project-category">{{ project.category }}</span>
      </div>
      <h3>{{ project.name }}</h3>
      <img v-if="project.preview" class="project-card-preview" :src="project.preview" :alt="`${project.name} preview`" />
      <p>{{ project.description }}</p>
      <span class="project-stack">{{ project.stack }}</span>
      <div class="project-github-stats" aria-label="GitHub repository statistics">
        <a :href="project.repository" target="_blank" rel="noopener noreferrer">
          <span>GitHub</span>
          <span>{{ project.github }}</span>
        </a>
        <div class="project-github-badges">
          <img :src="`https://img.shields.io/github/stars/${project.github}?style=flat&label=stars&color=c90000`" :alt="`${project.name} GitHub stars`" />
          <img :src="`https://img.shields.io/github/forks/${project.github}?style=flat&label=forks&color=c90000`" :alt="`${project.name} GitHub forks`" />
          <img :src="`https://img.shields.io/github/issues/${project.github}?style=flat&label=issues&color=c90000`" :alt="`${project.name} open GitHub issues`" />
          <img :src="`https://img.shields.io/github/last-commit/${project.github}?style=flat&label=updated&color=c90000`" :alt="`${project.name} last GitHub commit`" />
          <img :src="`https://img.shields.io/github/v/release/${project.github}?style=flat&label=release&color=c90000`" :alt="`${project.name} latest GitHub release`" />
          <img :src="`https://img.shields.io/github/languages/top/${project.github}?style=flat&label=language&color=c90000`" :alt="`${project.name} top GitHub language`" />
        </div>
      </div>
      <div class="project-card-links">
        <a :href="`/projects/${project.slug}/`">Overview</a>
        <a :href="project.docs">Docs</a>
        <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer">Live ↗</a>
        <a :href="project.repository" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </div>
  </article>
</div>

<p v-if="visibleProjects.length === 0" class="projects-empty">No projects match that search.</p>

<section class="projects-help" aria-labelledby="projects-help-title">
  <div>
    <p class="projects-eyebrow">Open requests</p>
    <h2 id="projects-help-title">Need help with a project?</h2>
    <p>
      Some projects benefit from extra testing, development, documentation,
      design, or user feedback. See where help is useful and get in touch before
      opening an issue.
    </p>
    <a href="/help">See open volunteer roles <span aria-hidden="true">→</span></a>
  </div>
  <div class="projects-help-grid">
    <article>
      <strong>Development</strong>
      <span>Help improve features, fix bugs, review code, or build integrations.</span>
    </article>
    <article>
      <strong>Testing</strong>
      <span>Try active projects in real environments and report useful, reproducible feedback.</span>
    </article>
    <article>
      <strong>Documentation</strong>
      <span>Improve setup guides, examples, screenshots, troubleshooting, and project explanations.</span>
    </article>
  </div>
</section>

<section class="projects-docs">
  <div>
    <h2>Start With Docs</h2>
    <p>Jump straight into setup guides and reference pages for each project.</p>
  </div>
  <div class="projects-doc-links">
    <a href="/docs/NerdyPress/">NerdyPress</a>
    <a href="/docs/Nerdy-RMMScripts/">Nerdy-RMMScripts</a>
    <a href="/docs/NerdyStore/">NerdyStore</a>
    <a href="/docs/LinuxRMMScript/Getting-Started">LinuxRMM-Script</a>
    <a href="/docs/BoilerPlates/Getting-Started">BoilerPlates</a>
  </div>
</section>
