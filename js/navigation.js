/**
 * ADROIT BUREAU - MAIN NAVIGATION
 * Interactive navigation for Home and General pages
 */

class Navigation {
    constructor() {
        // Updated selectors to match index.html standard structure
        this.header = document.querySelector('.site-header');
        this.mobileToggle = document.querySelector('.mobile-toggle');
        this.headerNav = document.querySelector('.main-nav');
        this.navItems = document.querySelectorAll('.nav-dropdown'); // Standard uses .nav-dropdown now too
        this.backToTop = document.querySelector('.scroll-to-top') || document.querySelector('#scrollToTop');

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

        this.mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.mobileToggle.classList.toggle('active');
            this.headerNav.classList.toggle('active');
            document.body.style.overflow = this.headerNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking a link
        const navLinks = this.headerNav.querySelectorAll('a:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.mobileToggle.classList.remove('active');
                this.headerNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (this.headerNav.classList.contains('active') &&
                !this.headerNav.contains(e.target) &&
                !this.mobileToggle.contains(e.target)) {
                this.mobileToggle.classList.remove('active');
                this.headerNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    /**
     * Setup dropdown menus for mobile
     */
    setupDropdowns() {
        const navDropdowns = document.querySelectorAll('.nav-dropdown');

        navDropdowns.forEach(item => {
            const link = item.querySelector('.dropdown-toggle');

            if (link) {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 1024) {
                        e.preventDefault();
                        e.stopPropagation();

                        // Toggle logic
                        const isActive = item.classList.contains('active');
                        // Optional: Close others? 
                        navDropdowns.forEach(other => other.classList.remove('active'));

                        if (!isActive) item.classList.add('active');
                    }
                });
            }
        });

        // Re-setup on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                navDropdowns.forEach(item => item.classList.remove('active'));
                if (this.mobileToggle) this.mobileToggle.classList.remove('active');
                if (this.headerNav) this.headerNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    /**
     * Header scroll effects
     */
    setupScrollEffects() {
        if (!this.header) return;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        });
    }

    setupBackToTop() {
        if (!this.backToTop) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                this.backToTop.classList.add('visible'); // Standardize on 'visible' class
            } else {
                this.backToTop.classList.remove('visible');
            }
        });

        this.backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#' || !targetId) return;

                try {
                    const target = document.querySelector(targetId);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                } catch (err) {
                    // Ignore invalid selector errors
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});
