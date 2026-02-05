![Nerdy-RMMScripts-Logo](https://github.com/Nerdy-Technician/Nerdy-RMMScripts/raw/main/Images/RepoLogo.png)
## 📋 Script Naming Convention Guide

This repository standardizes script filenames with a leading **category prefix** followed by a **concise descriptive title** for consistency, clarity, and easy identification.

---

## 🎯 Naming Format

```
<Category> - <Descriptive Title>.<ext>
```

**Examples:**
- `Monitor - CPU Usage.sh`
- `Security - Firewall Status.sh`
- `Agent - Wazuh Update.ps1`
- `Maintain - Disk Clean.bat`

### ℹ️ Key Points
- ✅ **Extensions preserved**: `.sh`, `.ps1`, `.bat`, etc.
- ✅ **Spaces used**: For readability (no underscores or dashes in title)
- ✅ **Consistent categorization**: Single prefix per script
- ✅ **Standardized formatting**: ` - ` separator between category and title

---

## 📚 Category Reference

| 🏷️ Category | 📖 Purpose | 💡 Examples |
|--------------|-----------|------------|
| **✅ Check** | One-off status/health verification tests | Latency, reachability, service active, connectivity |
| **📊 Monitor** | Ongoing trends & resource metrics | CPU/RAM/load/bandwidth/IO/uptime trends |
| **🔍 Audit** | Security & configuration enumeration | Users, ports, cron diff, integrity checks |
| **📦 Collect** | Inventory & general data gathering | BIOS info, system info, domain, installed programs |
| **💾 Software Management** | Install/update/package state & repo health | Package updates, repo status, broken packages |
| **🔐 Security** | Security enforcement or provisioning | Firewall setup, access controls, hardening |
| **🌐 Network** | Network diagnostics & configuration | Interfaces, routes, DNS, connectivity |
| **🤖 Agent** | Management/monitoring agent status | Mesh, Wazuh, TRMM, Patchmon, Remotely |
| **🧹 Maintain** | Cleanup & maintenance tasks | Disk cleanup, kernel prune, temp files, spooler |
| **✨ Customize** | System personalization | Bashrc modifications, environment setup |
| **⏰ Cron** | Crontab entry & scheduling checks | Cron presence, scheduling verification |
| **🐳 Image** | Container image hygiene | Staleness, dangling images |
| **🖥️ OS** | Operating system configuration | DNS config, system settings |

---

## 📤 Exit Codes

| Code | Meaning |
|------|---------|
| `0` | ✅ OK / Success |
| `1` | ⚠️ Alert / Failure |
| `2` | ℹ️ Secondary state (e.g., auto-recovered) |

---

## 🚀 Category Selection Guide

**Choose the most specific category** for your script. When ambiguous:
- 📦 Use **`Collect -`** for pure inventory and data gathering
- 🔍 Use **`Audit -`** for security-relevant listings and configurations

-
## 💡 Best Practices

✅ **DO:**
- Use the standardized category prefix for all new scripts
- Choose the **most specific category** available
- Keep titles concise but descriptive (2-4 words typically)
- Use title case for readability: `Monitor - CPU Usage.sh`
- Test script exit codes before deployment

❌ **DON'T:**
- Mix naming conventions (old/new formats in same directory)
- Use underscores or excessive dashes in titles
- Create ambiguous category names
- Ignore exit code standardization
- Use vague or generic titles like "Script.sh" or "Check.sh"


