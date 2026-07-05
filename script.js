const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.site-header nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.site-header nav a[href="#${id}"]`);
    if (!link) return;

    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, {
  rootMargin: '-40% 0px -55% 0px'
});

sections.forEach(section => observer.observe(section));