// 
// Script for Community Layout
// See ../../AGENT.md for JS guidelines
// - Vanilla JavaScript only
// - Use const/let, meaningful names
// - Proper event handling

/**
 * Smooth scroll behavior for navigation links
 */
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only prevent default if it's an internal anchor link
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

/**
 * Add interactive feedback to buttons
 */
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Visual feedback
            button.style.opacity = '0.8';
            setTimeout(() => {
                button.style.opacity = '1';
            }, 200);
        });
    });
});

/**
 * Add intersection observer for fade-in animations on scroll
 */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature, .member-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
