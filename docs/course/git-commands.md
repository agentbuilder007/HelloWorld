# Git Commands Cheat Sheet (Project-Based)

This document captures the Git commands used while building the screenshot parser project.

The goal is not to memorize everything, but to understand the **core workflow**.


🧭 Mental Model
Write code → Stage → Commit → Push → Verify

---
## Setup
.gitignore

Used to prevent files from being tracked:

node_modules/
.env
.ssh/
*.pem
 
## 🔁 Core Workflow

```bash
git add .
git commit -m "message"
git push
```
👉 Translation:

- add → stage changes eg, new files, modified files, deletions
- commit → save locally or creates a snapshot of your work
- push → send to GitHub
---

## 🔍 Inspecting State
```bash
git status
git ls-files
```
👉 Translation:

- status → Shows: current branch, staged changes, unstaged changes, untracked files
- ls-files → Lists all files currently tracked by Git.
-- Tracked vs Untracked
Tracked = Git knows about it
Untracked = new files not yet added
---

🚀 Pushing to GitHub
First push (set upstream)
git push -u origin <branch-name>

Example:

git push -u origin feat/increment-1-server
Regular push
git push

👉 Works after upstream is set

🌿 Branch Basics
Create and switch to new branch
git checkout -b <branch-name>

Example:

git checkout -b feat/increment-1-server
Switch branches
git checkout <branch-name>
🧠 Key Concepts
Local vs Remote
commit → local
push   → remote (GitHub)
