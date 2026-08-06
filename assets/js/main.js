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

  /* ---------- app comparison tabs ---------- */
  function setupAppTabs() {
    var groups = document.querySelectorAll('.app-tabs');

    groups.forEach(function (tabs) {
      var buttons = Array.prototype.slice.call(tabs.querySelectorAll('.app-tab'));
      if (!buttons.length) return;

      var wrap = tabs.closest('.app-tabs-wrap');
      var panelsWrap = wrap ? wrap.querySelector('.app-panels') : null;
      var resetTimer = null;

      var panels = buttons.map(function (btn) {
        return document.getElementById(btn.getAttribute('aria-controls'));
      });

      function activate(index) {
        var nextPanel = panels[index];
        if (!nextPanel) return;

        buttons.forEach(function (btn, i) {
          var active = i === index;
          btn.classList.toggle('is-active', active);
          btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        // Lock the wrapper to its current pixel height so the swap
        // below animates to the new height instead of jumping —
        // a 1-image tab and a 5-image tab shouldn't snap between
        // each other.
        if (panelsWrap && !reduceMotion.matches) {
          panelsWrap.style.height = panelsWrap.getBoundingClientRect().height + 'px';
        }

        panels.forEach(function (panel, i) {
          if (!panel) return;
          if (i === index) {
            panel.hidden = false;
            // force a reflow so the transition below plays from
            // the panel's hidden (opacity: 0) state.
            void panel.offsetWidth;
            panel.classList.add('is-active');
          } else {
            panel.classList.remove('is-active');
            panel.hidden = true;
          }
        });

        if (panelsWrap && !reduceMotion.matches) {
          var targetHeight = nextPanel.scrollHeight;
          requestAnimationFrame(function () {
            panelsWrap.style.height = targetHeight + 'px';
          });
          window.clearTimeout(resetTimer);
          resetTimer = window.setTimeout(function () {
            panelsWrap.style.height = 'auto';
          }, 320);
        }
      }

      buttons.forEach(function (btn, i) {
        btn.addEventListener('click', function () { activate(i); });
      });
    });
  }

  setupReveal();
  setupAppTabs();
})();
