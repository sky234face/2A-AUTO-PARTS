document.addEventListener('DOMContentLoaded', () => {
  // Mobile Sidebar Drawer Logic
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');
  const menuIcon = document.querySelector('.menu-icon');

  function toggleMenu() {
    const isOpen = nav.classList.toggle('mobile-open');
    overlay.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', isOpen);

    // Swap Hamburger to 'X' Close button dynamically
    if (isOpen) {
      menuIcon.innerHTML = `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`;
    } else {
      menuIcon.innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
    }
  }

  // Open/Close via Toggle Button
  toggle?.addEventListener('click', toggleMenu);

  // Close when clicking the dark overlay
  overlay?.addEventListener('click', () => {
    if (nav.classList.contains('mobile-open')) {
      toggleMenu();
    }
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('mobile-open')) {
        toggleMenu();
      }
    });
  });

  // Smooth Scroll Reveal Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});