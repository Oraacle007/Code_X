 function toggleMobileMenu() {
      const nav = document.getElementById('nav');
      nav.classList.toggle('show');
    }

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.navlink').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('nav').classList.remove('show');
      });
    });

    // Handle dropdown functionality
    document.addEventListener('DOMContentLoaded', function() {
      const dropdown = document.querySelector('.dropdown');
      const dropdownToggle = document.querySelector('.dropdown-toggle');
      const dropdownMenu = document.querySelector('.dropdown-menu');

      // For mobile, use click instead of hover
      if (window.innerWidth <= 768) {
        dropdownToggle.addEventListener('click', function(e) {
          e.preventDefault();
          dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
          if (!dropdown.contains(e.target)) {
            dropdownMenu.style.display = 'none';
          }
        });
      }
    });