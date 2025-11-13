# First Time Setup Checklist

Complete step-by-step checklist for first-time Jekyll users.

## ✅ Phase 1: Installation (15 minutes)

### Step 1: Install Ruby
- [ ] Download Ruby from [rubyinstaller.org](https://rubyinstaller.org/) (Windows)
- [ ] Or use `brew install ruby` (macOS)
- [ ] Or use `sudo apt-get install ruby-full` (Linux)
- [ ] Verify: `ruby --version`

### Step 2: Install Jekyll
- [ ] Run: `gem install jekyll bundler`
- [ ] Verify: `jekyll --version`

### Step 3: Install Project Dependencies
- [ ] Navigate to project directory
- [ ] Run: `bundle install`
- [ ] Wait for installation to complete

### Step 4: Test Local Server
- [ ] Run: `bundle exec jekyll serve`
- [ ] Open browser to `http://localhost:4000`
- [ ] See homepage? ✅ Success!

## ✅ Phase 2: Configuration (10 minutes)

### Step 5: Edit _config.yml
Open `_config.yml` and update:
- [ ] `title:` - Your blog name
- [ ] `description:` - Brief description
- [ ] `author:` - Your name
- [ ] `email:` - Your email
- [ ] `url:` - Your GitHub Pages URL
- [ ] `twitter_username:` - Your Twitter handle
- [ ] `github_username:` - Your GitHub username

### Step 6: Update About Page
- [ ] Open `about.html`
- [ ] Update author information
- [ ] Add your bio
- [ ] Update social links

### Step 7: Update Contact Page
- [ ] Open `contact.html`
- [ ] Sign up at [formspree.io](https://formspree.io/)
- [ ] Get your form ID
- [ ] Update form action URL

### Step 8: Customize Colors (Optional)
- [ ] Open `assets/css/style.css`
- [ ] Find `:root` section
- [ ] Change `--primary-color` to your color
- [ ] Change `--secondary-color` to your color
- [ ] Refresh browser to see changes

## ✅ Phase 3: Create Content (15 minutes)

### Step 9: Create First Post
- [ ] Create file: `_posts/2025-11-13-hello-world.md`
- [ ] Copy this template:

```yaml
---
layout: post
title: "Hello World - My First Post"
date: 2025-11-13 10:00:00 +0000
author: "Your Name"
categories: [Welcome]
tags: [first-post, hello]
excerpt: "This is my first blog post!"
reading_time: 3
---

# Hello World!

Welcome to my blog! This is my first post.

## What I'll Write About

I'll be sharing:
- My thoughts and ideas
- Tutorials and guides
- Personal experiences
- And much more!

Stay tuned for more posts! 🚀
```

- [ ] Save the file
- [ ] Refresh browser (should see new post)

### Step 10: Create Second Post
- [ ] Create file: `_posts/2025-11-14-second-post.md`
- [ ] Write your own content
- [ ] Save and refresh

## ✅ Phase 4: GitHub Setup (10 minutes)

### Step 11: Create GitHub Repository
- [ ] Go to [github.com/new](https://github.com/new)
- [ ] Repository name: `yourusername.github.io`
- [ ] Make it Public
- [ ] Click "Create repository"

### Step 12: Push to GitHub
- [ ] Open terminal in project directory
- [ ] Run: `git init`
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial commit"`
- [ ] Run: `git branch -M main`
- [ ] Run: `git remote add origin https://github.com/yourusername/yourusername.github.io.git`
- [ ] Run: `git push -u origin main`

### Step 13: Enable GitHub Pages
- [ ] Go to repository Settings
- [ ] Scroll to "Pages" section
- [ ] Select "Deploy from a branch"
- [ ] Choose `main` branch
- [ ] Choose `/root` folder
- [ ] Click "Save"
- [ ] Wait 1-2 minutes
- [ ] Visit `https://yourusername.github.io`
- [ ] See your site? ✅ Success!

## ✅ Phase 5: SEO Setup (10 minutes)

### Step 14: Google Analytics
- [ ] Go to [analytics.google.com](https://analytics.google.com/)
- [ ] Create new property
- [ ] Get tracking ID (UA-XXXXXXXXX-X)
- [ ] Add to `_config.yml`: `google_analytics: "UA-XXXXXXXXX-X"`
- [ ] Commit and push changes

### Step 15: Google Search Console
- [ ] Go to [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Add property: `https://yourusername.github.io`
- [ ] Verify ownership (follow instructions)
- [ ] Submit sitemap: `https://yourusername.github.io/sitemap.xml`
- [ ] Request indexing of homepage

### Step 16: Bing Webmaster Tools
- [ ] Go to [bing.com/webmasters](https://bing.com/webmasters)
- [ ] Add your site
- [ ] Verify ownership
- [ ] Submit sitemap

## ✅ Phase 6: Optimization (10 minutes)

### Step 17: Optimize First Post
- [ ] Open `_posts/2025-11-13-hello-world.md`
- [ ] Make title 50-60 characters
- [ ] Add meta description (150-160 chars)
- [ ] Add relevant tags (3-5)
- [ ] Add excerpt
- [ ] Add reading time estimate
- [ ] Save and commit

### Step 18: Add Featured Image (Optional)
- [ ] Create folder: `assets/images/posts/`
- [ ] Add image file
- [ ] Update post front matter:
  ```yaml
  image: "/assets/images/posts/image.jpg"
  image_alt: "Image description"
  ```
- [ ] Save and commit

### Step 19: Test Social Sharing
- [ ] Go to [socialsharepreview.com](https://www.socialsharepreview.com/)
- [ ] Enter your post URL
- [ ] Check preview looks good
- [ ] Adjust meta tags if needed

## ✅ Phase 7: Final Checks (5 minutes)

### Step 20: Mobile Test
- [ ] Open site on mobile device
- [ ] Check navigation works
- [ ] Check content is readable
- [ ] Check images display correctly

### Step 21: Performance Test
- [ ] Go to [pagespeed.web.dev](https://pagespeed.web.dev/)
- [ ] Enter your site URL
- [ ] Check performance score
- [ ] Note any recommendations

### Step 22: SEO Test
- [ ] Go to [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] Enter your site URL
- [ ] Check for any errors
- [ ] Verify structured data

## 🎉 You're Done!

Congratulations! Your Jekyll blog is now:
- ✅ Installed and running locally
- ✅ Configured with your information
- ✅ Deployed to GitHub Pages
- ✅ Indexed by search engines
- ✅ Optimized for SEO
- ✅ Ready for content creation

## 📝 Next Steps

1. **Write More Posts**
   - Create posts in `_posts/` directory
   - Follow the front matter template
   - Use proper Markdown formatting

2. **Promote Your Blog**
   - Share posts on social media
   - Add to relevant communities
   - Build backlinks

3. **Monitor Performance**
   - Check Google Analytics
   - Monitor search rankings
   - Analyze user behavior

4. **Keep Learning**
   - Read [Jekyll Docs](https://jekyllrb.com/docs/)
   - Check [SEO Checklist](./SEO_CHECKLIST.md)
   - Review [Setup Guide](./SETUP_GUIDE.md)

## 🆘 Troubleshooting

### Site not showing locally?
```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

### Changes not appearing?
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache
- Restart Jekyll server

### GitHub Pages not updating?
- Wait 1-2 minutes
- Check repository Settings
- Verify branch is `main`

### Images not showing?
- Check file path is correct
- Use: `{{ '/assets/images/image.jpg' | relative_url }}`
- Verify image file exists

## 📚 Documentation

- [QUICK_START.md](./QUICK_START.md) - 5-minute setup
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Detailed setup
- [SEO_CHECKLIST.md](./SEO_CHECKLIST.md) - SEO optimization
- [THEME_OVERVIEW.md](./THEME_OVERVIEW.md) - Complete overview
- [README.md](./README.md) - Full documentation

---

**You're all set! Start writing and sharing your thoughts with the world! 🚀**

