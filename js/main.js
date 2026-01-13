// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Animated counter for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const target = parseInt(statNumber.getAttribute('data-target'));
            animateCounter(statNumber, target);
            statsObserver.unobserve(statNumber);
        }
    });
}, { threshold: 0.5 });

// Observe all stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        // Here you would normally send the form data to a server
        // For now, we'll just show a success message
        alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
        contactForm.reset();
    });
}

// Add fade-in animation on scroll
const fadeElements = document.querySelectorAll('.app-card, .about-text, .contact-info');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// --- Dynamic App Loading ---
const appsGrid = document.getElementById('appsGrid');

const renderApps = (apps) => {
    if (!appsGrid) return;
    appsGrid.innerHTML = '';

    apps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = `app-card ${app.featured ? 'featured' : ''}`;
        
        const badgeHtml = app.badge ? `<div class="app-badge">${app.badge}</div>` : '';
        const featuresHtml = app.features.map(f => `<span class="feature-tag">${f}</span>`).join('');
        const techHtml = app.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');

        appCard.innerHTML = `
            ${badgeHtml}
            <div class="app-icon">${app.icon}</div>
            <h3 class="app-title">${app.title}</h3>
            <p class="app-description">${app.description}</p>
            <div class="app-features">
                ${featuresHtml}
            </div>
            <div class="app-tech">
                ${techHtml}
            </div>
            <div class="app-actions">
                <a href="${app.playStoreUrl}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="btn btn-primary">
                    📱 Play Store'da İndir
                </a>
            </div>
        `;

        appsGrid.appendChild(appCard);

        // Re-attach interactions and observer for this card
        appCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        appCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        appCard.style.opacity = '0';
        appCard.style.transform = 'translateY(20px)';
        appCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(appCard);
    });
};

const loadApps = async () => {
    try {
        const response = await fetch('data/apps.json');
        if (!response.ok) throw new Error('Veri yüklenemedi');
        const apps = await response.json();
        renderApps(apps);
    } catch (error) {
        console.error('Hata:', error);
        if (appsGrid) {
            appsGrid.innerHTML = '<p class="error-message">Uygulamalar yüklenirken bir hata oluştu.</p>';
        }
    }
};

// Initialize app loading
document.addEventListener('DOMContentLoaded', () => {
    loadApps();
});

// Console message
console.log('%c🚀 App Portfolio Website', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cModern mobil uygulamalar geliştiriyoruz!', 'color: #6b7280; font-size: 14px;');




