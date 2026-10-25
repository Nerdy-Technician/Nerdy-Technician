<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
const cv = ref<HTMLCanvasElement | null>(null)
let raf = 0, stop = () => {}
onMounted(() => {
  const c = cv.value!, ctx = c.getContext('2d')!
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let W = 0, H = 0, dpr = 1, pts: { x: number; y: number; vx: number; vy: number; r: number }[] = []
  const size = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2); W = window.innerWidth; H = window.innerHeight
    c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const n = W < 760 ? 22 : 64
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * 14, vy: (Math.random() - .5) * 14, r: Math.random() * 1.4 + .6 }))
  }
  const draw = (t: number, dt: number) => {
    ctx.fillStyle = '#1e1e1e'; ctx.fillRect(0, 0, W, H)
    const ox = (t * 0.006) % 100, oy = (t * 0.004) % 100
    ctx.lineWidth = 1
    for (const [step, a] of [[20, .025], [100, .06]] as const) {
      ctx.strokeStyle = `rgba(255,255,255,${a})`; ctx.beginPath()
      for (let x = (ox % step) - step; x < W; x += step) { ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, H) }
      for (let y = (oy % step) - step; y < H; y += step) { ctx.moveTo(0, y + .5); ctx.lineTo(W, y + .5) }
      ctx.stroke()
    }
    const D = W < 760 ? 110 : 150
    for (const p of pts) { p.x += p.vx * dt; p.y += p.vy * dt; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1 }
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i], b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy
      if (d2 < D * D) { ctx.strokeStyle = `rgba(201,0,0,${(1 - Math.sqrt(d2) / D) * .28})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke() }
    }
    ctx.fillStyle = 'rgba(201,0,0,.7)'
    for (const p of pts) { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill() }
  }
  let last = performance.now()
  const loop = (t: number) => { const dt = Math.min((t - last) / 1000, .05); last = t; draw(t, dt); raf = requestAnimationFrame(loop) }
  const start = () => { cancelAnimationFrame(raf); last = performance.now(); raf = requestAnimationFrame(loop) }
  const vis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) start() }
  const rs = () => { size(); if (reduce) draw(0, 0) }
  size(); if (reduce) draw(0, 0); else { draw(0, 0); const go = () => setTimeout(start, 1200); if (document.readyState === "complete") go(); else window.addEventListener("load", go, { once: true }) }
  window.addEventListener('resize', rs); document.addEventListener('visibilitychange', vis)
  stop = () => { cancelAnimationFrame(raf); window.removeEventListener('resize', rs); document.removeEventListener('visibilitychange', vis) }
})
onBeforeUnmount(() => stop())
</script>
<template><canvas ref="cv" class="bp-bg" aria-hidden="true"></canvas></template>
