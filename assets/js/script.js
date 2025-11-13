// ============================================
// JEKYLL THEME - JAVASCRIPT
// ============================================

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        const navLinks = navbarMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('active');
            });
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Reading time calculation
function calculateReadingTime() {
    const postContent = document.querySelector('.post-content');
    if (!postContent) return;
    
    const text = postContent.innerText;
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    // Update reading time if element exists
    const readingTimeElement = document.querySelector('.reading-time');
    if (readingTimeElement && !readingTimeElement.textContent) {
        readingTimeElement.textContent = `${readingTime} min read`;
    }
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Table of contents generation
function generateTableOfContents() {
    const postContent = document.querySelector('.post-content');
    if (!postContent) return;
    
    const headings = postContent.querySelectorAll('h2, h3');
    if (headings.length === 0) return;
    
    const toc = document.createElement('nav');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>Table of Contents</h3><ul></ul>';
    
    const list = toc.querySelector('ul');
    
    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
        
        const li = document.createElement('li');
        const level = parseInt(heading.tagName[1]);
        li.style.marginLeft = `${(level - 2) * 1.5}rem`;
        
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        
        li.appendChild(a);
        list.appendChild(li);
    });
    
    if (list.children.length > 0) {
        postContent.insertBefore(toc, postContent.firstChild);
    }
}

// Copy code block functionality
function setupCodeBlocks() {
    document.querySelectorAll('pre').forEach(pre => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code');
        
        button.addEventListener('click', function() {
            const code = pre.querySelector('code');
            const text = code.innerText;
            
            navigator.clipboard.writeText(text).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
        
        pre.style.position = 'relative';
        pre.appendChild(button);
    });
}

// Newsletter form handling
function setupNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your backend
        console.log('Newsletter signup:', email);
        
        // Show success message
        const message = document.createElement('p');
        message.className = 'success-message';
        message.textContent = 'Thank you for subscribing!';
        form.appendChild(message);
        
        // Reset form
        form.reset();
        
        // Remove message after 3 seconds
        setTimeout(() => {
            message.remove();
        }, 3000);
    });
}

// Contact form handling
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        // Form will be submitted to Formspree
        // You can add additional validation here if needed
    });
}

// Search functionality (if search is implemented)
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        const posts = document.querySelectorAll('.post-list-item');
        
        posts.forEach(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            const excerpt = post.querySelector('.post-list-excerpt').textContent.toLowerCase();
            
            if (title.includes(query) || excerpt.includes(query)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
}

// Scroll to top button
function setupScrollToTop() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (!scrollButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    calculateReadingTime();
    generateTableOfContents();
    setupCodeBlocks();
    setupNewsletterForm();
    setupContactForm();
    setupSearch();
    setupScrollToTop();
});

// Accessibility: Skip to main content
document.addEventListener('DOMContentLoaded', function() {
    const skipLink = document.querySelector('.skip-to-main');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const main = document.querySelector('main');
            if (main) {
                main.focus();
                main.scrollIntoView();
            }
        });
    }
});

