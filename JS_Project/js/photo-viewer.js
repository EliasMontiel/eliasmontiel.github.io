// photo-viewer.js

document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery img");
    let currentIndex = 0;
  
    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "photo-overlay";
    overlay.style.display = "none";
    overlay.innerHTML = `
      <span id="close-btn">&times;</span>
      <span id="prev-btn">&#10094;</span>
      <img id="overlay-img" src="" alt="">
      <span id="next-btn">&#10095;</span>
    `;
    document.body.appendChild(overlay);
  
    const overlayImg = document.getElementById("overlay-img");
    const closeBtn = document.getElementById("close-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
  
    function showImage(index) {
      if (index < 0) index = galleryImages.length - 1;
      if (index >= galleryImages.length) index = 0;
      currentIndex = index;
      overlayImg.src = galleryImages[currentIndex].src;
      overlay.style.display = "flex";
    }
  
    // Add click events to gallery images
    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        showImage(index);
      });
    });
  
    // Close button
    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  
    // Prev / Next button clicks
    prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
    nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
  
    // Click outside image closes overlay
    overlay.addEventListener("click", e => {
      if (e.target === overlay) {
        overlay.style.display = "none";
      }
    });
  
    // Keyboard navigation
    document.addEventListener("keydown", e => {
      if (overlay.style.display === "flex") {
        if (e.key === "ArrowLeft") showImage(currentIndex - 1);
        if (e.key === "ArrowRight") showImage(currentIndex + 1);
        if (e.key === "Escape") overlay.style.display = "none";
      }
    });
  });
  