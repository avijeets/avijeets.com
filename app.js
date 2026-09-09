(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* reveal cells and sections as they scroll into view */
  function setupReveal() {
    var items = document.querySelectorAll(".reveal");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    Array.prototype.forEach.call(items, function (el) {
      observer.observe(el);
    });
  }

  /* accordion cells in the past grid */
  function setupAccordions() {
    var triggers = document.querySelectorAll(".cell-trigger");

    Array.prototype.forEach.call(triggers, function (trigger) {
      trigger.addEventListener("click", function () {
        var cell = trigger.closest(".cell--panel");
        var open = trigger.getAttribute("aria-expanded") === "true";

        trigger.setAttribute("aria-expanded", open ? "false" : "true");
        cell.classList.toggle("is-open", !open);
      });
    });
  }

  setupReveal();
  setupAccordions();
})();
