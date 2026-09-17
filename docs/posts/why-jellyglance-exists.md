---
title: Why JellyGlance exists
description: The operational gap around a Jellyfin media server that led to JellyGlance.
author: Nerdy Technician
authorImage: https://avatars.githubusercontent.com/u/45691205?v=4
date: 2026-09-17
time: 23:20 BST
category: Homelab app notes
---

<section class="post-article-hero">
	<div>
		<p class="post-article-kicker">JellyGlance / Homelab app notes</p>
		<h1>Why JellyGlance exists</h1>
		<p class="post-article-lead">Jellyfin serves the media. JellyGlance is about the operational view around it: activity, health, users, queues, and the small signals that keep a home media stack understandable.</p>
		<div class="post-article-meta"><span>Origin note</span><span>Homelab</span><span>Media stack</span></div>
	</div>
	<img src="/screenshots/jellyglance/activity.png" alt="JellyGlance activity dashboard" />
</section>

<div class="post-byline">
	<img src="https://avatars.githubusercontent.com/u/45691205?v=4" alt="Nerdy Technician profile picture" />
	<div><strong>Nerdy Technician</strong><span>Published 17 Sep 2026 · 23:20 BST · Homelab app notes</span></div>
</div>

Jellyfin already does the important part: it serves the media. The question I kept running into was everything around that core job.

Who is watching right now? Which libraries are active? What was added recently? Are downloads moving? Did a webhook fire? Which integrations are healthy? What changed since the last time I looked?

Those questions are operational questions rather than playback questions. They sit between the media server, the download stack, the automation around it, and the people using the system.

## The useful view is the surrounding view

A media stack is a small system. Jellyfin is one important service, but it is connected to users, libraries, download clients, Arr applications, scheduled tasks, backups, and notifications.

JellyGlance grew from wanting those signals in one place without turning every check into a separate browser tab. The goal is not to replace Jellyfin. It is to make the wider system easier to see.

## What I want the app to answer

- What is happening now?
- What changed recently?
- Which part of the stack needs attention?
- Can I act on it without leaving the operational view?

That means activity, statistics, users, queues, release calendars, webhooks, backups, and health checks matter as much as the headline dashboard.

## The homelab test

A homelab app earns its place when it reduces friction over time. It should make a repeated task easier, expose a useful signal before it becomes a problem, or turn scattered knowledge into a view that is quick to understand.

That is the space JellyGlance is exploring: a practical control and visibility layer for a real Jellyfin-centered media stack.

[View JellyGlance](/projects/JellyGlance/) · [Open the live docs](https://docs.jellyglance.com/) · [View the repository](https://github.com/Nerdy-Technician/JellyGlance)
