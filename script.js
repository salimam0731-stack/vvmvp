/* script.js */

// Wait for the HTML document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');

            if (mainNav.classList.contains('active')) {
                menuToggle.innerHTML = '&#10005;';
            } else {
                menuToggle.innerHTML = '&#9776;';
            }
        });
    }

    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                if (menuToggle) menuToggle.innerHTML = '&#9776;';
            }
        });
    });

    // --- 2. Hero image slideshow ---
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 1) {
        let activeIndex = 0;

        setInterval(() => {
            slides[activeIndex].classList.remove('active');
            activeIndex = (activeIndex + 1) % slides.length;
            slides[activeIndex].classList.add('active');
        }, 4000);
    }

});