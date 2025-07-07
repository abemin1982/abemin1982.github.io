const canvas = document.getElementById('bubbles');
const ctx = canvas.getContext('2d');
let bubbles = [];

function resizeCanvas() {
  const hero = document.querySelector('.hero');
  canvas.width = window.innerWidth;  // ← ブラウザの横幅いっぱいにする
  canvas.height = hero.clientHeight; // ヒーローの高さに合わせる
}

function Bubble() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.radius = Math.random() * 20 + 4; // ← 大きさ：4〜24px
  this.speed = Math.random() * 0.4 + 0.1; // ← 超ゆっくり：0.1〜0.5
  this.alpha = Math.random() * 0.4 + 0.2;
  this.direction = Math.random() > 0.5 ? "up" : "down";
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(180,180,180,${b.alpha})`;
    ctx.fill();

    if (b.direction === "up") {
      b.y -= b.speed;
      if (b.y + b.radius < 0) {
        b.y = canvas.height + b.radius;
      }
    } else {
      b.y += b.speed;
      if (b.y - b.radius > canvas.height) {
        b.y = -b.radius;
      }
    }
  });
  requestAnimationFrame(draw);
}

resizeCanvas();

for (let i = 0; i < 100; i++) {
  bubbles.push(new Bubble());
}
draw();

window.addEventListener('resize', () => {
  resizeCanvas();
});
