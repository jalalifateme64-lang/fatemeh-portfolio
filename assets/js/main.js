/* Fatemeh Jalali — portfolio
   Shared behaviour. Every page loads this file with `defer`.
   Progressive enhancement only: the site is fully readable without it. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- scroll reveal ---------- */
  function setupReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    // No IntersectionObserver, or the visitor asked for less motion:
    // show everything immediately rather than leaving it invisible.
    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach(function (el) { io.observe(el); });
  }

  setupReveal();
})();
