AOS.init({ duration: 1000, once: true });

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// 動く枠要素を追加
let activeBox = document.createElement("div");
activeBox.id = "active-box";
document.querySelector("nav ul").appendChild(activeBox);

function updateNav() {
  let current = "";

  const midpoint = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (midpoint >= top && midpoint < bottom) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute("href").replace("#", "");
    if (href === current) {
      link.classList.add("active");

      const rect = link.getBoundingClientRect();
      const navRect = link.closest("nav ul").getBoundingClientRect();

      activeBox.style.left = `${rect.left - navRect.left}px`;
      activeBox.style.top = `${rect.top - navRect.top}px`;
      activeBox.style.width = `${rect.width}px`;
      activeBox.style.height = `${rect.height}px`;
      activeBox.style.opacity = "1";
    } else {
      link.classList.remove("active");
    }
  });
}

updateNav();
window.addEventListener("scroll", updateNav);
window.addEventListener("load", updateNav);
window.addEventListener("resize", updateNav);
