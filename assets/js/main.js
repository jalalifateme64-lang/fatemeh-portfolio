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

  /* ---------- competitor screenshot lightbox ---------- */
  function setupCompareLightbox() {
    var lightbox = document.getElementById('app-lightbox');
    if (!lightbox) return;

    var thumbs = Array.prototype.slice.call(document.querySelectorAll('.compare-thumb'));
    if (!thumbs.length) return;

    var galleries = Array.prototype.slice.call(lightbox.querySelectorAll('.shot-grid'));
    var titleEl = lightbox.querySelector('.lightbox-title');
    var closeEls = lightbox.querySelectorAll('[data-lightbox-close]');
    var lastFocused = null;

    function appName(btn) {
      var row = btn.closest('tr');
      var nameEl = row ? row.querySelector('.compare-app') : null;
      return nameEl ? nameEl.textContent : '';
    }

    function open(key, btn) {
      galleries.forEach(function (g) {
        g.hidden = g.getAttribute('data-gallery-panel') !== key;
      });
      if (titleEl) titleEl.textContent = appName(btn);
      lastFocused = document.activeElement;
      lightbox.hidden = false;
      document.body.classList.add('lightbox-open');
      var closeBtn = lightbox.querySelector('.lightbox-close');
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      if (lightbox.hidden) return;
      lightbox.hidden = true;
      document.body.classList.remove('lightbox-open');
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }

    thumbs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        open(btn.getAttribute('data-gallery'), btn);
      });
    });

    closeEls.forEach(function (el) {
      el.addEventListener('click', close);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  setupReveal();
  setupCompareLightbox();
})();
