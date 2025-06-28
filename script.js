// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  const links = document.querySelectorAll('nav a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Optional: close dropdowns on click outside
  document.addEventListener('click', function (e) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(drop => {
      if (!drop.parentElement.contains(e.target)) {
        drop.style.display = 'none';
      }
    });
  });

  // Show dropdowns on hover (fallback for mobile)
  const dropdownParents = document.querySelectorAll('.dropdown');
  dropdownParents.forEach(parent => {
    parent.addEventListener('mouseenter', () => {
      const content = parent.querySelector('.dropdown-content');
      if (content) content.style.display = 'block';
    });

    parent.addEventListener('mouseleave', () => {
      const content = parent.querySelector('.dropdown-content');
      if (content) content.style.display = 'none';
    });
  });
});