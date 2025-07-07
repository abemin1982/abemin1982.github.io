const canvas = document.getElementById('bubbles');
const ctx = canvas.getContext('2d');
let bubbles = [];

function resizeCanvas() {
  const hero = document.querySelector('.hero');
  canvas.width = hero.clientWidth;
  canvas.height = hero.clientHeight;
}

function Bubble() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.radius = Math.random() * 10 + 4;
  this.speed = Math.random() * 1 + 0.5;
  this.alpha = Math.random() * 0.5 + 0.3;
  this.direction = Math.random() > 0.5 ? "up" : "down"; // ← 上or下に動く
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${b.alpha})`;
    ctx.fill();

    // 動かす方向によって上下に移動
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
