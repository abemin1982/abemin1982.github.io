
AOS.init({ duration: 1200, once: true });
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  let index = sections.length;
  while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
  navLinks.forEach((link) => link.classList.remove('active'));
  navLinks[index].classList.add('active');
});
