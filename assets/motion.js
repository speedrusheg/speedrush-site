/* SPEED RUSH site motion. Classic script (no modules) so it also runs
   when the page is opened straight from disk (file://). */
(function () {
  "use strict";
  window.__motion = true;

  var root = document.documentElement;

  // Header gets a border once the page scrolls.
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var revealables = document.querySelectorAll(".reveal, .facts .row");

  if (!("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("in");
    });
    return;
  }

  // Scroll reveals: fire once, then stop watching.
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  revealables.forEach(function (el) {
    revealObserver.observe(el);
  });

  // Pause looping animations while their section is off screen.
  var loopObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle("paused", !entry.isIntersecting);
    });
  });

  document.querySelectorAll(".hero, .product").forEach(function (el) {
    loopObserver.observe(el);
  });

  root.classList.add("motion-ready");
})();
