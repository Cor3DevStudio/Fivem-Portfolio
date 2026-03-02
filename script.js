/**
 * Praryo-style portfolio – mobile menu toggle
 */
(function () {
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', !isOpen);
    menuToggle.setAttribute('aria-expanded', !isOpen);
    mobileMenu.setAttribute('aria-hidden', isOpen);
  });

  // Close menu when clicking a link (useful for single-page or same-origin)
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
})();
