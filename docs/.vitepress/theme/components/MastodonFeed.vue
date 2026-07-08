<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const instanceUrl = 'https://masto.nerdy-technician.social'
const accountHandle = 'Roffo'
const accountUrl = `${instanceUrl}/@${accountHandle}`

type MastodonAccount = {
  id: string
  username: string
  acct: string
  display_name: string
  avatar_static: string
  note: string
  url: string
  followers_count: number
  statuses_count: number
}

type MastodonMediaAttachment = {
  id: string
  type: 'image' | 'gifv' | 'video' | 'audio' | 'unknown'
  url: string
  preview_url: string
  description: string | null
}

type MastodonStatus = {
  id: string
  url: string
  content: string
  created_at: string
  replies_count: number
  reblogs_count: number
  favourites_count: number
  media_attachments: MastodonMediaAttachment[]
}

const account = ref<MastodonAccount | null>(null)
const posts = ref<MastodonStatus[]>([])
const isLoading = ref(true)
const error = ref('')

const accountName = computed(() => {
  return account.value?.display_name || `@${accountHandle}`
})

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(value))
}

function plainText(html: string) {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${instanceUrl}${path}`, {
    headers: {
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(`Mastodon returned ${response.status}`)
  }

  return response.json() as Promise<T>
}

async function loadFeed() {
  isLoading.value = true
  error.value = ''

  try {
    const resolvedAccount = await fetchJson<MastodonAccount>(
      `/api/v1/accounts/lookup?acct=${encodeURIComponent(accountHandle)}`
    )

    const statuses = await fetchJson<MastodonStatus[]>(
      `/api/v1/accounts/${resolvedAccount.id}/statuses?limit=12&exclude_replies=true&exclude_reblogs=true`
    )

    account.value = resolvedAccount
    posts.value = statuses
  } catch (feedError) {
    error.value =
      feedError instanceof Error
        ? feedError.message
        : 'Unable to load the Mastodon feed.'
  } finally {
    isLoading.value = false
  }
}

function openExternalLink(event: MouseEvent) {
  const target = event.target as HTMLElement | null
  const link = target?.closest('a')

  if (!link) return

  link.setAttribute('target', '_blank')
  link.setAttribute('rel', 'noopener noreferrer')
}

onMounted(loadFeed)
</script>

<template>
  <section class="mastodon-feed" aria-labelledby="mastodon-feed-title">
    <header class="mastodon-profile">
      <img
        v-if="account"
        class="mastodon-profile-avatar"
        :src="account.avatar_static"
        :alt="`${accountName} avatar`"
      />
      <div class="mastodon-profile-body">
        <p class="mastodon-kicker">Mastodon Feed</p>
        <h1 id="mastodon-feed-title">{{ accountName }}</h1>
        <p class="mastodon-handle">@{{ account?.acct || accountHandle }}</p>
        <div v-if="account" class="mastodon-profile-meta" aria-label="Mastodon account stats">
          <span>{{ account.statuses_count.toLocaleString() }} posts</span>
          <span>{{ account.followers_count.toLocaleString() }} followers</span>
        </div>
      </div>
      <a class="mastodon-profile-link" :href="account?.url || accountUrl" target="_blank" rel="noopener noreferrer">
        View on Mastodon
      </a>
    </header>

    <div v-if="isLoading" class="mastodon-state" role="status">
      Loading latest posts...
    </div>

    <div v-else-if="error" class="mastodon-state mastodon-state-error" role="alert">
      <strong>Feed unavailable.</strong>
      <span>{{ error }}</span>
      <button type="button" class="mastodon-retry" @click="loadFeed">Try again</button>
    </div>

    <div v-else class="mastodon-posts" @click="openExternalLink">
      <article v-for="post in posts" :key="post.id" class="mastodon-post">
        <a class="mastodon-post-date" :href="post.url" target="_blank" rel="noopener noreferrer">
          {{ formatDate(post.created_at) }}
        </a>

        <div class="mastodon-post-content" v-html="post.content"></div>

        <div v-if="post.media_attachments.length" class="mastodon-media">
          <template v-for="media in post.media_attachments" :key="media.id">
            <img
              v-if="media.type === 'image' || media.type === 'gifv'"
              :src="media.preview_url || media.url"
              :alt="media.description || plainText(post.content) || 'Mastodon post media'"
              loading="lazy"
            />
            <video
              v-else-if="media.type === 'video'"
              :src="media.url"
              :poster="media.preview_url"
              controls
              preload="metadata"
            ></video>
          </template>
        </div>

        <footer class="mastodon-post-stats" aria-label="Post stats">
          <span>{{ post.replies_count }} replies</span>
          <span>{{ post.reblogs_count }} boosts</span>
          <span>{{ post.favourites_count }} favourites</span>
        </footer>
      </article>
    </div>
  </section>
</template>

<style scoped>
.mastodon-feed {
  display: grid;
  gap: 18px;
}

.mastodon-profile {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 18px;
  align-items: center;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.mastodon-profile-avatar {
  width: 72px;
  height: 72px;
  border-radius: 8px;
  object-fit: cover;
}

.mastodon-profile-body {
  min-width: 0;
}

.mastodon-kicker,
.mastodon-handle {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.mastodon-kicker {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.mastodon-profile h1 {
  margin: 4px 0;
  font-size: 34px;
  line-height: 1.12;
}

.mastodon-profile-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.mastodon-profile-meta span,
.mastodon-post-stats span {
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  padding: 4px 10px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.4;
}

.mastodon-profile-link,
.mastodon-retry {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  padding: 0 14px;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
}

.mastodon-profile-link:hover,
.mastodon-retry:hover {
  border-color: var(--vp-c-brand-2);
  background: var(--vp-c-brand-2);
  color: var(--vp-c-white);
}

.mastodon-state {
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
}

.mastodon-state-error {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.mastodon-state-error strong {
  color: var(--vp-c-text-1);
}

.mastodon-retry {
  min-height: 34px;
  margin-left: auto;
  cursor: pointer;
  font: inherit;
}

.mastodon-posts {
  display: grid;
  gap: 16px;
}

.mastodon-post {
  padding: 22px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  box-shadow: var(--vp-shadow-1);
}

.mastodon-post-date {
  display: inline-flex;
  margin-bottom: 12px;
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.mastodon-post-content {
  color: var(--vp-c-text-1);
  font-size: 16px;
  line-height: 1.7;
}

.mastodon-post-content :deep(p) {
  margin: 0 0 12px;
}

.mastodon-post-content :deep(p:last-child) {
  margin-bottom: 0;
}

.mastodon-post-content :deep(a) {
  overflow-wrap: anywhere;
}

.mastodon-media {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
  margin-top: 16px;
}

.mastodon-media img,
.mastodon-media video {
  width: 100%;
  max-height: 420px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  object-fit: cover;
}

.mastodon-post-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

@media (max-width: 720px) {
  .mastodon-profile {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .mastodon-profile-link {
    grid-column: 1 / -1;
    width: 100%;
  }
}

@media (max-width: 520px) {
  .mastodon-profile {
    grid-template-columns: 1fr;
  }

  .mastodon-profile-avatar {
    width: 64px;
    height: 64px;
  }

  .mastodon-profile h1 {
    font-size: 28px;
  }

  .mastodon-state-error {
    align-items: flex-start;
    flex-direction: column;
  }

  .mastodon-retry {
    margin-left: 0;
  }
}
</style>
