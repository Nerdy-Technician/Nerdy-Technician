import { readdir, readFile } from 'node:fs/promises'
import { extname, join, normalize, resolve } from 'node:path'

const docsRoot = resolve('docs')
const sourceExtensions = new Set(['.md', '.mts', '.ts', '.vue'])
const linkPattern = /(?:href|link)\s*[:=]\s*["'`]([^"'`]+)["'`]/g

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (entry.name === '.vitepress' || entry.name === 'public') continue
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await collectFiles(path))
    else if (sourceExtensions.has(extname(entry.name))) files.push(path)
  }

  return files
}

function routeCandidates(route) {
  const cleanRoute = decodeURIComponent(route.split(/[?#]/)[0])
  if (!cleanRoute.startsWith('/')) return []
  const relativeRoute = cleanRoute.replace(/^\//, '')
  const candidates = relativeRoute
    ? [join(docsRoot, `${relativeRoute}.md`), join(docsRoot, relativeRoute, 'index.md')]
    : [join(docsRoot, 'index.md')]
  return candidates.map((candidate) => normalize(candidate))
}

const files = await collectFiles(docsRoot)
const missing = []

for (const file of files) {
  const source = await readFile(file, 'utf8')
  for (const match of source.matchAll(linkPattern)) {
    const route = match[1]
    const candidates = routeCandidates(route)
    const exists = await Promise.all(candidates.map(async (candidate) => {
      try {
        await readFile(candidate)
        return true
      } catch {
        return false
      }
    }))
    if (candidates.length && !exists.some(Boolean)) {
      missing.push(`${file}: ${route}`)
    }
  }
}

if (missing.length) {
  console.error('Broken internal links:')
  missing.forEach((link) => console.error(`- ${link}`))
  process.exitCode = 1
} else {
  console.log(`Checked ${files.length} source files. No broken internal links found.`)
}
