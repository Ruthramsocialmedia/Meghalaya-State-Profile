// ===== MENU DATA =====
const menuData = [
  {
    title: "Chancellor's Vision",
    desc: "Building without limits — a future-ready India where innovation thrives, communities flourish, and every dream finds wings.",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Growth Engine",
    desc: "Driving education and enterprise together — creating opportunities that uplift generations and communities.",
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Transforming Lives",
    desc: "Education that doesn't stop at classrooms — shaping human stories of success and service across the nation.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Legacy of Innovation",
    desc: "From humble beginnings to global recognition — nurturing a legacy rooted in vision, values, and innovation.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Power of Education",
    desc: "Knowledge as the foundation of empowerment — lighting minds and transforming futures.",
    img: "https://images.unsplash.com/photo-1581091012184-5c7b6a3d99ec?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sustainable Futures",
    desc: "Building responsibly for tomorrow — integrating sustainability with education and enterprise.",
    img: "https://images.unsplash.com/photo-1522202195461-764c34d6f9a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Global Impact",
    desc: "Extending influence across borders — where Indian education meets global standards.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Inspiring Generations",
    desc: "A vision carried forward by every student, faculty, and partner — shaping a better India together.",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80"
  }
];

// ===== ELEMENTS =====
const cardsContainer = document.getElementById("cardsContainer");
const title = document.getElementById("menu-title");
const desc = document.getElementById("menu-desc");
const popup = document.getElementById("textPopup");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");
const closePopup = document.getElementById("closePopup");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

// ===== RENDER CARDS =====
menuData.forEach((item, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-index", i);
  card.setAttribute("data-title", item.title);
  
  if (i === 0) card.classList.add("active");

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  img.loading = "lazy";
  
  // Handle image loading errors with fallback
  img.onerror = () => {
    img.style.display = "none";
    card.setAttribute("data-no-image", "true");
  };

  const btn = document.createElement("button");
  btn.className = "info-btn";
  btn.textContent = "View Info";
  btn.setAttribute("aria-label", `View details about ${item.title}`);

  // Open popup when button clicked
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    popupTitle.textContent = item.title;
    popupDesc.textContent = item.desc;
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Activate card on click
  card.addEventListener("click", () => {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    title.textContent = item.title;
    desc.textContent = item.desc;
    
    // Smooth scroll to center the active card
    const cardRect = card.getBoundingClientRect();
    const containerRect = cardsContainer.getBoundingClientRect();
    const scrollPosition = card.offsetLeft - (containerRect.width / 2) + (cardRect.width / 2);
    
    cardsContainer.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  });

  card.appendChild(img);
  card.appendChild(btn);
  cardsContainer.appendChild(card);
});

// ===== SCROLL INDICATORS =====
scrollLeftBtn.addEventListener("click", () => {
  cardsContainer.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

scrollRightBtn.addEventListener("click", () => {
  cardsContainer.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});

// Update scroll indicators visibility
const updateScrollIndicators = () => {
  const { scrollLeft, scrollWidth, clientWidth } = cardsContainer;
  
  scrollLeftBtn.style.opacity = scrollLeft > 10 ? "1" : "0.5";
  scrollLeftBtn.style.pointerEvents = scrollLeft > 10 ? "all" : "none";
  
  scrollRightBtn.style.opacity = scrollLeft < scrollWidth - clientWidth - 10 ? "1" : "0.5";
  scrollRightBtn.style.pointerEvents = scrollLeft < scrollWidth - clientWidth - 10 ? "all" : "none";
};

cardsContainer.addEventListener("scroll", updateScrollIndicators);
window.addEventListener("resize", updateScrollIndicators);

// Initialize scroll indicators
setTimeout(updateScrollIndicators, 100);

// ===== POPUP CLOSE =====
closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
  document.body.style.overflow = "auto";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Close popup with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popup.classList.contains("active")) {
    popup.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// ===== DRAG & SWIPE SCROLL =====
let isDown = false;
let startX, scrollLeft;

cardsContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  cardsContainer.style.cursor = "grabbing";
  startX = e.pageX - cardsContainer.offsetLeft;
  scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener("mouseleave", () => {
  isDown = false;
  cardsContainer.style.cursor = "grab";
});

cardsContainer.addEventListener("mouseup", () => {
  isDown = false;
  cardsContainer.style.cursor = "grab";
});

cardsContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardsContainer.offsetLeft;
  const walk = (x - startX) * 1.5;
  cardsContainer.scrollLeft = scrollLeft - walk;
});

// Touch scroll
let startTouchX = 0;
let isScrolling = false;

cardsContainer.addEventListener("touchstart", (e) => {
  startTouchX = e.touches[0].pageX;
  isScrolling = true;
});

cardsContainer.addEventListener("touchmove", (e) => {
  if (!isScrolling) return;
  const touchX = e.touches[0].pageX;
  const move = startTouchX - touchX;
  cardsContainer.scrollLeft += move * 1.2;
  startTouchX = touchX;
});

cardsContainer.addEventListener("touchend", () => {
  isScrolling = false;
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    cardsContainer.scrollBy({ left: -300, behavior: 'smooth' });
  } else if (e.key === "ArrowRight") {
    cardsContainer.scrollBy({ left: 300, behavior: 'smooth' });
  }
});