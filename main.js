/**
 * Engler GmbH - Responsive Navigation Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('open');
            
            // Toggle classes
            navMenu.classList.toggle('open');
            
            // Update ARIA attributes for accessibility
            navToggle.setAttribute('aria-expanded', !isOpen);
        });

        // Close menu when clicking outside of it on mobile
        document.addEventListener('click', (event) => {
            const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

/**
 * Legacy popup window function from Namo WebEditor
 * Preserved for supporting the "Zertifikat" link mapping.
 */
window.na_open_window = function(name, url, left, top, width, height, toolbar, menubar, statusbar, personalbar, scrollbar) {
    const options = `left=${left},top=${top},width=${width},height=${height},toolbar=${toolbar},menubar=${menubar},status=${statusbar},scrollbars=${scrollbar}`;
    window.open(url, name, options);
};
