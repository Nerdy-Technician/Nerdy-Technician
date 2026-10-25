<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import P from '../projects.json'
import LIVE from '../live.json'
const live: any = LIVE
const L = (u?: string) => (u && u.startsWith('/') ? withBase(u) : u || '')
const all = (P as any[]).map((p, i) => ({ ...p, i, chips: (p.stack || '').split(' · ').filter(Boolean), href: withBase(`/projects/${p.slug}/`), img: L(p.logo), shot: L(p.preview), docsHref: L(p.docs), up: !!live.health?.[p.name]?.ok }))
const hero = all.find((p) => p.name === 'JellyGlance') || all[0]
const rest = all.filter((p) => p !== hero)
const types = [...new Set(all.map((p) => p.category))]
const stacks = (() => { const c: Record<string, number> = {}; all.forEach((p) => p.chips.forEach((s: string) => (c[s] = (c[s] || 0) + 1))); return Object.keys(c).sort((a, b) => c[b] - c[a] || a.localeCompare(b)) })()
const type = ref('all'), stack = ref('all'), q = ref('')
const match = (p: any) => (type.value === 'all' || p.category === type.value) && (stack.value === 'all' || p.chips.includes(stack.value)) &&
  (!q.value.trim() || `${p.name} ${p.description} ${p.stack} ${p.category}`.toLowerCase().includes(q.value.trim().toLowerCase()))
const shown = computed(() => rest.filter(match))
const heroShown = computed(() => match(hero))
const count = computed(() => shown.value.length + (heroShown.value ? 1 : 0))
const reset = () => { type.value = 'all'; stack.value = 'all'; q.value = '' }
const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Europe/London' })
const root = ref<HTMLElement | null>(null), inView = ref(false)
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) { inView.value = true; return }
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('is-in'); io.unobserve(e.target) } }), { threshold: 0.08 })
  root.value?.querySelectorAll('.pb-reveal').forEach((el) => io.observe(el))
})
</script>
<template>
  <div ref="root" class="pb" :class="{ 'pb-all-in': inView }">
    <header class="pb-head"><p>DWG NO. NT-002 · PROJECT REGISTER</p><h1>Projects</h1><p class="pb-sub">Tools, dashboards, and automation projects built to make infrastructure easier to repair, deploy, and support.</p>
      <dl><div><dt>Projects</dt><dd>{{ all.length }}</dd></div><div><dt>Types</dt><dd>{{ types.length }}</dd></div><div v-if="live.publicRepos"><dt>Public repos</dt><dd>{{ live.publicRepos }}</dd></div><div v-if="live.asOf"><dt>As of</dt><dd class="sm">{{ fmt(live.asOf) }}</dd></div></dl></header>
    <div class="pb-filters" role="search">
      <label class="pb-search"><span>⌕</span><input v-model="q" type="search" placeholder="Search projects, stack, type…" aria-label="Search projects" /></label>
      <div class="pb-row" role="group" aria-label="Filter by type"><b>Type</b><button type="button" :aria-pressed="type === 'all'" @click="type = 'all'">All</button><button v-for="t in types" :key="t" type="button" :aria-pressed="type === t" @click="type = type === t ? 'all' : t">{{ t }}</button></div>
      <div class="pb-row" role="group" aria-label="Filter by stack"><b>Stack</b><button type="button" :aria-pressed="stack === 'all'" @click="stack = 'all'">All</button><button v-for="s in stacks" :key="s" type="button" :aria-pressed="stack === s" @click="stack = stack === s ? 'all' : s">{{ s }}</button></div>
      <p class="pb-count" aria-live="polite">{{ count }} / {{ all.length }} nodes match<button v-if="type !== 'all' || stack !== 'all' || q" type="button" @click="reset">clear ✕</button></p>
    </div>
    <article v-show="heroShown" class="pb-hero pb-reveal">
      <figure v-if="hero.shot"><img :src="hero.shot" :alt="hero.name + ' dashboard screenshot'" width="1600" height="900" /><figcaption>FIG. 01 · {{ hero.name }}</figcaption></figure>
      <div class="pb-hero-copy"><small>featured · {{ hero.category }}</small>
        <h2><img :src="hero.img" alt="" width="40" height="40" />{{ hero.name }}</h2>
        <div class="pb-status"><span v-if="hero.status" class="pb-tag" :class="'st-' + hero.status.toLowerCase()"><i></i>{{ hero.status }}</span><span v-if="hero.up" class="pb-tag up" :title="'Public site returned HTTP 200 at build, ' + fmt(live.asOf)"><i></i>site up</span><span v-if="live.jellyglanceRelease" class="pb-tag">{{ live.jellyglanceRelease.tag }}</span><span v-if="live.repos?.JellyGlance" class="pb-tag">★ {{ live.repos.JellyGlance.stars }}</span></div>
        <p>{{ hero.description }}</p><ul class="pb-chips"><li v-for="c in hero.chips" :key="c">{{ c }}</li></ul>
        <nav class="pb-links"><a class="pri" :href="hero.href">Project page</a><a v-if="hero.docsHref" :href="hero.docsHref">Docs</a><a href="https://jellyglance.com/" target="_blank" rel="noopener">Live ↗</a><a :href="live.repos?.JellyGlance?.url || hero.repository" target="_blank" rel="noopener">Repo ↗</a></nav></div>
    </article>
    <div class="pb-grid">
      <article v-for="(p, k) in shown" :key="p.slug" class="pb-card pb-reveal" :style="{ '--k': k % 3 }">
        <div class="pb-card-top"><span class="pb-ic"><img :src="p.img" :alt="p.name + ' logo'" width="44" height="44" loading="lazy" /></span>
          <div><small>{{ p.category }}</small><h3><a :href="p.href">{{ p.name }}</a></h3></div>
          <span v-if="p.up" class="pb-led" :title="'Public site returned HTTP 200 at build, ' + fmt(live.asOf)"></span></div>
        <div class="pb-status"><span v-if="p.status" class="pb-tag" :class="'st-' + p.status.toLowerCase()"><i></i>{{ p.status }}</span><span v-if="p.up" class="pb-tag up"><i></i>site up</span></div>
        <p>{{ p.description }}</p>
        <ul class="pb-chips"><li v-for="c in p.chips" :key="c"><button type="button" @click="stack = c">{{ c }}</button></li></ul>
        <nav class="pb-links"><a class="pri" :href="p.href">Open →</a><a v-if="p.docsHref && p.docsHref !== p.href" :href="p.docsHref">Docs</a><a v-if="p.live" :href="p.live" target="_blank" rel="noopener">Live ↗</a><a v-if="p.repository" :href="p.repository" target="_blank" rel="noopener">Repo ↗</a></nav>
      </article>
    </div>
    <p v-if="count === 0" class="pb-empty">No projects match that filter. <button type="button" @click="reset">Clear filters</button></p>
  </div>
</template>
