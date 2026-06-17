/* ===== Inline Group — interactions + i18n ===== */
(function () {
  "use strict";

  var STORE = "inline-lang";
  var html = document.documentElement;

  /* ---------- i18n ---------- */
  function applyLang(lang) {
    var dict = (window.I18N && window.I18N[lang]) || window.I18N.en;
    var year = new Date().getFullYear();

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v.replace("{year}", year);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-html")];
      if (v != null) el.innerHTML = v;
    });

    html.setAttribute("lang", lang === "sc" ? "zh-Hans" : lang === "tc" ? "zh-Hant" : "en");
    html.setAttribute("data-lang", lang);

    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }

  var saved = "en";
  try { saved = localStorage.getItem(STORE) || "en"; } catch (e) {}
  applyLang(saved);

  var langBar = document.getElementById("lang");
  if (langBar) {
    langBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".lang__btn");
      if (btn) applyLang(btn.getAttribute("data-lang"));
    });
  }

  /* ---------- Sticky nav ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("burger");
  var links = document.getElementById("navlinks");
  if (burger && links) {
    burger.addEventListener("click", function () { links.classList.toggle("open"); });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* ---------- Scroll reveal + counters ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i % 6) * 60 + "ms";
          entry.target.classList.add("in");
          io.unobserve(entry.target);
          maybeCount(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  function maybeCount(scope) {
    scope.querySelectorAll("[data-count]").forEach(function (el) {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      var target = parseInt(el.dataset.count, 10);
      var suffix = el.dataset.suffix || "";
      var start = null, dur = 1400;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
    });
  }
})();
