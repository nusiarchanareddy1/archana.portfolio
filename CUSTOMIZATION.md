# Quick Customization Guide

## Essential Updates (Required)

### 1. Update Personal Information

#### Hero Section (index.html - Lines 42-44)
```html
<!-- Change from: -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">AI & Data Science Enthusiast | Machine Learning Developer | Data Analyst</p>
<p class="hero-description">Transforming complex data into actionable insights using cutting-edge AI and ML technologies</p>

<!-- To your info: -->
<h1 class="hero-title">Hi, I'm <span class="highlight">John Doe</span></h1>
<p class="hero-subtitle">ML Engineer | Data Science Student | AI Enthusiast</p>
<p class="hero-description">Building intelligent systems that solve real-world problems</p>
```

#### Contact Information (index.html - Lines 581-603)
```html
<!-- Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Phone -->
<p>+1 (555) 123-4567</p>

<!-- Location -->
<p>San Francisco, CA, USA</p>

<!-- Social Links -->
<a href="https://github.com/your-username" target="_blank">...</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">...</a>
```

### 2. Update Education (index.html - Lines 102-120)

```html
<!-- University Details -->
<h3>B.Tech in Computer Science & Engineering</h3>
<p class="education-university">University Name</p>
<p class="education-period">2020 - 2024</p>

<!-- University Stats -->
<p><strong>CGPA:</strong> 8.5/10</p>
<p><strong>Specialization:</strong> Artificial Intelligence & Machine Learning</p>
```

### 3. Update Skills (index.html - Lines 135-151)

```html
<!-- Add/Remove skill tags as needed -->
<div class="skill-category">
    <h3><i class="fas fa-python"></i> Programming Languages</h3>
    <div class="skill-list">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">R</span>
        <span class="skill-tag">Your Skill Here</span>
    </div>
</div>
```

### 4. Add Your Projects (index.html - Lines 261-389)

```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder">
            <i class="fas fa-your-icon"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Project description - what it does, how you built it, what you learned</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
            <span class="tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="https://your-project-link.com" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="https://github.com/username/project" class="project-link">
                <i class="fas fa-github"></i> GitHub
            </a>
        </div>
    </div>
</div>
```

## Optional Customizations

### Change Color Scheme

Edit `styles.css` (Lines 2-12):

```css
:root {
    --primary-color: #6366f1;      /* Main color - change this */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #ec4899;       /* Accent color */
}
```

Popular color combinations:
- **Tech Blue**: Primary: `#0066cc`, Secondary: `#00a3e0`
- **Green Energy**: Primary: `#10b981`, Secondary: `#34d399`
- **Red Bold**: Primary: `#dc2626`, Secondary: `#f87171`
- **Orange Warm**: Primary: `#ea580c`, Secondary: `#f97316`

### Customize Font

Edit `styles.css` (Line 29):

```css
body {
    font-family: 'Your Font Name', 'Fallback Font', sans-serif;
}
```

Google Fonts examples:
- `'Poppins', sans-serif`
- `'Inter', sans-serif`
- `'Montserrat', sans-serif`
- `'IBM Plex Mono', monospace` (for code-heavy portfolio)

### Add Hero Image

Replace the floating card with an image:

```html
<!-- In index.html hero section -->
<div class="hero-image">
    <img src="./your-photo.jpg" alt="Profile" style="
        width: 300px;
        height: 300px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        object-fit: cover;
    ">
</div>
```

### Modify Section Padding

Edit `styles.css` for any section:

```css
.projects {
    padding: 100px 20px;  /* Increase or decrease as needed */
    background: var(--bg-secondary);
}
```

## Content Tips

### Writing Project Descriptions

Good format:
```
"Built a real-time Stock Price Prediction model using LSTM neural networks. 
Achieved 92% accuracy by engineering 50+ features from historical data. 
Deployed using FastAPI with 10K+ daily users."
```

### Updating Statistics (About Section)

```html
<div class="about-stats">
    <div class="stat">
        <h3>15+</h3>           <!-- Your number -->
        <p>Projects Completed</p> <!-- Your metric -->
    </div>
    ...
</div>
```

### Achievement Card Examples

```html
<div class="achievement-card">
    <div class="achievement-icon">
        <i class="fas fa-trophy"></i>  <!-- Choose appropriate icon -->
    </div>
    <h3>Achievement Title</h3>
    <p>Detailed description of your achievement</p>
    <span class="achievement-date">2024</span>
</div>
```

