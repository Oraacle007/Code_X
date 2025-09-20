// dropdown.js
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.dropdown-toggle');
  const menu = document.querySelector('.dropdown-menu');

  toggle.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent link navigation
    menu.classList.toggle('show');
  });
});