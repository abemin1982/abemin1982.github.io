AOS.init({ duration: 1000, once: true });

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const activeLine = document.getElementById("active-line");

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
      const navRect = link.closest("nav").getBoundingClientRect();

      activeLine.style.left = link.offsetLeft + "px";
      activeLine.style.width = rect.width + "px";
      activeLine.style.top = navRect.height + "px";   // 縦位置はnavの高さに合わせる
      activeLine.style.position = "absolute";          // 念のため絶対指定
    } else {
      link.classList.remove("active");
    }
  });
}

updateNav();
window.addEventListener("scroll", updateNav);
window.addEventListener("load", updateNav);
window.addEventListener("resize", updateNav);
