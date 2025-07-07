AOS.init({ duration: 1000, once: true });

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const activeLine = document.getElementById("active-line");

function updateNav() {
  let index = sections.length;
  while (--index && window.scrollY + 150 < sections[index].offsetTop) {}
  navLinks.forEach(link => link.classList.remove("active"));
  navLinks[index].classList.add("active");

  const activeLink = navLinks[index];
  if (activeLink) {
    const rect = activeLink.getBoundingClientRect();
    activeLine.style.left = activeLink.offsetLeft + "px";
    activeLine.style.width = rect.width + "px";
  }
}
updateNav();
window.addEventListener("scroll", updateNav);
