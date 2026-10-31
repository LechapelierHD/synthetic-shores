const sections = document.querySelectorAll("main section.reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.2 });
  sections.forEach((s) => io.observe(s));
} else {
  sections.forEach((s) => s.classList.add("in"));
}
