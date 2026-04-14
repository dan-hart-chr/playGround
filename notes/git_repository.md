# Installing Git

**Git** is a version control tool — it tracks changes to your code over time, so you can undo mistakes and collaborate with others.

## Windows

1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download and run the installer
3. Accept the default settings throughout
4. This also installs **Git Bash**, a terminal that behaves like a Linux/macOS shell — you will use this for all terminal commands in this course

## macOS

Git is included with the macOS developer tools. Open Terminal and run:

```bash
git --version
```

If it is not installed, macOS will prompt you to install it automatically.

### Verify the Installation

```bash
git --version
```

Expected output:
```
git version 2.x.x
```

## Configure Git (required for all users)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Checking the user.name and email
```bash
git config user.name
git config user.email
```