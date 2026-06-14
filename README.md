# AI & Data Science Portfolio Website

A modern, responsive, and professional personal portfolio website designed specifically for AI & Data Science students and professionals. Built with HTML5, CSS3, and Vanilla JavaScript with dark/light mode support.

## Features

✨ **Key Features:**
- **Modern Design** - Clean, professional, and visually appealing
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between dark and light themes with local storage persistence
- **Smooth Animations** - Fade-in, slide-in, and bounce animations for enhanced UX
- **Complete Sections:**
  - Hero Section with call-to-action buttons
  - About Me with statistics
  - Education details
  - Skills & Technologies (organized by category)
  - Certifications & Courses
  - Featured Projects with descriptions and links
  - Internship/Experience timeline
  - Achievements & Awards
  - Contact Form with validation
  - Social media links
  - Footer with quick links

- **Interactive Elements:**
  - Mobile hamburger menu
  - Smooth scroll navigation
  - Active nav link highlighting
  - Contact form with validation
  - Scroll-to-top button
  - Theme persistence
  - Keyboard navigation support

- **Performance:**
  - Optimized for fast loading
  - Lazy loading ready
  - Mobile-first responsive design
  - Accessibility features included

## File Structure

```
portfolio/
├── index.html       # Main HTML file
├── styles.css       # CSS stylesheet with dark mode support
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

## Getting Started

### 1. Installation

No installation required! Simply download or clone the files to your local machine.

### 2. Setup

1. Extract the files to your desired location
2. Open `index.html` in your web browser
3. Or upload to a web hosting service (GitHub Pages, Netlify, Vercel, etc.)

### 3. Customization

Edit the following files to add your personal information:

#### In `index.html`:
- Line 42: Update the hero section title "Your Name"
- Line 43: Update the subtitle
- Lines 78-82: Update About Me section text
- Lines 102-108: Update education details
- Lines 135-151: Replace skill technologies and add your own
- Lines 166-221: Update certification details
- Lines 261-389: Update project descriptions and links
- Lines 421-461: Update internship/experience details
- Lines 493-551: Update achievements
- Lines 581-603: Update contact information and social links
- Lines 629-636: Update footer information

#### In `script.js` (Optional):
- Lines 244-255: Update `portfolioData` object with your information
- This data object can be used for dynamic content updates

### 4. Customization Examples

#### Change Your Name
```html
<!-- In index.html, line 42 -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
```

#### Add Your Projects
```html
<!-- Add new project card in projects section -->
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder">
            <i class="fas fa-icon-name"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Technology1</span>
            <span class="tag">Technology2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="#" class="project-link"><i class="fas fa-github"></i> GitHub</a>
        </div>
    </div>
</div>
```

#### Update Social Links
```html
<!-- In index.html, around line 600 -->
<a href="https://github.com/your-username" target="_blank">...</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">...</a>
```

## Color Scheme

### Primary Colors
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#ec4899` (Pink)
- **Success**: `#10b981` (Green)

### Light Mode
- Background: `#ffffff`
- Text: `#1e293b`
- Secondary Background: `#f8fafc`

### Dark Mode
- Background: `#0f172a`
- Text: `#f1f5f9`
- Secondary Background: `#1e293b`

## Modifying Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #ec4899;       /* Accent color */
    --success-color: #10b981;      /* Success color */
    --warning-color: #f59e0b;      /* Warning color */
    /* ... other colors ... */
}
```

## Adding New Sections

To add a new section:

1. Add to HTML (index.html):
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

2. Add to CSS (styles.css):
```css
.new-section {
    padding: 100px 20px;
    background: var(--bg-primary);
}

.new-section-content {
    /* Your styles */
}
```

3. Add to navigation (index.html):
```html
<a href="#new-section" class="nav-link">New Section</a>
```

## Deploying Your Portfolio

### GitHub Pages (Free)
1. Create a GitHub account and repository named `username.github.io`
2. Upload your files to the repository
3. Your portfolio will be live at `https://username.github.io`

### Netlify (Free with custom domain option)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Your portfolio will be live instantly

### Vercel (Free with custom domain option)
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

### Traditional Web Hosting
1. Contact your hosting provider
2. Upload files via FTP/SFTP or file manager
3. Configure your domain

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Explained

### Dark/Light Mode
- Automatically saved to browser's local storage
- Toggle button in top-right corner
- Smooth transitions between themes
- All colors automatically adjust

### Mobile Responsiveness
- Hamburger menu on devices < 768px
- Optimized touch targets
- Readable text sizes on all devices
- Properly scaled images

### Smooth Scrolling
- Native CSS `scroll-behavior: smooth`
- Keyboard-accessible navigation
- Active link highlighting during scroll

### Form Validation
- Email format validation
- Required field checking
- Success/error notifications
- Form auto-reset after submission

## Customizing Animations

Edit animation keyframes in `styles.css`:

```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## Performance Tips

1. **Optimize Images**: Compress project images to reduce file size
2. **Minify CSS/JS**: Use online tools to minify before production
3. **Lazy Loading**: Add `loading="lazy"` to image tags
4. **Caching**: Enable browser caching on your hosting

## SEO Optimization

The portfolio includes:
- Semantic HTML5 elements
- Meta tags for responsiveness
- Descriptive page title
- Proper heading hierarchy
- Social media meta tags (ready to add)

### Add OpenGraph Tags

Add to `<head>` in index.html:
```html
<meta property="og:title" content="Your Name - AI & Data Science Portfolio">
<meta property="og:description" content="Portfolio showcasing AI and Data Science projects">
<meta property="og:image" content="https://yoursite.com/image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

## Accessibility

The portfolio includes:
- Semantic HTML structure
- ARIA labels (ready to add)
- Keyboard navigation
- Skip-to-main-content link
- High contrast dark/light modes
- Properly sized touch targets

## Advanced Customization

### Adding Contact Form Backend
To make the contact form functional, integrate with:
- [EmailJS](https://www.emailjs.com/) - Send emails directly
- [Formspree](https://formspree.io/) - Email form submission
- [Basin](https://usebasin.com/) - Simple form backend
- Your own backend server

### Adding Analytics
Add Google Analytics by including in `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

## Troubleshooting

### Dark Mode Not Persisting
- Check if localStorage is enabled in browser
- Clear browser cache and try again

### Navigation Not Working
- Verify section IDs match the href values
- Check browser console for JavaScript errors

### Images Not Showing
- Ensure image paths are correct
- Use relative paths: `./images/image.jpg`

### Mobile Menu Issues
- Check viewport meta tag is present
- Verify hamburger icon displays correctly

## Browser DevTools Tips

1. **Test Responsiveness**: Press F12 → Toggle Device Toolbar (Ctrl+Shift+M)
2. **Check Performance**: DevTools → Lighthouse → Generate Report
3. **Debug JavaScript**: DevTools → Console tab

## Credits

- **Font Awesome**: Icons library
- **Google Fonts**: Typography
- **CSS Grid/Flexbox**: Layout
- **Vanilla JavaScript**: No dependencies!

## License

Feel free to use this portfolio template for personal use. Modify and customize as needed.

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the code comments
3. Test in different browsers
4. Check browser console for errors (F12)

## Future Enhancements

Potential additions:
- Blog section
- Case studies
- Video testimonials
- Newsletter signup
- Commenting system
- Project filtering
- Advanced animations (GSAP)
- Backend integration

## Contributing

Feel free to fork, modify, and improve this template!

---

**Last Updated**: 2024
**Version**: 1.0.0

Happy coding! 🚀
