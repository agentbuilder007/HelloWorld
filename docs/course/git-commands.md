# Git Commands Cheat Sheet (Project-Based)

This document captures the Git commands used while building the screenshot parser project.

The goal is not to memorize everything, but to understand the **core workflow**.

---

## 🧭 Mental Model

```
Write code → Stage → Commit → Push → Verify
```

---

## ⚙️ Setup

### `.gitignore`

Used to prevent files from being tracked:

```
node_modules/
.env
.ssh/
*.pem
```

---

## 🔁 Core Workflow

```bash
git add .
git commit -m "message"
git push
```

### Translation

- `git add` → stage changes (new files, modified files, deletions)
- `git commit` → save locally (creates a snapshot of your work)
- `git push` → send changes to GitHub

## 🧠 Merge Workflow

Your branch moved from:
A → B → C → D   (your branch)
meanwhile Main also diverged
A → B → X → Y   (main)
Reconcile merges from Main to your branch:
A → B → X → Y → C → D   (your branch updated)
"behind" = missing commits
"ahead"  = your new work

PR Merge
```bash
git checkout feat/increment-1-server
git fetch origin
git merge origin/main
git push
```
### Translation
-	`git checkout` feat/increment-1-server → switch to the feature branch
Think of it as: moving into the workspace where you’re doing this specific change
- `git fetch origin` → download the latest changes from the remote (without applying them)
Think of it as: checking for updates from the shared project without touching your work yet
- `git merge origin/main` → bring the latest changes from the main branch into your current branch
Think of it as: updating your branch so it stays in sync with the latest official version
- `git push` → upload your updated branch to the remote repository
Think of it as: sharing your updated work back to the team or GitHub

Update Main NEED TO CLEANUP 
```bash
git checkout main
git pull                 # get latest main
git merge feat/increment-1-server   # add your feature
git push origin main     # publish it

```
### Translation
- `git checkout main`
- `git pull`

---

## 🔍 Inspecting State

```bash
git status
git ls-files
```

### Translation

- `git status` → shows current branch, staged changes, unstaged changes, untracked files
- `git ls-files` → lists all files currently tracked by Git

### Tracked vs Untracked

- **Tracked** → Git knows about the file
- **Untracked** → new file not yet added to Git

---

## 🚀 Pushing to GitHub

### First push (set upstream)

```bash
git push -u origin <branch-name>
```

Example:

```bash
git push -u origin feat/increment-1-server
```

### Regular push

```bash
git push
```

Works after upstream is set.

---

## 🌿 Branch Basics

### Create and switch to a new branch

```bash
git checkout -b <branch-name>
```

Example:

```bash
git checkout -b feat/increment-1-server
```

### Switch branches

```bash
git checkout <branch-name>
```

---

## 🧠 Key Concepts

### Local vs Remote

```
commit → local
push   → remote (GitHub)
```
