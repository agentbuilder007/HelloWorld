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
