const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(
  ".section-heading, .feature-card, .use-case-card, .step-card, .comparison-table-wrapper, .problem-panel, .trust-panel, .final-cta-card, .hero-copy, .hero-panel, .demo-hero-copy, .demo-stage-card"
);
const interestForms = document.querySelectorAll("[data-interest-form]");

revealItems.forEach((item) => {
  item.setAttribute("data-reveal", "");
});

const syncHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

interestForms.forEach((form) => {
  const successMessage = form.querySelector("[data-form-success]");

  form.addEventListener("submit", () => {
    window.setTimeout(() => {
      if (!successMessage) return;
      successMessage.hidden = false;
      form.reset();
    }, 350);
  });
});
