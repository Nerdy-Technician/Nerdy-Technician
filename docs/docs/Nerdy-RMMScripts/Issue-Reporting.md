![Nerdy-RMMScripts-Logo](https://github.com/Nerdy-Technician/Nerdy-RMMScripts/raw/main/Images/RepoLogo.png)
## 🐞 Issue Reporting Guide

[Raise an Issue](https://github.com/Nerdy-Technician/Nerdy-RMMScripts/issues)

Thank you for helping improve Nerdy-RMMScripts. This document explains how to report bugs, request features, and submit useful information for faster triage and resolution.

---

## 🎯 Goal
Make every issue actionable: include the problem, reproduction steps, environment details, expected vs actual behavior, and any relevant logs or screenshots.

---

## 🧾 Before You Open an Issue
- Search existing issues to avoid duplicates.
- Check the README and `docs` for configuration or usage guidance.
- Try to reproduce on the latest scripts from `main` branch.

---

## 🧰 What to Include (Checklist)
- **Title:** Clear and concise summary (one line).
- **Type:** Bug / Feature / Docs / Chore.
- **Environment:** OS (name + version), shell, script name and path, script version/commit.
- **Steps to Reproduce:** Numbered steps to trigger the issue.
- **Expected Result:** What you expected to happen.
- **Actual Result:** What happened instead (include exact error text).
- **Logs / Output:** Paste or attach logs (use fenced code blocks).
- **Command(s) Run:** Exact commands used.
- **Screenshots:** If helpful, include images or GIFs.
- **Priority / Impact:** Low / Medium / High and explanation.

---

## 🧩 Helpful Commands to Gather Info
Run these and paste outputs in the issue when relevant:

```bash
# Basic system info
uname -a
lsb_release -a || cat /etc/os-release

# Script path and permissions
ls -l "path/to/script.sh"

# If systemd service related (check journal)
sudo journalctl -u servicename --since "1 hour ago" | tail -n 200

```
## Issue Template
``` markdown
## 📌 Issue description:
A clear and concise summary of your issue or question regarding **RMM-Scripts**.  
e.g. "I need clarification on how to schedule the Disk Cleanup script in Tactical RMM."

---

## 🖥️ Environment details:
Please provide details about your setup so we can better understand your situation:  
- **RMM platform**: e.g. Tactical RMM, Datto RMM  
- **Operating System & Version**: e.g. Windows 11 Pro 23H2, Ubuntu 22.04 LTS  
- **Script language**: e.g. PowerShell, Bash, Python  

---

## 💬 Additional information:
Include any relevant details, references, or related scripts.  
e.g. "I’ve tried reviewing the README but couldn’t find details about parameter usage."

---

## 📎 Attachments:
If applicable, add screenshots, logs, or files that help explain your issue.
---
``` 

## 🧪 Bug Report Template

```markdown
## 🐞 Bug description:
A clear and concise description of the bug you’ve encountered in **RMM-Scripts**.  
e.g. "The Windows Cleanup script fails with an 'Access Denied' error when run via Tactical RMM on Windows 10 Home."

---

## 🔁 Steps to reproduce:
List the exact steps that caused the issue.  
1. Go to '...'
2. Click on '...'
3. Run the script '...'
4. See error

---

## 📖 Expected behavior:
Describe what you expected to happen instead.  
e.g. "The script should run without errors and clean up all temporary files."

---

## 🖥️ Environment details:
Please provide details about your setup so we can replicate the issue:  
- **RMM platform**: e.g. Tactical RMM, Datto RMM  
- **Operating System & Version**: e.g. Windows 11 Pro 23H2, Ubuntu 22.04 LTS  
- **Script language**: e.g. PowerShell, Bash, Python  

---

## 📷 Screenshots / Logs:
If applicable, add screenshots or relevant log output to help diagnose the problem.  

---
```

## 💡 Feature Request Template

```markdown
## 🐞 Is your feature request related to a problem with RMM-Scripts? Please describe:
A clear and concise description of the problem, limitation, or gap you’ve encountered when using **RMM-Scripts**.  
e.g. "When running the Disk Cleanup script in Tactical RMM, I can’t exclude certain folders from cleanup."

---

## 💡 Describe the solution you'd like:
Explain in detail how you’d like **RMM-Scripts** to handle this.  
Please include:
- Script name(s) this applies to  
- Desired parameters or switches  
- Expected output or logging changes  
e.g. "Add a `-Exclude` parameter to the Disk Cleanup script that allows specifying multiple folder paths."

---

## 🔀 Describe alternatives you've considered:
List any workarounds or third-party tools you’ve tried to solve this problem before.  
e.g. "I’ve been manually editing the script each time before deployment, but this is time-consuming."

---

## 🌐 Environment details:
Please provide details about your environment to help with troubleshooting and implementation:  
- **RMM platform**: e.g. Tactical RMM, Datto RMM  
- **Operating System & Version**: e.g. Windows 11 Pro 23H2, Ubuntu 22.04 LTS  
- **Script language**: e.g. PowerShell, Bash, Python  
```
---

## 🏷️ Labels & Priority
- `bug` — reproducible defect
- `enhancement` — feature request
- `documentation` — docs update
- `help wanted` — contributions welcome
- `critical` / `high` / `medium` / `low` — impact level

Guidance: use `critical` for data-loss or security issues; use `high` for production-breaking failures.

---

## 🔐 Sensitive Data
Do NOT paste secrets, passwords, API keys, or full private configuration files. Strip or redact sensitive fields before posting.

---

## 🛠️ How We Triage
- We reproduce the issue locally or in CI when possible.
- Assign severity and label; request more info if necessary.
- For accepted fixes, we either merge a PR or request the contributor to open one.
- Contributors are welcome — add `help wanted` if you want someone to pick it up.

---

## 📬 Submitting a Fix (Pull Requests)
- Fork the repo and create a feature branch.
- Follow the naming conventions for scripts and tests.
- Include tests where applicable and update docs.
- Reference the issue in the PR description (e.g., `Fixes #123`).


---
## 🤝 Thank You!

We appreciate your help in improving Nerdy-RMMScripts. Your contributions make a difference!