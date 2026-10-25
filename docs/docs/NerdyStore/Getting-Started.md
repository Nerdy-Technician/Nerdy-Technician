---
title: NerdyStore docs moved
---
<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'
const target = withBase('/docs/NerdyStore/')
onMounted(() => { setTimeout(() => window.location.replace(target), 1500) })
</script>

<div class="nt-redirect">
  <p class="nt-redirect-ref">DWG NO. NT-NST · Moved</p>
  <h1><img src="https://store.nerdytech.dev/favicon.svg" alt="" width="36" height="36" /> NerdyStore docs moved</h1>
  <p>The refreshed NerdyStore guide now lives at <a :href="target">{{ target }}</a>. Taking you there now.</p>
  <div class="nt-redirect-actions"><a class="primary" :href="target">Go to the NerdyStore guide</a></div>
</div>