## Font Awesome Icons Reference

Common icons for your portfolio:

**Tech Icons:**
- `fa-brain` - AI/ML
- `fa-chart-line` - Analytics
- `fa-code` - Programming
- `fa-database` - Databases
- `fa-python` - Python
- `fa-server` - Backend

**Social Icons:**
- `fa-github` - GitHub
- `fa-linkedin` - LinkedIn
- `fa-twitter` - Twitter
- `fa-kaggle` - Kaggle

**Action Icons:**
- `fa-external-link-alt` - External link
- `fa-envelope` - Email
- `fa-phone` - Phone
- `fa-map-marker-alt` - Location

View all icons at: [fontawesome.com/icons](https://fontawesome.com/icons)

## Section Addition Example

Want to add a "Blog" or "Publications" section?

### 1. Add to Navigation (index.html)
```html
<a href="#blog" class="nav-link">Blog</a>
```

### 2. Add Section HTML
```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Blog Posts</h2>
        <!-- Your content -->
    </div>
</section>
```

### 3. Add CSS (styles.css)
```css
.blog {
    padding: 100px 20px;
    background: var(--bg-primary);
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.blog-card {
    background: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px var(--shadow-color);
}
```

## Mobile Optimization Tips

### Test on Mobile
1. Open DevTools (F12)
2. Click Device Toggle (Ctrl+Shift+M)
3. Test at different screen sizes

### Common Mobile Issues
- Font too small? Increase in @media queries
- Images too wide? Add `max-width: 100%`
- Touch targets too small? Make them at least 44x44px

## Performance Optimization

### 1. Compress Images
Use tools like:
- [TinyPNG.com](https://tinypng.com)
- [Optimizilla.com](https://optimizilla.com)
- ImageMagick (command line)

### 2. Minify CSS/JS
Tools:
- [CSS Minifier](https://cssminifier.com)
- [JS Minifier](https://jsminifier.com)

### 3. Reduce Animations
If site feels slow:
```css
/* Reduce animation duration */
--transition: all 0.2s ease;  /* Changed from 0.3s */
```

## Before Publishing Checklist

- [ ] Update all personal information
- [ ] Add your projects with descriptions
- [ ] Update education details
- [ ] Add your skills
- [ ] Update contact email
- [ ] Update social media links
- [ ] Test on mobile (DevTools)
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test dark/light mode toggle
- [ ] Check spelling and grammar
- [ ] Load images locally (no placeholder icons)
- [ ] Update page title in HTML `<title>` tag
- [ ] Add favicon (optional)

## Deploying to GitHub Pages

### Quick Deploy Steps:
1. Create repo named `username.github.io`
2. Upload files (index.html, styles.css, script.js)
3. Done! Visit `https://username.github.io`

### With Custom Domain:
1. Add CNAME file with your domain
2. Configure DNS settings
3. Wait for DNS to propagate

## Deployment Platform Comparisons

| Platform | Best For | Speed | Free |
|----------|----------|-------|------|
| GitHub Pages | Static sites | Fast | Yes |
| Netlify | Modern web | Very Fast | Yes* |
| Vercel | Next.js, React | Very Fast | Yes* |
| Render | Full-stack | Good | Yes* |

*Free tier available with limited features

## Future Enhancements

Ideas to implement later:
- [ ] Add blog section with articles
- [ ] Add testimonials carousel
- [ ] Add "Skills Proficiency" bars with animations
- [ ] Add newsletter signup form
- [ ] Add video introduction
- [ ] Add case studies with images
- [ ] Add download resume button
- [ ] Add contact form backend
- [ ] Add animations library (GSAP)
- [ ] Add PWA (Progressive Web App)

## Common Customizations Code Snippets

### Hide a Section Temporarily
```css
#section-name {
    display: none;
}
```

### Change Section Background Color
```css
.projects {
    background: #your-color !important;
}
```

### Make Text Larger
```css
body {
    font-size: 18px;  /* Increase from default */
}
```

### Add Spacing Between Sections
```css
section {
    margin-top: 50px;
    margin-bottom: 50px;
}
```

---

**Pro Tips:**
1. Always keep a backup of original files
2. Test changes in a browser immediately
3. Use browser DevTools console to debug
4. Keep portfolio updated with recent projects
5. Make sure links are working before publishing

Good luck with your portfolio! 🚀
