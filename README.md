# Jekyll SEO-Optimized Theme

A modern, SEO-friendly Jekyll theme for GitHub Pages with built-in optimization features.

## Features

### 🚀 SEO Optimization
- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph Tags**: Perfect social media sharing
- **Twitter Cards**: Enhanced Twitter sharing with images
- **Structured Data**: JSON-LD schema markup for rich snippets
- **Canonical URLs**: Prevent duplicate content issues
- **XML Sitemap**: Auto-generated for search engines
- **RSS Feed**: Built-in feed for subscribers
- **Mobile Responsive**: Mobile-first design approach

### 📱 Responsive Design
- Mobile-first approach
- Fully responsive layouts
- Touch-friendly navigation
- Optimized for all screen sizes

### 🎨 Modern Features
- Clean, modern design
- Dark-friendly color scheme
- Smooth animations and transitions
- Lazy loading for images
- Code syntax highlighting
- Table of contents generation
- Reading time estimates

### 📊 Analytics Ready
- Google Analytics integration
- Search Console compatible
- Performance optimized

## Quick Start

### Prerequisites
- Ruby 2.7 or higher
- Jekyll 4.0 or higher
- Git

### Installation

1. **Clone or download this theme**
   ```bash
   git clone <repository-url>
   cd gdflixs
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Update configuration**
   Edit `_config.yml` with your site information:
   ```yaml
   title: "Your Site Title"
   description: "Your site description"
   author: "Your Name"
   email: "your.email@example.com"
   url: "https://yourusername.github.io"
   ```

4. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000` in your browser.

## Project Structure

```
├── _config.yml              # Site configuration
├── _layouts/                # Page templates
│   ├── default.html        # Base layout
│   └── post.html           # Blog post layout
├── _includes/              # Reusable components
│   ├── header.html         # Site header
│   └── footer.html         # Site footer
├── _posts/                 # Blog posts (Markdown)
│   ├── 2025-11-13-my-first-post.md
│   └── 2025-11-14-seo-best-practices.md
├── assets/                 # Static assets
│   ├── css/style.css       # Main stylesheet
│   ├── js/script.js        # JavaScript
│   └── images/             # Images
├── index.html              # Homepage
├── blog.html               # Blog listing
├── about.html              # About page
├── contact.html            # Contact page
├── Gemfile                 # Ruby dependencies
└── README.md               # This file
```

## Creating Blog Posts

1. Create a new file in `_posts/` directory
2. Follow naming convention: `YYYY-MM-DD-title.md`
3. Add front matter at the top:

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

Your content here in Markdown...
```

## SEO Best Practices

### For Each Post
- ✅ Use descriptive titles (50-60 characters)
- ✅ Write meta descriptions (150-160 characters)
- ✅ Use proper heading hierarchy (H1, H2, H3)
- ✅ Include internal links to related posts
- ✅ Add featured images with alt text
- ✅ Use relevant tags and categories
- ✅ Include reading time estimate
- ✅ Write quality excerpts

### Site-Wide
- ✅ Update `_config.yml` with your information
- ✅ Add Google Analytics ID
- ✅ Submit sitemap to Google Search Console
- ✅ Verify site with Google Search Console
- ✅ Add social media links
- ✅ Enable RSS feed

## Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    /* ... more variables ... */
}
```

### Navigation
Edit `_includes/header.html` to add/remove navigation links.

### Footer
Edit `_includes/footer.html` to customize footer content.

## Deployment to GitHub Pages

1. Push your repository to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Your site will be published at `https://yourusername.github.io`

## Performance Tips

- Optimize images before uploading
- Use lazy loading for images
- Minimize CSS and JavaScript
- Enable gzip compression
- Use a CDN for assets
- Monitor with Google PageSpeed Insights

## Troubleshooting

### Site not building?
- Check `_config.yml` syntax
- Ensure all files are in correct directories
- Run `bundle update` to update gems

### Images not showing?
- Check image paths are correct
- Ensure images are in `assets/images/` directory
- Use relative URLs with `| relative_url` filter

### Styles not applying?
- Clear browser cache
- Run `bundle exec jekyll clean`
- Rebuild with `bundle exec jekyll serve`

## Support & Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [SEO Best Practices](https://developers.google.com/search/docs)
- [Markdown Guide](https://www.markdownguide.org/)

## License

This theme is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

**Happy blogging! 🚀**

