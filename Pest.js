
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".from-left, .from-right").forEach(img => {
    observer.observe(img);
  });
});

