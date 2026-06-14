# 🚀 Quick Start Guide

## Get Your Portfolio Live in 5 Minutes!

### Step 1: Open & Preview (1 minute)
1. Double-click `index.html`
2. Your portfolio opens in your browser
3. Test dark/light mode (button in top-right)
4. Test mobile view (F12 → Device Toggle)

### Step 2: Customize Your Info (2 minutes)
Open `index.html` in any text editor and find/replace:

| Find This | Replace With |
|-----------|--------------|
| `Your Name` | Your actual name |
| `your.email@example.com` | Your real email |
| `+1 (555) 123-4567` | Your phone |
| `San Francisco, CA, USA` | Your city |
| `https://github.com` | Your GitHub |
| `https://linkedin.com` | Your LinkedIn |

### Step 3: Add Your Projects (2 minutes)
Find the Projects section and copy this template:

```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder"><i class="fas fa-icon"></i></div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description in 1-2 sentences</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
            <span class="tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="your-link" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
            <a href="github-link" class="project-link"><i class="fas fa-github"></i> GitHub</a>
        </div>
    </div>
</div>
```

## Deploy to Web (Choose One)

### 🟦 GitHub Pages (Easiest)
1. Create GitHub account
2. Create repo named `username.github.io`
3. Upload 3 files (index.html, styles.css, script.js)
4. Done! Visit `https://username.github.io`

### 🟪 Netlify (Free, Fast)
1. Go to [netlify.com](https://netlify.com)
2. Click "Deploy new site"
3. Drag & drop your portfolio folder
4. Done!

### ⚪ Vercel (Free, Very Fast)
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Upload folder
4. Done!

## Essential Customization

### Your Information
- Line 42: Your name in hero
- Line 102: Your education
- Line 135-151: Your skills
- Line 581-603: Your contact info
- Line 600: Your social links

### About Section
- Update your bio (2-3 sentences)
- Update statistics (projects, years, etc.)

### Projects Section  
- Remove example projects
- Add your 3-6 best projects
- Include: title, description, technologies, links

### Quick CSS Changes
- **Change colors**: Edit lines 2-12 in `styles.css`
- **Change fonts**: Edit line 29 in `styles.css`

## Testing Checklist

Before publishing:
- [ ] All links work
- [ ] Mobile view looks good (F12)
- [ ] Dark/light mode works
- [ ] No typos
- [ ] Contact form works
- [ ] Social links correct
- [ ] Images load (if added)

## File Locations

| File | What to Edit |
|------|-------------|
| `index.html` | Content (text, links, structure) |
| `styles.css` | Colors, fonts, sizes, animations |
| `script.js` | Advanced - usually don't need to change |

## Color Quick Change

In `styles.css`, find line 2-12 and change colors:
```css
:root {
    --primary-color: #6366f1;      ← Change this to any color
    --secondary-color: #8b5cf6;    ← And this
}
```

Popular colors:
- Tech Blue: `#0066cc`
- Green: `#10b981`
- Red: `#dc2626`
- Orange: `#ea580c`

## Icon Reference

Common icons to use:
- `fa-brain` - AI
- `fa-chart-line` - Analytics
- `fa-code` - Code
- `fa-github` - GitHub
- `fa-linkedin` - LinkedIn

[View all icons](https://fontawesome.com/icons)

## Social Media Links

Replace in index.html:
```html
<!-- GitHub -->
href="https://github.com/your-username"

<!-- LinkedIn -->
href="https://linkedin.com/in/your-profile"

<!-- Twitter -->
href="https://twitter.com/your-handle"

<!-- Kaggle -->
href="https://kaggle.com/your-username"
```

## Mobile Test

Quick mobile test:
1. Press F12 in browser
2. Click device icon (or Ctrl+Shift+M)
3. Try different phones
4. Check if text is readable
5. Check if buttons are clickable

## Common Issues & Fixes

### Dark mode not saving?
→ Clear browser cache → Try again

### Links not working?
→ Check URLs are correct → Check for typos

### Mobile looks broken?
→ Press F12 → Check device toggle → Adjust sizes

### Contact form not working?
→ It's demo only → Add backend service (EmailJS, Formspree)

## Next Steps After Publishing

1. ✅ Test on real phone
2. ✅ Share with friends
3. ✅ Get feedback
4. ✅ Add more projects as you build them
5. ✅ Keep portfolio updated

## Want More Features?

See `README.md` for:
- How to add contact form backend
- How to add analytics
- How to add more sections
- How to optimize performance

## Deployment Comparison

| Service | Best For | Time | Cost |
|---------|----------|------|------|
| GitHub Pages | Static sites | Fast | Free |
| Netlify | Quick setup | Very fast | Free* |
| Vercel | Modern web | Very fast | Free* |

*Free tier available

## Files You Need

✅ `index.html` - Main file (required)
✅ `styles.css` - Styling (required)
✅ `script.js` - Features (required)
❌ README.md - Documentation (optional, delete before upload)
❌ CUSTOMIZATION.md - Guide (optional, delete before upload)

## Commands for GitHub Pages

If you prefer terminal:
```bash
# Create repo and push
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/username/username.github.io
git push -u origin main
```

## Before You Share

📋 Checklist:
- ✅ Name updated
- ✅ Email updated
- ✅ Projects added
- ✅ Skills updated
- ✅ Links working
- ✅ Mobile tested
- ✅ No typos

## Tips for Success

1. **Keep it updated** - Add projects as you build them
2. **Write good descriptions** - Explain what you built and learned
3. **Show your work** - Include links to GitHub and live demos
4. **Stay professional** - Review before publishing
5. **Get feedback** - Ask friends/mentors to review

## Quick Customization Commands

Want to search for text to update? Open terminal in folder:

**Windows:**
```
Ctrl+H in VS Code to find and replace
```

**Mac/Linux:**
```
Cmd+Shift+H in VS Code
```

## Resources

- [Customization Guide](./CUSTOMIZATION.md) - Detailed customization
- [Complete README](./README.md) - Full documentation
- [Font Awesome Icons](https://fontawesome.com/icons) - Icon library
- [Color Picker](https://colordot.io) - Find colors
- [GitHub Pages Docs](https://pages.github.com) - GitHub Pages help

## Emergency Help

**Issue: Can't see changes?**
→ Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Issue: File won't open?**
→ Try different text editor (VS Code recommended)

**Issue: Site looks different on mobile?**
→ Press F12 → Click device toggle → Adjust if needed

---

## Ready? Let's Go! 🚀

1. Open `index.html` - see your portfolio
2. Edit with your info
3. Test on mobile
4. Deploy to GitHub Pages / Netlify / Vercel
5. Share with everyone!

**Estimated time to publish: 15-30 minutes**

Good luck! You've got this! 💪

---

For detailed help, see:
- `README.md` - Complete guide
- `CUSTOMIZATION.md` - How to customize
- `FILES-SUMMARY.md` - What each file does
