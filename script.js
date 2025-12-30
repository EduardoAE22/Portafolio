console.log("Portafolio cargado correctamente.");

document.addEventListener("DOMContentLoaded", () => {
  // Cerrar navbar en móvil al dar click en un link
  const nav = document.getElementById("navbarNav");
  if (nav && window.bootstrap) {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false });

    document.querySelectorAll("#navbarNav .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (nav.classList.contains("show")) bsCollapse.hide();
      });
    });
  }

  // Smooth scroll (suave) para anchors
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
