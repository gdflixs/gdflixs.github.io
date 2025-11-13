# Quick Start Guide

Get your Jekyll blog up and running in 5 minutes!

## 1. Install Ruby & Jekyll (5 min)

### Windows
```bash
# Download and install from: https://rubyinstaller.org/
# Then run:
gem install jekyll bundler
```

### macOS
```bash
brew install ruby
gem install jekyll bundler
```

### Linux
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
gem install jekyll bundler
```

## 2. Install Dependencies (2 min)

```bash
cd your-project-directory
bundle install
```

## 3. Update Configuration (3 min)

Edit `_config.yml`:
```yaml
title: "My Blog"
description: "My awesome blog"
author: "Your Name"
email: "your@email.com"
url: "https://yourusername.github.io"
twitter_username: "@yourhandle"
github_username: "yourusername"
```

## 4. Run Locally (1 min)

```bash
bundle exec jekyll serve
```

Visit: `http://localhost:4000`

## 5. Create Your First Post (2 min)

Create file: `_posts/2025-11-13-hello-world.md`

```yaml
---
layout: post
title: "Hello World"
date: 2025-11-13 10:00:00 +0000
author: "Your Name"
categories: [Welcome]
tags: [first-post]
excerpt: "My first blog post!"
---

# Hello World!

This is my first blog post. I'm excited to share my thoughts with the world!
```

## 6. Deploy to GitHub Pages (5 min)

```bash
# Create repository on GitHub: yourusername.github.io

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

Your site is live at: `https://yourusername.github.io`

---

## Common Commands

```bash
# Run locally
bundle exec jekyll serve

# Build site
bundle exec jekyll build

# Clean build
bundle exec jekyll clean

# Update gems
bundle update
```

## File Structure

```
├── _config.yml          ← Site settings
├── _posts/              ← Blog posts
├── _layouts/            ← Page templates
├── _includes/           ← Reusable components
├── assets/              ← CSS, JS, images
├── index.html           ← Homepage
├── blog.html            ← Blog listing
├── about.html           ← About page
└── contact.html         ← Contact page
```

## Customization

### Change Colors
Edit `assets/css/style.css` - look for `:root` section

### Change Navigation
Edit `_includes/header.html`

### Change Footer
Edit `_includes/footer.html`

## SEO Essentials

✅ Update `_config.yml` with your info
✅ Add Google Analytics ID
✅ Submit sitemap to Google Search Console
✅ Write quality posts with good titles
✅ Add images with alt text
✅ Use tags and categories

## Troubleshooting

**Site not building?**
```bash
bundle install
bundle update
```

**Images not showing?**
- Check path: `/assets/images/image.jpg`
- Use: `{{ '/assets/images/image.jpg' | relative_url }}`

**Styles not working?**
```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

## Next Steps

1. ✅ Customize `_config.yml`
2. ✅ Update About page
3. ✅ Create first post
4. ✅ Deploy to GitHub
5. ✅ Submit to Google Search Console
6. ✅ Start writing!

## Resources

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages](https://pages.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [SEO Checklist](./SEO_CHECKLIST.md)
- [Setup Guide](./SETUP_GUIDE.md)

---

**Happy blogging! 🚀**

