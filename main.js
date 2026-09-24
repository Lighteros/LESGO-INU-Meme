const paws = document.getElementById("paws");
for (let i = 0; i < 18; i++) {
  const paw = document.createElement("span");
  paw.className = "paw";
  paw.style.left = Math.random() * 100 + "vw";
  paw.style.animationDuration = 10 + Math.random() * 14 + "s";
  paw.style.animationDelay = -Math.random() * 16 + "s";
  paw.style.width = paw.style.height = 18 + Math.random() * 22 + "px";
  paws.appendChild(paw);
}

const canvas = document.getElementById("sparks");
const ctx = canvas.getContext("2d");
const dots = Array.from({ length: 48 }, () => spawn());

function spawn() {
  return {
    x: Math.random(),
    y: Math.random(),
    r: 1 + Math.random() * 2.4,
    s: 0.15 + Math.random() * 0.45,
    a: 0.25 + Math.random() * 0.55
  };
}

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
addEventListener("resize", resize);
resize();

function frame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach((d) => {
    d.y -= d.s / canvas.height * 8;
    if (d.y < 0) Object.assign(d, spawn(), { y: 1 });
    ctx.beginPath();
    ctx.fillStyle = `rgba(20,17,12,${d.a})`;
    ctx.arc(d.x * canvas.width, d.y * canvas.height, d.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(frame);
}
frame();
