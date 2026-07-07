/* ==========================================================================
   MAIN.JS · layout logic only. You should not need to edit this file.
   All text content lives in js/content.js.
   ========================================================================== */
(function () {
  "use strict";

  // Marks that JS is running, so CSS can safely hide .reveal elements
  // before they animate in. Without JS, everything stays visible.
  document.documentElement.classList.add("js");

  var C = window.CONTENT || {};
  var prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Small DOM helpers ---------- */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function tagRow(tags) {
    var row = el("ul", "tag-row");
    (tags || []).forEach(function (t) {
      row.appendChild(el("li", "tag", t));
    });
    return row;
  }

  /* ==========================================================
     Render: About
     ========================================================== */
  function renderAbout() {
    var wrap = document.getElementById("about-paragraphs");
    if (wrap && C.aboutParagraphs) {
      C.aboutParagraphs.forEach(function (text) {
        wrap.appendChild(el("p", null, text));
      });
    }

    var facts = document.getElementById("quick-facts");
    if (facts && C.quickFacts) {
      var dl = el("dl");
      C.quickFacts.forEach(function (f) {
        dl.appendChild(el("dt", null, f.label));
        dl.appendChild(el("dd", null, f.value));
      });
      facts.appendChild(dl);
    }
  }

  /* ==========================================================
     Render: Now (lab notebook)
     ========================================================== */
  function renderNow() {
    var now = C.now || {};
    var intro = document.getElementById("now-intro");
    if (intro && now.intro) intro.textContent = now.intro;

    var outro = document.getElementById("now-outro");
    if (outro && now.outro) outro.textContent = now.outro;

    var grid = document.getElementById("now-cards");
    if (!grid || !now.cards) return;

    now.cards.forEach(function (card, i) {
      var isFlagship = i === 0;
      var article = el(
        "article",
        "card now-card reveal" + (isFlagship ? " flagship" : "")
      );

      if (isFlagship) {
        article.appendChild(el("p", "flagship-flag", "Flagship build"));
      }

      var top = el("div", "card-top");
      top.appendChild(el("h3", null, card.title));
      if (card.status) {
        var badge = el(
          "span",
          "status tone-" + (card.statusTone === "teal" ? "teal" : "neutral"),
          card.status
        );
        top.appendChild(badge);
      }
      article.appendChild(top);

      if (card.problem) {
        article.appendChild(el("p", "field-label", "Problem"));
        article.appendChild(el("p", "field-text", card.problem));
      }

      if (card.built) {
        article.appendChild(el("p", "field-label", "What I built"));
        article.appendChild(el("p", "field-text built", card.built));
      }

      if (isFlagship && card.steps && card.steps.length) {
        article.appendChild(el("p", "field-label", "How it works"));
        var steps = el("ol", "steps");
        card.steps.forEach(function (s) {
          steps.appendChild(el("li", null, s));
        });
        article.appendChild(steps);
      }

      article.appendChild(tagRow(card.tags));
      grid.appendChild(article);
    });
  }

  /* ==========================================================
     Render: Experience timeline
     ========================================================== */
  function renderExperience() {
    var list = document.getElementById("experience-timeline");
    if (!list || !C.experience) return;

    C.experience.forEach(function (job) {
      var item = el(
        "li",
        "timeline-item reveal" + (job.current ? " current" : "")
      );

      var h3 = el("h3");
      h3.appendChild(document.createTextNode(job.role + " · "));
      h3.appendChild(el("span", "company", job.company));
      item.appendChild(h3);

      item.appendChild(
        el("p", "timeline-meta", job.period + " · " + job.location)
      );
      item.appendChild(el("p", "summary", job.summary));
      list.appendChild(item);
    });
  }

  /* ==========================================================
     Render: Projects
     ========================================================== */
  function renderProjects() {
    var grid = document.getElementById("projects-grid");
    if (!grid || !C.projects) return;

    C.projects.forEach(function (p) {
      var card = el("article", "card project-card reveal");
      card.appendChild(el("h3", null, p.title));
      card.appendChild(el("p", null, p.description));
      card.appendChild(tagRow(p.tags));
      grid.appendChild(card);
    });
  }

  /* ==========================================================
     Render: Skills
     ========================================================== */
  function renderSkills() {
    var wrap = document.getElementById("skills-groups");
    if (!wrap || !C.skills) return;

    C.skills.forEach(function (group) {
      var exploring = /exploring/i.test(group.group);
      var div = el("div", "skill-group reveal" + (exploring ? " exploring" : ""));
      div.appendChild(el("h3", null, group.group));
      div.appendChild(tagRow(group.items));
      wrap.appendChild(div);
    });
  }

  /* ==========================================================
     Render: Education & publications
     ========================================================== */
  function renderEducation() {
    var grid = document.getElementById("education-grid");
    if (!grid || !C.education) return;

    C.education.forEach(function (e) {
      var card = el("article", "card education-card reveal");
      card.appendChild(el("h3", null, e.degree));
      card.appendChild(el("p", "school", e.school));
      card.appendChild(el("p", "period", e.period));
      if (e.note) card.appendChild(el("p", "note", e.note));
      grid.appendChild(card);
    });
  }

  function renderPublications() {
    var wrap = document.getElementById("publications-list");
    if (!wrap || !C.publications) return;

    C.publications.forEach(function (p) {
      var block = el("article", "publication reveal");
      block.appendChild(el("h3", null, "“" + p.title + "”"));
      block.appendChild(el("p", "venue", p.venue));
      if (p.summary) block.appendChild(el("p", "pub-summary", p.summary));
      wrap.appendChild(block);
    });
  }

  /* ==========================================================
     Reveal on scroll · IntersectionObserver, fires once per element
     ========================================================== */
  function setupReveal() {
    var targets = document.querySelectorAll(".reveal");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach(function (t) { observer.observe(t); });
  }

  /* ==========================================================
     Mobile navigation
     ========================================================== */
  function setupNav() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }

    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the panel when a link inside it is used
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ==========================================================
     Hero background · a slow, low-opacity network of drifting
     nodes in the two accent colors. Purely decorative; skipped
     entirely for prefers-reduced-motion users.
     ========================================================== */
  function setupHeroCanvas() {
    var canvas = document.querySelector(".hero-canvas");
    if (!canvas || prefersReducedMotion) return;

    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var TEAL = "34, 211, 200";
    var GOLD = "201, 166, 107";
    var nodes = [];
    var width = 0;
    var height = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var LINK_DIST = 130;

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Node count scales with area; sparse on purpose.
      var count = Math.max(24, Math.min(70, Math.round((width * height) / 22000)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: 1 + Math.random() * 1.4,
          // Roughly 1 in 8 nodes is gold; the rest are teal.
          gold: Math.random() < 0.125
        });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);

      var i, j, a, b, dx, dy, dist;
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -20) a.x = width + 20;
        if (a.x > width + 20) a.x = -20;
        if (a.y < -20) a.y = height + 20;
        if (a.y > height + 20) a.y = -20;
      }

      ctx.lineWidth = 1;
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        for (j = i + 1; j < nodes.length; j++) {
          b = nodes[j];
          dx = a.x - b.x;
          dy = a.y - b.y;
          dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle =
              "rgba(" + TEAL + "," + (0.10 * (1 - dist / LINK_DIST)).toFixed(3) + ")";
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        ctx.fillStyle = a.gold
          ? "rgba(" + GOLD + ",0.55)"
          : "rgba(" + TEAL + ",0.45)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(frame);
    }

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });

    resize();
    requestAnimationFrame(frame);
  }

  /* ==========================================================
     Footer year
     ========================================================== */
  function setupFooter() {
    var year = document.getElementById("footer-year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ---------- Boot ---------- */
  renderAbout();
  renderNow();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
  renderPublications();
  setupReveal();
  setupNav();
  setupHeroCanvas();
  setupFooter();
})();
