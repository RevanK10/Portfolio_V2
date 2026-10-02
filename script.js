document.getElementById('year').textContent = new Date().getFullYear();

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = 'var(--text-muted)';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
    }
  });
});