/* HELLIOS portfolio catalog: public read-only renderer.
   New case studies are published only after their GitHub changes are approved. */
(() => {
  "use strict";
  const grid = document.querySelector("#work .project-grid");
  if (!grid) return;

  const validAsset = (value) => typeof value === "string" &&
    (/^assets\/[\w\u0400-\u04FF\s().,%+-]+\.(?:png|jpe?g|webp|svg)$/i.test(value) ||
     /^https:\/\/[\w.-]+\/[\w\-./%?=&]+$/i.test(value));
  const safeText = (value, max = 400) => typeof value === "string" ? value.trim().slice(0, max) : "";
  const create = (tag, className, value) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value) el.textContent = value;
    return el;
  };
  const render = (item, index) => {
    if (!item || item.published !== true || !safeText(item.title, 100) ||
        !safeText(item.description, 1200)) return;
    const article = create("article", "project glass catalog-project");
    const meta = create("div", "project-meta mono");
    meta.append(create("span", "", safeText(item.category, 80) || "SOFTWARE PROJECT"));
    meta.append(create("span", "status" + (item.status === "working" ? " live" : ""),
      ({ working: "WORKING PROJECT", prototype: "PROTOTYPE", demo: "DEMO", in_progress: "IN PROGRESS" })[item.status] || "CASE STUDY"));
    article.append(meta);
    if (validAsset(item.image)) {
      const figure = create("div", "media-wrap");
      const img = create("img");
      img.src = item.image;
      img.alt = safeText(item.imageAlt, 180) || (safeText(item.title, 100) + " project cover");
      img.loading = "lazy";
      img.decoding = "async";
      figure.append(img);
      article.append(figure);
    }
    const body = create("div", "project-content");
    body.append(create("h3", "", safeText(item.title, 100)));
    body.append(create("p", "", safeText(item.description, 1200)));
    const tags = create("div", "tags");
    (Array.isArray(item.tags) ? item.tags.slice(0, 8) : []).forEach(t => {
      if (safeText(t, 40)) tags.append(create("span", "", safeText(t, 40)));
    });
    body.append(tags);
    if (typeof item.link === "string" && /^https:\/\/[\w.-]+(?:\/[\w\-./%?=&]*)?$/i.test(item.link)) {
      const link = create("a", "catalog-link", "Explore project ↗");
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      body.append(link);
    }
    article.append(body);
    grid.append(article);
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      article.classList.add("reveal");
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          article.classList.add("visible");
          observer.disconnect();
        }
      }, { threshold: .07 });
      observer.observe(article);
    }
  };
  fetch("data/projects.json", { cache: "no-cache" })
    .then(r => { if (!r.ok) throw new Error("Catalog unavailable"); return r.json(); })
    .then(data => {
      if (!data || !Array.isArray(data.projects)) throw new Error("Invalid catalog");
      data.projects.forEach(render);
    })
    .catch(error => console.warn("HELLIOS portfolio catalog:", error.message));
})();
