<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import projects from '../projects.json'
import live from '../live.json'
const props = defineProps<{ part: 'top' | 'bottom' }>()
const { page } = useData()
const slug = computed(() => page.value.relativePath.split('/')[1])
const idx = computed(() => projects.findIndex((p: any) => p.slug === slug.value))
const p: any = computed(() => projects[idx.value])
const n = projects.length
const prev = computed(() => projects[(idx.value - 1 + n) % n] as any)
const next = computed(() => projects[(idx.value + 1) % n] as any)
const h: any = computed(() => (live as any).health[p.value?.name])
const r: any = computed(() => (live as any).repos[p.value?.name])
const rel = computed(() => (p.value?.name === 'JellyGlance' ? (live as any).jellyglanceRelease : null))
const liveUrl = computed(() => p.value?.live || (h.value?.ok ? h.value.url : null))
const repoUrl = computed(() => r.value?.url || p.value?.repository)
const docs = computed(() => (p.value?.docs && !p.value.docs.startsWith('/projects/') ? p.value.docs : null))
const stack = computed(() => (p.value?.stack || '').split('·').map((s: string) => s.trim()).filter(Boolean))
const asOf = new Date((live as any).asOf).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
</script>
<template>
  <div v-if="p && part === 'top'" class="ps">
    <a class="ps-back" :href="withBase('/projects/')">← Back to projects</a>
    <header class="ps-sheet">
      <i class="ps-br tl" /><i class="ps-br br" />
      <div class="ps-id">
        <div class="ps-logo"><img :src="withBase(p.logo)" alt="" width="64" height="64" /></div>
        <div>
          <p class="ps-eyebrow">SPEC SHEET · PRJ-{{ String(idx + 1).padStart(2, '0') }} · {{ p.category }}</p>
          <h1 class="ps-name">{{ p.name }}</h1>
          <p class="ps-desc">{{ p.description }}</p>
        </div>
      </div>
      <dl class="ps-specs">
        <div><dt>Status</dt><dd><span class="pb-led" aria-hidden="true" />{{ p.status }}</dd></div>
        <div v-if="h?.ok"><dt>Site</dt><dd><span class="ps-up" aria-hidden="true" />Up (checked {{ asOf }})</dd></div>
        <div v-if="r"><dt>Stars</dt><dd>{{ r.stars }}<small> · {{ r.forks }} forks</small></dd></div>
        <div v-if="rel"><dt>Release</dt><dd><a :href="rel.url" target="_blank" rel="noopener noreferrer">{{ rel.tag }}</a><small> · {{ fmt(rel.date) }}</small></dd></div>
        <div v-if="r"><dt>Last push</dt><dd>{{ fmt(r.pushed) }}</dd></div>
      </dl>
      <ul class="ps-stack" aria-label="Stack"><li v-for="s in stack" :key="s">{{ s }}</li></ul>
      <div class="ps-btns">
        <a v-if="liveUrl" class="pri" :href="liveUrl" target="_blank" rel="noopener noreferrer">Live ↗</a>
        <a v-if="p.name === 'JellyGlance'" href="https://docs.jellyglance.com/" target="_blank" rel="noopener noreferrer">Docs ↗</a>
        <a v-if="docs" :href="withBase(docs)">{{ p.name === 'JellyGlance' ? 'Notes' : 'Docs' }}</a>
        <a v-if="repoUrl" :href="repoUrl" target="_blank" rel="noopener noreferrer">Repo ↗</a>
      </div>
      <img v-if="p.preview" class="ps-shot" :src="withBase(p.preview)" :alt="p.name + ' screenshot'" loading="lazy" />
    </header>
  </div>
  <nav v-if="p && part === 'bottom'" class="ps-nav" aria-label="Project navigation">
    <a :href="withBase('/projects/' + prev.slug + '/')"><small>← Prev project</small><span>{{ prev.name }}</span></a>
    <a class="all" :href="withBase('/projects/')"><small>Index</small><span>All projects</span></a>
    <a class="nx" :href="withBase('/projects/' + next.slug + '/')"><small>Next project →</small><span>{{ next.name }}</span></a>
  </nav>
</template>
