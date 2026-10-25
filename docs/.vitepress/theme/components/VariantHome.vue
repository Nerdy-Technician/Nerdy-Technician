<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { MODE } from '../variant'
import SPECS from '../specs.json'
import LIVE from '../live.json'
const { frontmatter } = useData()
const hero = computed(() => frontmatter.value.hero || {})
const feats = computed(() => (frontmatter.value.features || []).map((f: any, i: number) => ({
  ...f, n: String(i + 1).padStart(2, '0'),
  href: f.link?.startsWith('/') ? withBase(f.link) : f.link,
  img: typeof f.icon === 'object' ? (f.icon.src.startsWith('/') ? withBase(f.icon.src) : f.icon.src) : null,
  emoji: typeof f.icon === 'string' ? f.icon : null,
  alt: typeof f.icon === 'object' ? f.icon.alt : f.title
})))
const projects = computed(() => feats.value.filter((f: any) => f.link?.startsWith('/projects/')))
const actions = computed(() => (hero.value.actions || []).map((a: any) => ({ ...a, href: a.link?.startsWith('/') ? withBase(a.link) : a.link })))
const avatar = computed(() => { const s = hero.value.image?.src; return s && s.startsWith('/') ? withBase(s) : s })
const typed = ref('')
const done = ref(false)
onMounted(() => {
  const full = 'whoami'
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) { typed.value = full; done.value = true; return }
  let i = 0
  const t = setInterval(() => { typed.value = full.slice(0, ++i); if (i >= full.length) { clearInterval(t); setTimeout(() => (done.value = true), 250) } }, 120)
})
const nodePos = (i: number, n: number) => { const a = (i / n) * Math.PI * 2 - Math.PI / 2; return { x: 50 + 38 * Math.cos(a), y: 50 + 38 * Math.sin(a) } }
const hot = ref(-1)
const nodeState = (t: string) => { const h = live.health?.[t]; return !h ? 'na' : h.ok ? 'up' : 'down' }
const stateLabel = { up: 'UP', down: 'DOWN', na: '' } as any
const stateTitle = (t: string) => { const h = live.health?.[t]; return !h ? 'No public live service to check' : (h.ok ? 'Public site returned HTTP ' : 'Public site check failed, HTTP ') + h.status + ' at build (' + fmtDate(live.asOf) + ')' }
const blurb = (d: string) => { if (!d) return ''; const s = d.split(/(?<=\.)\s/)[0]; return s.length > 96 ? s.slice(0, 93).replace(/[\s,;]+\S*$/, '') + '…' : s }
const sweepAt = (i: number, n: number) => { const p = nodePos(i, n); let a = Math.atan2((p.x - 50), -(p.y - 50) * 0.78) * 180 / Math.PI; if (a < 0) a += 360; return (a / 360 * 9) + 's' }
const legendIn = ref(false)
const legendEl = ref<HTMLElement | null>(null)
const spec = (f: any) => {
  const d: any = (SPECS as any)[f.title]; if (!d) return null
  const L = (u: string) => (u && u.startsWith('/') ? withBase(u) : u)
  return { ...d, chips: d.stack ? d.stack.split(' · ') : [], docs: L(d.docs), live: d.live, repository: d.repository }
}
onMounted(() => {
  const el = legendEl.value; if (!el) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) { legendIn.value = true; return }
  const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { legendIn.value = true; io.disconnect() } }, { threshold: 0.12 })
  io.observe(el)
})
const live: any = LIVE
const up = (t: string) => !!live.health?.[t]?.ok
const fmtDate = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Europe/London' })
const stats = computed(() => [
  { v: live.publicRepos, k: 'Public repos', s: 'github.com/Nerdy-Technician', href: 'https://github.com/Nerdy-Technician?tab=repositories' },
  { v: live.stars, k: 'Stars on owned repos', s: live.ownedRepos + ' non-fork repos', href: 'https://github.com/Nerdy-Technician?tab=repositories' },
  { v: live.pushEvents30, k: 'Public pushes · 30 days', s: 'GitHub public events', href: 'https://github.com/Nerdy-Technician' },
  live.repos?.JellyGlance && { v: live.repos.JellyGlance.stars, k: 'JellyGlance stars', s: 'JellyGlance/Server', href: live.repos.JellyGlance.url },
  live.jellyglanceRelease && { v: live.jellyglanceRelease.tag, k: 'Latest JellyGlance release', s: fmtDate(live.jellyglanceRelease.date), href: live.jellyglanceRelease.url }
].filter(Boolean))
const spot = computed(() => {
  const j = feats.value.find((f: any) => f.title === 'JellyGlance'), m = feats.value.find((f: any) => f.title === 'MailBeacon')
  return { j, m, js: j && spec(j), ms: m && spec(m) }
})
// boot sequence (once per session, skippable, never with reduced motion)
const boot = ref(false), bootLines = ref<string[]>([]), bootCur = ref('')
let bootTimers: any[] = []
const endBoot = () => {
  bootTimers.forEach(clearTimeout); bootTimers = []; boot.value = false
  try { sessionStorage.setItem('nt08-boot', '1') } catch {}
  document.documentElement.classList.remove('bp-boot-pending')
  window.removeEventListener('keydown', endBoot); 
}
onMounted(() => {
  if (!document.documentElement.classList.contains('bp-boot-pending')) return
  boot.value = true; window.addEventListener('keydown', endBoot)
  const script = [['> POST ............ ok', 0], ['> mounting /dev/homelab ... ok', 0], ['> whoami', 1], [String(hero.value.name || ''), 2], ['> cat tagline', 1], [String(hero.value.text || ''), 2], ['> topology --render', 1], ['SYSTEM ONLINE', 3]] as [string, number][]
  let t = 250
  script.forEach(([line, kind]) => {
    const step = kind === 2 ? 28 : kind === 1 ? 45 : 0
    if (!step) { bootTimers.push(setTimeout(() => bootLines.value.push(line), t)); t += kind === 3 ? 700 : 220; return }
    for (let i = 1; i <= line.length; i++) bootTimers.push(setTimeout(() => (bootCur.value = line.slice(0, i)), t + i * step))
    t += line.length * step + 160
    bootTimers.push(setTimeout(() => { bootLines.value.push(line); bootCur.value = '' }, t))
    t += 120
  })
  bootTimers.push(setTimeout(endBoot, t + 500))
})
const words = computed(() => String(hero.value.name || '').split(' '))
</script>

