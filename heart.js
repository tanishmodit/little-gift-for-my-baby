const heartsContainer = document.querySelector(".hearts");
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);
