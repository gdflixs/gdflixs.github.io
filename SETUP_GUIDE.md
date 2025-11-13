# Jekyll Theme Setup Guide

Complete guide to set up and deploy your SEO-optimized Jekyll blog.

## Table of Contents
1. [Local Setup](#local-setup)
2. [Configuration](#configuration)
3. [Creating Content](#creating-content)
4. [GitHub Pages Deployment](#github-pages-deployment)
5. [SEO Optimization](#seo-optimization)
6. [Troubleshooting](#troubleshooting)

## Local Setup

### Windows

1. **Install Ruby**
   - Download from [rubyinstaller.org](https://rubyinstaller.org/)
   - Run installer and select "Add Ruby executables to your PATH"
   - Restart your terminal

2. **Install Jekyll**
   ```bash
   gem install jekyll bundler
   ```

3. **Install Dependencies**
   ```bash
   cd your-project-directory
   bundle install
   ```

4. **Run Locally**
   ```bash
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000`

### macOS

1. **Install Ruby (if needed)**
   ```bash
   brew install ruby
   ```

2. **Install Jekyll**
   ```bash
   gem install jekyll bundler
   ```

3. **Install Dependencies**
   ```bash
   bundle install
   ```

4. **Run Locally**
   ```bash
   bundle exec jekyll serve
   ```

### Linux (Ubuntu/Debian)

1. **Install Ruby**
   ```bash
   sudo apt-get install ruby-full build-essential zlib1g-dev
   ```

2. **Install Jekyll**
   ```bash
   gem install jekyll bundler
   ```

3. **Install Dependencies**
   ```bash
   bundle install
   ```

4. **Run Locally**
   ```bash
   bundle exec jekyll serve
   ```

## Configuration

### 1. Update `_config.yml`

```yaml
# Site Settings
title: "Your Blog Title"
description: "A brief description of your blog"
author: "Your Name"
email: "your.email@example.com"
url: "https://yourusername.github.io"
baseurl: ""

# SEO & Social
keywords: "your, keywords, here"
twitter_username: "@yourhandle"
github_username: "yourusername"

# Analytics
google_analytics: "UA-XXXXXXXXX-X"
```

### 2. Update Navigation

Edit `_includes/header.html` to customize navigation links.

### 3. Update Footer

Edit `_includes/footer.html` to add your social links and information.

### 4. Customize Colors

Edit `assets/css/style.css` CSS variables:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... */
}
```

## Creating Content

### Blog Post Template

Create a new file in `_posts/` with format: `YYYY-MM-DD-title.md`

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-11-13 10:00:00 +0000
author: "Your Name"
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
image: "/assets/images/posts/image.jpg"
image_alt: "Image description"
excerpt: "Brief description for search results"
reading_time: 5
---

# Your Content Here

Write your post in Markdown format...
```

### Front Matter Fields

| Field | Required | Description |
|-------|----------|-------------|
| layout | Yes | Use `post` for blog posts |
| title | Yes | Post title (50-60 chars for SEO) |
| date | Yes | Publication date |
| author | No | Post author |
| categories | No | Post categories |
| tags | No | Post tags |
| image | No | Featured image URL |
| image_alt | No | Image alt text |
| excerpt | No | Search result description |
| reading_time | No | Estimated reading time |

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it: `yourusername.github.io`
3. Make it public
4. Click "Create repository"

### Step 2: Push Your Code

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Click "Save"

Your site will be published at: `https://yourusername.github.io`

## SEO Optimization

### 1. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yourusername.github.io/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add your site
3. Submit sitemap

### 2. Optimize Each Post

- ✅ Title: 50-60 characters
- ✅ Meta description: 150-160 characters
- ✅ Use H1, H2, H3 headings properly
- ✅ Include internal links
- ✅ Add featured image with alt text
- ✅ Use relevant tags and categories
- ✅ Write quality excerpts

### 3. Enable Analytics

1. Create Google Analytics account
2. Get your tracking ID (UA-XXXXXXXXX-X)
3. Add to `_config.yml`:
   ```yaml
   google_analytics: "UA-XXXXXXXXX-X"
   ```

### 4. Optimize Images

- Use tools like [TinyPNG](https://tinypng.com/)
- Keep images under 200KB
- Use descriptive filenames
- Always add alt text

## Troubleshooting

### Site Not Building

**Error: "Gem not found"**
```bash
bundle install
bundle update
```

**Error: "Permission denied"**
```bash
sudo chown -R $(whoami) /usr/local/lib/ruby
```

### Images Not Showing

- Check image path is correct
- Use relative URLs: `{{ '/assets/images/image.jpg' | relative_url }}`
- Ensure image file exists in correct directory

### Styles Not Applying

```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

### Posts Not Appearing

- Check filename format: `YYYY-MM-DD-title.md`
- Verify front matter YAML syntax
- Ensure `layout: post` is set
- Check date is not in the future

### Contact Form Not Working

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form
3. Get your form ID
4. Update `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Performance Tips

1. **Optimize Images**
   - Compress before uploading
   - Use appropriate formats (WebP, JPEG, PNG)
   - Add lazy loading

2. **Minimize Assets**
   - Minify CSS and JavaScript
   - Remove unused code
   - Use CDN for large files

3. **Monitor Performance**
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Check [GTmetrix](https://gtmetrix.com/)
   - Monitor with Google Analytics

## Next Steps

1. ✅ Set up locally
2. ✅ Update configuration
3. ✅ Create first post
4. ✅ Deploy to GitHub Pages
5. ✅ Submit to search engines
6. ✅ Monitor analytics
7. ✅ Keep creating content!

---

**Need help?** Check the [Jekyll Documentation](https://jekyllrb.com/docs/) or [GitHub Pages Help](https://docs.github.com/en/pages).