<template>
  <div class="vh" :class="'vh-' + MODE">
    <!-- 01 RACK -->
    <template v-if="MODE === 'rack'">
      <section class="rk-hero">
        <div class="rk-copy"><p class="rk-tag">// {{ hero.name }}</p><h1>{{ hero.text }}</h1><p>{{ hero.tagline }}</p>
          <div class="vh-actions"><a v-for="a in actions" :key="a.text" :href="a.href" :class="a.theme">{{ a.text }}</a></div></div>
        <div class="rk-rack"><div class="rk-ear" /><div class="rk-units">
          <a v-for="(f, i) in feats" :key="f.title" :href="f.href" class="rk-unit" :style="{ animationDelay: i * 40 + 'ms' }">
            <span class="rk-led" :style="{ animationDelay: (i * 370) % 2000 + 'ms' }" /><span class="rk-u">U{{ f.n }}</span>
            <img v-if="f.img" :src="f.img" :alt="f.alt" /><span v-else class="rk-emo">{{ f.emoji }}</span>
            <strong>{{ f.title }}</strong><em>{{ f.details }}</em><span class="rk-vent" /></a></div><div class="rk-ear" /></div>
      </section>
    </template>
    <!-- 02 SWISS POSTER -->
    <template v-else-if="MODE === 'poster'">
      <section class="sp-hero"><h1><span v-for="(w, i) in words" :key="i" :class="{ outline: i % 2 === 1 }">{{ w }}</span></h1>
        <div class="sp-meta"><div><b>Who</b>{{ hero.name }}</div><div><b>Focus</b>{{ hero.text }}</div><div><b>Approach</b>{{ hero.tagline }}</div>
          <div><b>Go</b><a v-for="a in actions" :key="a.text" :href="a.href">{{ a.text }} ↗</a></div></div></section>
      <div class="sp-band">Selected work — {{ feats.length }} entries</div>
      <ol class="sp-index"><li v-for="f in feats" :key="f.title"><a :href="f.href"><span class="n">{{ f.n }}</span><strong>{{ f.title }}</strong><em>{{ f.details }}</em><span class="arr">↗</span></a></li></ol>
    </template>
    <!-- 03 COMMIT LOG -->
    <template v-else-if="MODE === 'commit'">
      <section class="cl-hero"><div><p class="cl-prompt">$ whoami</p><h1>{{ hero.name }}</h1><h2>{{ hero.text }}</h2>
        <div class="vh-actions"><a v-for="a in actions" :key="a.text" :href="a.href" :class="a.theme">{{ a.text }}</a></div></div>
        <div class="cl-term"><div class="cl-bar"><i /><i /><i /><span>~/nerdy-technician</span></div>
          <pre><span class="p">$</span> cat tagline.txt
{{ hero.tagline }}
<span class="p">$</span> ls projects/ | wc -l
{{ projects.length }}
<span class="p">$</span> <span class="caret">▋</span></pre></div></section>
      <h3 class="cl-h">$ git log --oneline projects/</h3>
      <ol class="cl-log"><li v-for="f in feats" :key="f.title"><span class="dot" /><a :href="f.href"><code>#{{ f.n }}</code><strong>{{ f.title }}</strong><p>{{ f.details }}</p></a></li></ol>
    </template>
    <!-- 04 FIELD MANUAL -->
    <template v-else-if="MODE === 'manual'">
      <div class="fm-run"><span>{{ hero.name }}</span><span>Field Manual · Vol. 1</span></div>
      <section class="fm-cover"><div><p class="fm-k">The</p><h1>{{ hero.name }}'s <em>Field Manual</em></h1><p class="fm-sub">{{ hero.text }}</p><p>{{ hero.tagline }}</p>
        <div class="vh-actions"><a v-for="a in actions" :key="a.text" :href="a.href">§ {{ a.text }}</a></div></div>
        <figure><img :src="avatar" :alt="hero.image?.alt" /><figcaption>Fig. 1 — {{ hero.image?.alt }}</figcaption><span class="fm-stamp">Tested in the homelab</span></figure></section>
      <h2 class="fm-ch">Chapter 1 · Contents</h2>
      <ol class="fm-toc"><li v-for="f in feats" :key="f.title"><a :href="f.href"><span>§ {{ f.n }}</span><strong>{{ f.title }}</strong><i /><em>{{ f.linkText }}</em></a><p>{{ f.details }}</p></li></ol>
    </template>
    <!-- 05 BENTO KINETIC -->
    <template v-else-if="MODE === 'kinetic'">
      <section class="bk-grid">
        <div class="bk-hero"><span class="bk-mono">NT</span><h1>{{ hero.name }}</h1><p>{{ hero.text }}</p></div>
        <div class="bk-av"><img :src="avatar" :alt="hero.image?.alt" /></div>
        <div class="bk-stat"><b>{{ projects.length }}</b><span>projects</span></div>
        <div class="bk-quote">“{{ hero.tagline }}”</div>
        <div class="bk-acts"><a v-for="a in actions" :key="a.text" :href="a.href">{{ a.text }} ↗</a></div>
        <a v-for="(f, i) in feats" :key="f.title" :href="f.href" class="bk-tile" :class="['t' + (i % 4), { big: i === 0 }]">
          <img v-if="f.img" :src="f.img" :alt="f.alt" /><span v-else class="emo">{{ f.emoji }}</span><h3>{{ f.title }}</h3><p>{{ f.details }}</p><span class="go">↗</span></a>
      </section>
    </template>
    <!-- 06 TERMINAL NOIR -->
    <template v-else-if="MODE === 'terminal'">
      <section class="tn-term"><div class="tn-bar">nerdy@nerdytech.dev: ~ — zsh</div><div class="tn-body">
        <p><span class="u">nerdy@nt</span>:<span class="d">~</span>$ {{ typed }}<span v-if="!done" class="caret">█</span></p>
        <div v-show="done" class="tn-out"><h1>{{ hero.name }}</h1><p class="tn-t">{{ hero.text }}</p><p class="tn-c"># {{ hero.tagline }}</p>
          <p><span class="u">nerdy@nt</span>:<span class="d">~</span>$ ls -l ./projects</p>
          <table><tr v-for="f in feats" :key="f.title"><td>drwxr-xr-x</td><td><a :href="f.href">{{ f.title }}/</a></td><td>{{ f.details }}</td></tr></table>
          <p><span class="u">nerdy@nt</span>:<span class="d">~</span>$ open <a v-for="a in actions" :key="a.text" :href="a.href" class="tn-cmd">--{{ a.text.toLowerCase().replace(/ /g, '-') }}</a></p>
          <p><span class="u">nerdy@nt</span>:<span class="d">~</span>$ <span class="caret">█</span></p></div></div></section>
    </template>
    <!-- 07 BENTO SHOWCASE -->
    <template v-else-if="MODE === 'showcase'">
      <section class="bs-head"><img :src="avatar" :alt="hero.image?.alt" /><div><h1>{{ hero.name }}</h1><p>{{ hero.text }}</p></div>
        <div class="vh-actions"><a v-for="a in actions" :key="a.text" :href="a.href" :class="a.theme">{{ a.text }}</a></div></section>
      <section class="bs-grid">
        <a v-if="feats[0]" :href="feats[0].href" class="bs-feature"><div class="bs-fcopy"><img :src="feats[0].img" :alt="feats[0].alt" /><span class="bs-badge">Featured</span><h2>{{ feats[0].title }}</h2><p>{{ feats[0].details }}</p><span class="bs-cta">{{ feats[0].linkText }} →</span></div>
          <img class="bs-shot" :src="withBase('/screenshots/jellyglance/home.webp')" alt="JellyGlance dashboard screenshot" /></a>
        <a v-for="f in feats.slice(1)" :key="f.title" :href="f.href" class="bs-tile"><img v-if="f.img" :src="f.img" :alt="f.alt" /><span v-else class="emo">{{ f.emoji }}</span><h3>{{ f.title }}</h3><p>{{ f.details }}</p></a>
        <div class="bs-tag">{{ hero.tagline }}</div>
      </section>
    </template>
    <!-- 08 BLUEPRINT -->
    <template v-else-if="MODE === 'blueprint'">
      <section class="bp-wrap"><div class="bp-title"><p>DWG NO. NT-001 · NETWORK TOPOLOGY</p><h1>{{ hero.name }}</h1><p class="bp-t">{{ hero.text }}</p><p>{{ hero.tagline }}</p>
        <div class="vh-actions"><a v-for="a in actions" :key="a.text" :href="a.href">[ {{ a.text }} ]</a></div></div>
        <div class="bp-map" :class="{ 'has-hot': hot >= 0 }"><div v-if="boot" class="bp-boot" role="dialog" aria-label="Boot sequence" @click="endBoot"><div class="bp-boot-bar"><span>nt-001 :: tty0</span><button type="button" @click.stop="endBoot">Skip ⏭</button></div><pre><template v-for="(l, k) in bootLines" :key="k"><span :class="{ ok: l === 'SYSTEM ONLINE' }">{{ l }}</span>
