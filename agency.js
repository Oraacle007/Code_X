/**
 * script.js
 * Complete JavaScript for the Design Agency site
 *
 * Handles:
 * - Mobile nav toggle (hamburger menu)
 * - Dropdown toggle for mobile
 * - Closing dropdown when clicking outside
 * - Resetting states on window resize
 * - Keyboard accessibility for dropdown
 * - Simple email subscribe handler
 */

/* ---------------------------
   Mobile navigation toggle
   --------------------------- */
window.toggleMobileMenu = function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  nav.classList.toggle('show');
};

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const navlinks = document.querySelectorAll('.navlink');
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = dropdown ? dropdown.querySelector('.dropdown-toggle') : null;
  const dropdownMenu = dropdown ? dropdown.querySelector('.dropdown-menu') : null;

  /* ---------------------------------------------------
     Close mobile menu when clicking a navigation link
     --------------------------------------------------- */
  if (nav && navlinks.length) {
    navlinks.forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('show')) {
          nav.classList.remove('show');
        }
      });
    });
  }

  /* -----------------------------------------
     Dropdown toggle (for mobile)
     ----------------------------------------- */
  if (dropdownToggle && dropdownMenu) {
    // Toggle dropdown on click (mobile only)
    dropdownToggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      }
    });

    // Keyboard accessibility for dropdown (mobile only)
    dropdownToggle.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && window.innerWidth <= 768) {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      }
    });

    // Close dropdown if clicking outside (mobile only)
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 768 && !dropdown.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  }

  /* -----------------------------------------
     Reset states on window resize
     ----------------------------------------- */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      if (dropdownMenu) dropdownMenu.style.display = '';
      if (nav && nav.classList.contains('show')) nav.classList.remove('show');
    }
  });

  /* -----------------------------------------
     Email subscribe handler
     ----------------------------------------- */
  const emailBox = document.querySelector('.email-input[contenteditable]');
  const submitBtn = document.querySelector('.submit-btn');

  if (emailBox && submitBtn) {
    submitBtn.addEventListener('click', function () {
      const email = emailBox.textContent.trim();

      if (!email) {
        alert('Please enter your email address.');
        return;
      }

      // Basic email regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Demo behavior: show thank you + clear input
      // Replace with API call for real-world usage
      emailBox.textContent = '';
      alert('Thank you for subscribing! We will keep you updated.');
    });
  }
});
