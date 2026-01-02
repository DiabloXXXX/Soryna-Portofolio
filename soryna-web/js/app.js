document.addEventListener('DOMContentLoaded', function () {

    /* ---------------------------------------------------
       SMOOTH SCROLL
    --------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ---------------------------------------------------
       NAVBAR SCROLL EFFECT
    --------------------------------------------------- */
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    /* ---------------------------------------------------
       MOBILE MENU
    --------------------------------------------------- */
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    /* ---------------------------------------------------
       FADE-IN ANIMATION (INTERSECTION OBSERVER)
    --------------------------------------------------- */
    const fadeElements = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    fadeElements.forEach(element => appearOnScroll.observe(element));

    /* ---------------------------------------------------
       Dead Code Removed (Robot & Chatbot)
    --------------------------------------------------- */

    /* ---------------------------------------------------
       PAGE TRANSITION
    --------------------------------------------------- */
    const links = document.querySelectorAll('a:not([target="_blank"])');
    links.forEach(link => {
        if (link.href && link.href.includes(window.location.hostname)) {
            link.addEventListener('click', function (e) {
                // Allow default behavior for hash links to let smooth scroll work
                if (this.getAttribute('href').startsWith('#')) return;

                e.preventDefault();
                const href = this.getAttribute('href');

                document.body.classList.add('page-transition');
                setTimeout(() => window.location.href = href, 500);
            });
        }
    });

    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            document.body.classList.remove('page-transition');
        }
    });

    /* ---------------------------------------------------
       PACKAGE DETAIL SWITCHER
    --------------------------------------------------- */
    const packageButtons = document.querySelectorAll('.package-button');
    packageButtons.forEach(button => {
        button.addEventListener('click', function () {
            const packageId = this.getAttribute('data-package');
            const packageDetails = document.getElementById(`package-${packageId}`);

            document.querySelectorAll('.package-button').forEach(btn => {
                btn.classList.remove('bg-purple-600', 'text-white');
                btn.classList.add('bg-white', 'text-purple-600', 'border', 'border-purple-600');
            });

            this.classList.remove('bg-white', 'text-purple-600', 'border', 'border-purple-600');
            this.classList.add('bg-purple-600', 'text-white');

            document.querySelectorAll('.package-details').forEach(detail => {
                detail.classList.add('hidden');
            });

            packageDetails.classList.remove('hidden');
            packageDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });


    /* ---------------------------------------------------
       CARD HOVER EFFECT
    --------------------------------------------------- */
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });


    /* ---------------------------------------------------
       CTA BUTTON ANIMATION
    --------------------------------------------------- */
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundPosition = 'right center';
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundPosition = 'left center';
        });
    });

});


/* ---------------------------------------------------
   AOS INIT
--------------------------------------------------- */
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});
