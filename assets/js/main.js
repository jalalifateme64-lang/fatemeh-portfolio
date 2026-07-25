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

  /* ---------- axis tick marks (data-axis signature) ---------- */
  var TICK_SPACING = 90;

  function drawTicks() {
    document.querySelectorAll('.axis-ticks').forEach(function (track) {
      track.textContent = ''; // redraw from scratch so resizing can't stack ticks
      var count = Math.floor(track.offsetWidth / TICK_SPACING);
      for (var i = 0; i <= count; i++) {
        var tick = document.createElement('span');
        tick.style.left = (i * TICK_SPACING) + 'px';
        track.appendChild(tick);
      }
    });
  }

  function setupTicks() {
    drawTicks();

    var frame = null;
    window.addEventListener('resize', function () {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(drawTicks);
    });
  }

  setupReveal();
  setupTicks();
})();
