// ==========================================
// 1. THEME MANAGEMENT (Light Mode as toggle on Dark Default)
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Default to Dark Mode unless Light Mode is stored
const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme === 'light') {
    htmlElement.classList.add('light-mode');
} else {
    htmlElement.classList.remove('light-mode');
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('light-mode');
    const newTheme = htmlElement.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const isLightMode = htmlElement.classList.contains('light-mode');
    themeToggle.innerHTML = isLightMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

// ==========================================
// 2. RESPONSIVE MENU CONTROLS
// ==========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
});

// Close drawer menu on click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Close drawer on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// ==========================================
// 3. ACTIVE NAVIGATION SCROLL TRACKER
// ==========================================
window.addEventListener('scroll', () => {
    let activeSectionId = 'home';
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Match active section when user has scrolled past 30% of it
        if (scrollPosition >= (sectionTop - 250)) {
            activeSectionId = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === activeSectionId) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// 4. PORTFOLIO METADATA STORE
// ==========================================
const portfolioData = {
    name: 'Nusi Archana Reddy',
    title: 'AI & Data Science Student & Full-Stack Developer',
    email: 'narchanareddy1@gmail.com',
    phone: '+91 8688775210',
    location: 'Andhra Pradesh, India',
    social: {
        github: 'https://github.com/nusiarchanareddy1',
        linkedin: 'https://www.linkedin.com/in/archana-reddy-nusi-67a166329'
    }
};

// ==========================================
// 5. CONTACT FORM & FEEDBACK SYSTEMS
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const subjectInput = contactForm.querySelector('input[name="subject"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');

        if (nameInput.value && emailInput.value && subjectInput.value && messageInput.value) {
            showNotification(`Message sent successfully! Thank you, ${nameInput.value}.`, 'success');
            contactForm.reset();
        } else {
            showNotification('Please fill out all required fields.', 'error');
        }
    });
}

// Notification Drawer System
function showNotification(message, type = 'success') {
    const existingNotif = document.querySelector('.custom-notification');
    if (existingNotif) {
        existingNotif.remove();
    }

    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    
    // Choose dynamic icons based on type
    const icon = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-circle"></i>';
    notification.innerHTML = `${icon} <span>${message}</span>`;
    
    // Apply styling directly for performance
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        padding: 16px 24px;
        border-radius: 8px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: #ffffff;
        font-weight: 600;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        animation: slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ==========================================
// 6. SCROLL INTERSECTION ANIMATOR
// ==========================================
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Apply entrance keyframe dynamically
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all major UI panels on scroll
document.querySelectorAll('section, .education-card, .skill-category, .project-showcase-card, .achievement-card, .cert-item-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    sectionObserver.observe(el);
});

// ==========================================
// 7. SCROLL-TO-TOP WIDGET
// ==========================================
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollTopButton.setAttribute('aria-label', 'Scroll back to top');
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 95px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 998;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: var(--transition);
    box-shadow: var(--shadow-lg);
`;

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopButton.style.display = 'flex';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopButton.addEventListener('mouseenter', () => {
    scrollTopButton.style.transform = 'translateY(-4px) scale(1.05)';
    scrollTopButton.style.borderColor = 'var(--primary)';
    scrollTopButton.style.color = 'var(--primary)';
});

scrollTopButton.style.transition = 'var(--transition)';
scrollTopButton.addEventListener('mouseleave', () => {
    scrollTopButton.style.transform = 'translateY(0) scale(1)';
    scrollTopButton.style.borderColor = 'var(--border-color)';
    scrollTopButton.style.color = 'var(--text-primary)';
});

// Inject Slide-in Keyframes into Head
const animStyles = document.createElement('style');
animStyles.textContent = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-40px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideOutLeft {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-40px);
        }
    }
`;
document.head.appendChild(animStyles);

// ==========================================
// 8. HERO 3D PARALLAX TILT EFFECT
// ==========================================
const heroIllustration = document.getElementById('heroIllustration');
const heroCard = document.getElementById('heroCard');
const heroProfile = document.getElementById('heroProfile');

if (heroIllustration && heroCard && heroProfile) {
    heroIllustration.addEventListener('mousemove', (e) => {
        const rect = heroIllustration.getBoundingClientRect();
        
        // Mouse position relative to center of the container (-0.5 to 0.5)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        // Tilt angles (max 15 degrees)
        const tiltX = y * -20;
        const tiltY = x * 20;
        
        // Apply different tilt factors for 3D parallax depth
        // Glass Card: tilts opposite, lower intensity
        heroCard.style.transform = `rotateX(${tiltX * 0.5}deg) rotateY(${tiltY * 0.5}deg) rotate(-3deg) translateZ(-20px)`;
        // Profile Frame: tilts more aggressively and translates slightly in the mouse direction
        heroProfile.style.transform = `rotateX(${tiltX * 1.2}deg) rotateY(${tiltY * 1.2}deg) rotate(3deg) translateZ(40px) translate(${x * 15}px, ${y * 15}px)`;
    });
    
    heroIllustration.addEventListener('mouseleave', () => {
        // Smoothly reset back to default states
        heroCard.style.transform = 'rotateX(0deg) rotateY(0deg) rotate(-3deg) translateZ(-20px)';
        heroProfile.style.transform = 'rotateX(0deg) rotateY(0deg) rotate(3deg) translateZ(30px)';
        
        heroCard.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        heroProfile.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    });
    
    // Clear transition on mouse enter to ensure immediate response
    heroIllustration.addEventListener('mouseenter', () => {
        heroCard.style.transition = 'none';
        heroProfile.style.transition = 'none';
    });
}

console.log('%cPortfolio configuration loaded successfully for ' + portfolioData.name, 'color: #8b5cf6; font-weight: bold; font-size: 14px;');
