// scripts.js

// Show/Hide categories
function showCategory(category) {
  const cats = document.querySelectorAll(".menu-category");
  const tabs = document.querySelectorAll(".tab-btn");
  cats.forEach((c) => c.classList.remove("active"));
  tabs.forEach((t) => t.classList.remove("active"));
  document.getElementById(category).classList.add("active");
  event.target.classList.add("active");
}

// Mapping dish names to models
const modelMap = {
  "Truffle Arancini": {
    url: "https://raw.githubusercontent.com/yashasvidesh03-cmd/New-website/main/model_1.glb",
    title: "Truffle Arancini",
  },
  "Seared Scallops": {
    url: "https://raw.githubusercontent.com/yashasvidesh03-cmd/New-website/main/model_2.glb",
    title: "Seared Scallops",
  },
  "Burrata Caprese": {
    url: "https://raw.githubusercontent.com/yashasvidesh03-cmd/New-website/main/model_3.glb",
    title: "Burrata Caprese",
  },
};

// Open modal with respective model
function open3DViewer(dishName) {
  const model = modelMap[dishName];
  if (!model) return;
  document.getElementById("mainModelViewer").src = model.url;
  document.getElementById("modelTitle").innerText = model.title + " 3D View";
  document.getElementById("modalOverlay").classList.add("active");
}

// Close modal
function close3DViewer() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.getElementById("mainModelViewer").src = "";
}

// Close modal clicking outside modal content
document.getElementById("modalOverlay").onclick = function (event) {
  if (event.target === this) close3DViewer();
};

// Initial animation: After 3 sec, move logo to left and show menu fullscreen
window.onload = function () {
  setTimeout(() => {
    const logoBar = document.getElementById("logoBar");
    const menuFull = document.getElementById("menuFull");
    logoBar.classList.add("moved-left");
    menuFull.style.display = "block";
    document.body.style.overflow = "hidden";
  }, 3000);
};
    
