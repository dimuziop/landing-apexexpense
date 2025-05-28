document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "-10% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        // Opcional: remover la clase cuando el elemento sale de la vista
        // entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  // Observar elementos con clases de animación
  document
    .querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .scale-in, .bounce-in, .flip-in"
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // Añadir animación al header
  document.querySelector("header").classList.add("visible");

  // Añadir animación al hero content
  document.querySelectorAll(".hero-content > *").forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 300);
  });
});
