document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Mobile dropdown toggles
  document.querySelectorAll('.nav-dropdown > .nav-parent').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        const parent = btn.closest('.nav-dropdown');
        parent.classList.toggle('open');
      }
    });
  });
});
