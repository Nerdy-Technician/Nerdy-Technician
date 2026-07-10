---
title: Homelab
---

<section class="homelab-hero">
  <div>
    <p class="homelab-eyebrow">
      <img src="/logos/homelab.png" alt="" />
      Personal infrastructure
    </p>
    <h1>Homelab</h1>
    <p>
      A compact self-hosted rack for daily services, automation experiments,
      network tooling, and infrastructure ideas before they touch production.
    </p>
  </div>
  <div class="homelab-hero-mark" aria-hidden="true">
    <img src="/logos/homelab.png" alt="" />
  </div>
</section>

I run a small self-hosted rack as my personal infrastructure playground: 3 physical nodes hosting 5 production VMs, each named after a figure from Norse mythology — **Odin, Loki, Heimdall, Thor,** and **Midgard** — plus 2 Raspberry Pis handling dedicated network appliance duties. It's where I host the tools I actually use day to day, and where I test automation, networking, and deployment ideas before they'd ever touch anything production-facing.

<div style="max-width: none; overflow-x: auto; margin: 20px 0;">
  <img src="/logos/Homelab.png" alt="Front and rear layout of the homelab rack" style="width: 100%; max-width: 900px;">
</div>

*Front and rear layout of the rack build.*

## ✨ Highlights

- 🔌 Structured cabling with clean, deliberate airflow paths
- 📦 3 physical hosts running 5 production VMs, plus 2 dedicated Pi appliances
- ⚡ Dedicated, monitored power distribution
- 🧪 Isolated sandbox for testing automation before anything reaches production

## Rack Inventory

| Category | Item | Specs |
|---|---|---|
| **Compute** | 3 × Dell OptiPlex 3080 Micro | i5-10500T · 32GB RAM · 512GB NVMe — hosting 5 production VMs |
| | 2 × Raspberry Pi 4 | 4GB RAM · 32GB microSD — dedicated network appliances |
| **Networking** | 1 × 16-port PoE switch | — |
| | 1 × Rackmate 12-port patch panel | — |
| **Rack & Cable Management** | 1 × 8U Rackmate enclosure | — |
| | 1 × 1U cable management panel | — |
| | 1 × cable brush panel | — |
| | 1 × blank 1U panel | — |
| | 2 × 1U ventilated blank panels | — |
| **Power** | 2 × 3-plug PDU power strips | — |

## What It Runs

### Identity & Networking
| | Service | Description |
|---|---|---|
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/authentik.png" width="28"> | **Authentik** | Self-hosted SSO, backed by PostgreSQL, fronting the rest of the stack |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons@main/svg/traefik.svg" width="28"> | **Traefik** | Reverse proxy and routing for all internal services |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/pi-hole.png" width="28"> | **Pi-hole** | Network-wide DNS filtering and ad blocking |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/tailscale.png" width="28"> | **Wireguard / Tailscale** | Secure remote access into the homelab |

### Media & Files
| | Service | Description |
|---|---|---|
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/jellyfin.png" width="28"> | **Jellyfin** | Media server with NVIDIA + Intel GPU passthrough for hardware transcoding |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/sonarr.png" width="28"> | **Sonarr / Radarr** | Automated media library management |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/immich.png" width="28"> | **Immich** | Self-hosted photo management, plus Immich Frame powering a dedicated photo display |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/nextcloud.png" width="28"> | **Nextcloud** | File sync and storage |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/paperless-ngx.png" width="28"> | **Paperless-ngx** | Document scanning and archival |

### Home & Automation
| | Service | Description |
|---|---|---|
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/home-assistant.png" width="28"> | **Home Assistant** | Home automation hub |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/n8n.png" width="28"> | **n8n** | Workflow automation across the stack |

### Monitoring, Security & Dashboards
| | Service | Description |
|---|---|---|
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/homarr.png" width="28"> | **Homarr** | Homelab dashboard — I'm an active contributor upstream, currently working on a Traefik integration, improved Gotify notification handling, and a logo-hiding option |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/uptime-kuma.png" width="28"> | **Uptime Kuma** | Service uptime monitoring |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/gotify.png" width="28"> | **Gotify** | Self-hosted push notifications |
| <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/png/vaultwarden.png" width="28"> | **Vaultwarden** | Self-hosted password management |

Everything runs in Docker Compose, tied together with a UFW-managed firewall.

---

*Currently in progress: a couple of homegrown tools — an infrastructure monitoring platform and a personal life-tracking app — both still early-stage.*