</template><span>{{ bootCur }}</span><i class="bp-caret">█</i></pre><p>click, press any key, or Skip</p></div><div class="bp-sweep" aria-hidden="true"></div><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><circle class="bp-orbit" cx="50" cy="50" r="38" /><circle class="bp-orbit2" cx="50" cy="50" r="44" /><line v-for="(f, i) in feats" :key="f.title" :class="{ hot: hot === i }" x1="50" y1="50" :x2="nodePos(i, feats.length).x" :y2="nodePos(i, feats.length).y" /></svg>
          <template v-for="(f, i) in feats" :key="'p' + f.title"><span v-for="k in 2" :key="k" class="bp-pkt" :class="{ back: k === 2, on: hot === i }" :style="{ '--x': nodePos(i, feats.length).x, '--y': nodePos(i, feats.length).y, animationDelay: (i * 0.37 + k * 1.3) + 's' }" aria-hidden="true"></span></template>
          <div class="bp-hub"><i class="bp-ring" aria-hidden="true"></i><i class="bp-ring r2" aria-hidden="true"></i><img width="110" height="110" fetchpriority="high" :src="avatar" :alt="hero.image?.alt" /><span>core · online</span></div>
          <a v-for="(f, i) in feats" :key="f.title" :href="f.href" class="bp-node" :class="['st-' + nodeState(f.title), { 'is-hot': hot === i, 'tip-r': nodePos(i, feats.length).x > 55, 'tip-l': nodePos(i, feats.length).x < 45 }]" :aria-label="f.title + ', ' + (nodeState(f.title) === 'na' ? '' : stateLabel[nodeState(f.title)].toLowerCase() + ' – ') + blurb(f.details)" @mouseenter="hot = i" @mouseleave="hot = -1" @focus="hot = i" @blur="hot = -1" :style="{ left: nodePos(i, feats.length).x + '%', top: nodePos(i, feats.length).y + '%', '--i': i, '--sw': sweepAt(i, feats.length) }">
            <i class="bp-ping" aria-hidden="true"></i><span class="bp-ico"><img v-if="f.img" :src="f.img" :alt="f.alt" /><span v-else>{{ f.emoji }}</span></span><strong>{{ f.title }}</strong><small>node-{{ f.n }}</small><em v-if="nodeState(f.title) !== 'na'" class="bp-st" :title="stateTitle(f.title)"><i></i>{{ stateLabel[nodeState(f.title)] }}</em><span class="bp-tip" aria-hidden="true">{{ blurb(f.details) }}</span></a></div></section>
      <section class="bp-stats" aria-label="GitHub stats"><a v-for="x in stats" :key="x.k" :href="x.href" target="_blank" rel="noopener"><b>{{ x.v }}</b><span>{{ x.k }}</span><small>{{ x.s }}</small></a><p class="bp-asof">as of {{ fmtDate(live.asOf) }} · public GitHub API, fetched at build</p></section>
      <section v-if="spot.j" class="bp-spot" aria-label="Featured project"><h2><span>Featured / spotlight</span><i class="bp-ruler" aria-hidden="true"></i></h2>
        <div class="bp-spot-grid"><article class="bp-spot-main"><figure><img :src="withBase('/screenshots/jellyglance/home.webp')" alt="JellyGlance dashboard home screen" loading="lazy" width="1600" height="900" /><figcaption>FIG. 01 · JellyGlance dashboard</figcaption></figure>
          <div class="bp-spot-copy"><small>node-{{ spot.j.n }} · {{ spot.js?.category }}<template v-if="up('JellyGlance')"> · <i class="bp-dot"></i> live</template></small><h3>{{ spot.j.title }}</h3><p>{{ spot.j.details }}</p>
            <ul class="bp-chips"><li v-for="c in spot.js?.chips || []" :key="c">{{ c }}</li><li v-if="live.jellyglanceRelease">{{ live.jellyglanceRelease.tag }}</li></ul>
            <nav class="bp-spot-btns"><a class="pri" href="https://jellyglance.com/" target="_blank" rel="noopener">Live site ↗</a><a :href="spot.js?.docs || spot.j.href">Docs</a><a href="https://docs.jellyglance.com/" target="_blank" rel="noopener">Live docs ↗</a><a :href="live.repos?.JellyGlance?.url || spot.js?.repository" target="_blank" rel="noopener">Repo ↗</a></nav></div></article>
          <article v-if="spot.m" class="bp-spot-side"><img :src="spot.m.img" :alt="spot.m.alt" width="64" height="64" /><small>node-{{ spot.m.n }} · {{ spot.ms?.category }}</small><h3>{{ spot.m.title }}</h3><p>{{ spot.m.details }}</p><ul class="bp-chips"><li v-for="c in spot.ms?.chips || []" :key="c">{{ c }}</li></ul>
            <nav class="bp-spot-btns"><a class="pri" :href="spot.m.href">Overview</a><a :href="spot.ms?.repository" target="_blank" rel="noopener">Repo ↗</a></nav></article></div></section>
      <section ref="legendEl" class="bp-legend" :class="{ 'is-in': legendIn }"><h2><span>Legend / node specs</span><i class="bp-ruler" aria-hidden="true"></i><em>{{ feats.length }} nodes</em></h2>
        <div class="bp-specs"><article v-for="(f, i) in feats" :key="f.title" class="bp-spec" :class="{ 'is-hot': hot === i }" :style="{ '--i': i }" @mouseenter="hot = i" @mouseleave="hot = -1">
          <header><span class="bp-spec-ic"><img v-if="f.img" :src="f.img" :alt="f.alt" /><span v-else>{{ f.emoji }}</span></span>
            <div><small>node-{{ f.n }}<template v-if="spec(f)?.category"> · {{ spec(f).category }}</template></small><h3><a :href="f.href" @focus="hot = i" @blur="hot = -1">{{ f.title }}</a></h3></div>
            <span v-if="spec(f)?.status" class="bp-status" :class="'st-' + spec(f).status.toLowerCase()"><i></i>{{ spec(f).status }}</span></header>
          <p>{{ f.details }}</p>
          <ul v-if="spec(f)?.chips.length" class="bp-chips"><li v-for="c in spec(f).chips" :key="c">{{ c }}</li></ul>
          <nav class="bp-links"><a :href="f.href">{{ f.linkText || 'Open' }} →</a><a v-if="spec(f)?.docs && spec(f).docs !== f.href" :href="spec(f).docs">Docs</a><a v-if="spec(f)?.live" :href="spec(f).live" target="_blank" rel="noopener">Live ↗</a><a v-if="spec(f)?.repository" :href="spec(f).repository" target="_blank" rel="noopener">Repo ↗</a></nav>
        </article></div></section>
    </template>
    <!-- 09 SWISS EDITORIAL -->
    <template v-else-if="MODE === 'editorial'">
      <header class="ed-mast"><span>Issue No. {{ projects.length }}</span><span>{{ hero.name }}</span><span>Portfolio &amp; Docs</span></header>
      <section class="ed-hero"><h1>{{ hero.text }}</h1><aside><img :src="avatar" :alt="hero.image?.alt" /><p class="ed-dek">{{ hero.tagline }}</p>
        <nav><a v-for="a in actions" :key="a.text" :href="a.href">{{ a.text }} →</a></nav></aside></section>
      <section class="ed-cols"><article v-for="f in feats" :key="f.title"><span class="ed-n">{{ f.n }}</span><h3><a :href="f.href">{{ f.title }}</a></h3><p>{{ f.details }}</p><a :href="f.href" class="ed-more">{{ f.linkText }} →</a></article></section>
    </template>
    <!-- 10 CRT -->
    <template v-else-if="MODE === 'crt'">
      <section class="crt-screen"><div class="crt-in"><pre class="crt-boot">NT-BIOS v2.0  MEMORY TEST ... OK
LOADING {{ String(hero.name).toUpperCase() }} ... DONE</pre>
        <h1>{{ String(hero.name).toUpperCase() }}</h1><p>&gt; {{ hero.text }}</p><p>&gt; {{ hero.tagline }}</p>
        <p class="crt-h">=== MAIN MENU ===</p>
        <ol class="crt-menu"><li v-for="f in feats" :key="f.title"><a :href="f.href">[{{ f.n }}] {{ f.title.toUpperCase() }}</a><span>{{ f.details }}</span></li></ol>
        <p class="crt-h">=== COMMANDS ===</p><p><a v-for="a in actions" :key="a.text" :href="a.href" class="crt-k">&lt;{{ a.text.toUpperCase() }}&gt;</a></p>
        <p>READY.<span class="caret">█</span></p></div></section>
    </template>
  </div>
</template>
