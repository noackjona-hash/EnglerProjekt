/**
 * Engler GmbH - Responsive Navigation Logic (Tailwind Compatible)
 */

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isHidden = navMenu.classList.contains('hidden');
            
            // Toggle tailwind hidden class
            navMenu.classList.toggle('hidden');
            
            // Update ARIA attributes for accessibility
            navToggle.setAttribute('aria-expanded', isHidden);
        });

        // Close menu when clicking outside of it on mobile
        document.addEventListener('click', (event) => {
            const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInside && !navMenu.classList.contains('hidden')) {
                navMenu.classList.add('hidden');
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
