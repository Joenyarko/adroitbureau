/**
 * ADROIT BUREAU - NAVIGATION & ANIMATIONS
 * Interactive navigation and smooth scroll effects
 */

class Navigation {
    constructor() {
        this.header = document.querySelector('.header');
        this.mobileToggle = document.querySelector('.mobile-menu-toggle');
        this.headerNav = document.querySelector('.header-nav');
        this.navItems = document.querySelectorAll('.nav-item');
        this.backToTop = document.querySelector('.back-to-top');

        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupDropdowns();
        this.setupScrollEffects();
        this.setupBackToTop();
        this.setupSmoothScroll();
    }

    /**
     * Mobile menu toggle
     */
    setupMobileMenu() {
        if (!this.mobileToggle || !this.headerNav) return;

        this.mobileToggle.addEventListener('click', () => {
            this.mobileToggle.classList.toggle('active');
            this.headerNav.classList.toggle('active');
            document.body.style.overflow = this.headerNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking a link
        const navLinks = this.headerNav.querySelectorAll('.nav-link, .dropdown-item');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Don't close if it's a dropdown toggle
                if (!link.classList.contains('has-dropdown') || window.innerWidth > 767) {
                    this.mobileToggle.classList.remove('active');
                    this.headerNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    /**
     * Setup dropdown menus for mobile
     */
    setupDropdowns() {
        this.navItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            const dropdown = item.querySelector('.dropdown-menu');

            if (dropdown && window.innerWidth <= 767) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    item.classList.toggle('active');
                });
            }
        });

        // Re-setup on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 767) {
                this.navItems.forEach(item => item.classList.remove('active'));
            }
        });
    }

    /**
     * Header scroll effects
     */
    setupScrollEffects() {
        if (!this.header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add 'scrolled' class for glassmorphism effect
            if (currentScroll > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    /**
     * Back to top button
     */
    setupBackToTop() {
        if (!this.backToTop) return;

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.backToTop.classList.add('visible');
            } else {
                this.backToTop.classList.remove('visible');
            }
        });

        // Scroll to top on click
        this.backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Smooth scroll for anchor links
     */
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                // Skip if it's just "#"
                if (href === '#') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

/**
 * Scroll animations for elements
 */
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');

                    // Add stagger delay for child elements
                    const children = entry.target.querySelectorAll('.stagger-item');
                    children.forEach((child, index) => {
                        child.style.animationDelay = `${index * 0.1}s`;
                        child.classList.add('animate-in');
                    });
                }
            });
        }, this.observerOptions);

        // Observe all elements with animation classes
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });
    }
}

/**
 * Counter animation for statistics
 */
class CounterAnimation {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = parseInt(target);
        this.duration = duration;
        this.hasAnimated = false;
    }

    animate() {
        if (this.hasAnimated) return;
        this.hasAnimated = true;

        const start = 0;
        const increment = this.target / (this.duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= this.target) {
                this.element.textContent = this.target + '+';
                clearInterval(timer);
            } else {
                this.element.textContent = Math.floor(current);
            }
        }, 16);
    }
}

/**
 * Setup counter animations
 */
function setupCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    const counterAnimations = [];

    counters.forEach(counter => {
        const target = counter.dataset.counter;
        const animation = new CounterAnimation(counter, target);
        counterAnimations.push({ element: counter, animation });
    });

    // Trigger animation when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterAnim = counterAnimations.find(c => c.element === entry.target);
                if (counterAnim) {
                    counterAnim.animation.animate();
                }
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    new ScrollAnimations();
    setupCounters();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Navigation, ScrollAnimations, CounterAnimation };
}
