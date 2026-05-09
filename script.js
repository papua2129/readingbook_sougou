const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
