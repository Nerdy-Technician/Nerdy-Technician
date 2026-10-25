// Variant theme: extends the original theme, adds a custom home layout and variant.css
import { h } from 'vue'
import { useData } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MastodonFeed from './components/MastodonFeed.vue'
import VariantHome from './components/VariantHome.vue'
import BlueprintBg from './components/BlueprintBg.vue'
import ProjectSheet from './components/ProjectSheet.vue'
import ProjectsBlueprint from './components/ProjectsBlueprint.vue'
import './style.css'
import './variant.css'

function fixRootLinks() {
  // raw HTML links in markdown (e.g. home pills) are not base-aware; prefix them with the site base
  const base = import.meta.env.BASE_URL
  document.querySelectorAll('a[href^="/"]').forEach((a) => {
    const href = a.getAttribute('href') || ''
    if (!href.startsWith('//') && !href.startsWith(base)) a.setAttribute('href', base + href.slice(1))
  })
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { page } = useData()
    const isProj = () => page.value.relativePath === 'projects/index.md'
    const isSub = () => /^projects\/[^/]+\//.test(page.value.relativePath)
    return h(DefaultTheme.Layout, null, { 'layout-top': () => h(BlueprintBg), 'home-hero-before': () => h(VariantHome), 'doc-before': () => (isProj() ? h(ProjectsBlueprint) : isSub() ? h(ProjectSheet, { part: 'top' }) : null), 'doc-after': () => (isSub() ? h(ProjectSheet, { part: 'bottom' }) : null) })
  },
  enhanceApp({ app }) {
    app.component('MastodonFeed', MastodonFeed)
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        fixRootLinks()
        new MutationObserver(fixRootLinks).observe(document.body, { childList: true, subtree: true })
      })
    }
  }
} satisfies Theme
