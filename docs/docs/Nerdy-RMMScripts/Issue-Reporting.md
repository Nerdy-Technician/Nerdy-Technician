<section class="rmm-hero rmm-hero-compact">
  <div>
    <p class="rmm-eyebrow">
      <img src="/logos/nerdy-rmm-scripts.svg" alt="" />
      Issue reporting
    </p>
    <h1>Report A Useful Issue</h1>
    <p>
      Good reports make fixes faster. Include the affected script, environment,
      expected result, actual result, steps to reproduce, and any safe logs or
      output.
    </p>
    <div class="rmm-actions">
      <a href="https://github.com/Nerdy-Technician/Nerdy-RMMScripts/issues" target="_blank" rel="noopener noreferrer">Raise an issue</a>
      <a href="/docs/Nerdy-RMMScripts/Naming-Convention">Naming guide</a>
    </div>
  </div>
  <div class="rmm-hero-mark" aria-hidden="true">
    <img src="/logos/nerdy-rmm-scripts.svg" alt="" />
  </div>
</section>

## Before Opening An Issue

<div class="rmm-checklist">
  <span>Search existing issues for duplicates</span>
  <span>Check the docs and repository README</span>
  <span>Reproduce using the latest scripts from <code>main</code></span>
  <span>Remove secrets, tokens, passwords, and private URLs</span>
</div>

## What To Include

<div class="rmm-note-grid">
  <article>
    <h3>Clear summary</h3>
    <p>Use a short title that names the script and the failure or request.</p>
  </article>
  <article>
    <h3>Environment</h3>
    <p>Include RMM platform, OS version, shell, script name, script path, and commit if known.</p>
  </article>
  <article>
    <h3>Evidence</h3>
    <p>Add steps to reproduce, expected result, actual result, command output, and safe logs.</p>
  </article>
</div>

## Helpful Commands

Use only the commands that are relevant to the script or system you are reporting.

```bash
# Basic Linux system info
uname -a
lsb_release -a || cat /etc/os-release

# Script path and permissions
ls -l "path/to/script.sh"

# Service logs when systemd is involved
sudo journalctl -u servicename --since "1 hour ago" | tail -n 200
```

## General Issue Template

```markdown
## Issue Description
A clear summary of the issue or question.

## Environment
- RMM platform:
- Operating system and version:
- Script language:
- Script name and path:
- Script commit/version:

## Additional Information
Relevant context, related scripts, links, logs, or screenshots.

## Attachments
Screenshots, redacted logs, or files that help explain the issue.
```

## Bug Report Template

```markdown
## Bug Description
A clear description of the bug.

## Steps To Reproduce
1. 
2. 
3. 

## Expected Behavior
What should have happened.

## Actual Behavior
What happened instead. Include exact error text when possible.

## Environment
- RMM platform:
- Operating system and version:
- Script language:
- Script name and path:

## Logs Or Screenshots
Paste redacted output in fenced code blocks.
```

## Feature Request Template

```markdown
## Problem
What limitation or workflow gap are you trying to solve?

## Desired Solution
- Script name(s):
- Desired parameters or switches:
- Expected output or logging:

## Alternatives Considered
Any workaround, manual process, or third-party tool you have tried.

## Environment
- RMM platform:
- Operating system and version:
- Script language:
```

## Priority And Labels

<div class="rmm-category-list">
  <article><strong>bug</strong><span>A reproducible defect or failure.</span></article>
  <article><strong>enhancement</strong><span>A feature request or workflow improvement.</span></article>
  <article><strong>documentation</strong><span>Docs, examples, naming, or usage guidance.</span></article>
  <article><strong>critical</strong><span>Security exposure, data loss, or serious production impact.</span></article>
  <article><strong>high</strong><span>Production-breaking behavior with a clear reproduction path.</span></article>
  <article><strong>medium / low</strong><span>Limited impact, edge cases, polish, or nice-to-have changes.</span></article>
</div>

## Pull Requests

Fork the repository, create a feature branch, follow the naming convention,
include tests where practical, update docs when behavior changes, and reference
the related issue in the PR description.
