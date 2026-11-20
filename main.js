(function () {
  document.documentElement.classList.add("js");

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var tabs = document.getElementById("site-tabs");
  if (btn && tabs) {
    btn.addEventListener("click", function () {
      var open = tabs.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && tabs.classList.contains("is-open")) {
        tabs.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }

  // Handwriting writes itself in; tipped-in pictures settle onto the page
  var targets = document.querySelectorAll(".write-in, .settle");
  if ("IntersectionObserver" in window) {
    // Observe each target's parent: a clipped (hidden) element can't report itself visible.
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.__revealTargets.forEach(function (el) {
            var delay = parseInt(el.getAttribute("data-delay") || "0", 10);
            setTimeout(function () { el.classList.add("is-in"); }, delay);
          });
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) {
      var host = el.parentElement;
      if (!host.__revealTargets) { host.__revealTargets = []; io.observe(host); }
      host.__revealTargets.push(el);
    });
  } else {
    targets.forEach(function (el) { el.classList.add("is-in"); });
  }

  // The stitched spine of the spread you're reading lights up in marigold
  var spreads = document.querySelectorAll(".spread");
  if ("IntersectionObserver" in window && spreads.length) {
    var spineIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-current", entry.isIntersecting);
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    spreads.forEach(function (sp) { spineIO.observe(sp); });
  }

  // Contact form is visual only for now
  document.querySelectorAll("form[data-placeholder]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "This form isn't connected yet. Please email wardlow.becky@gmail.com in the meantime.";
      }
    });
  });
})();
