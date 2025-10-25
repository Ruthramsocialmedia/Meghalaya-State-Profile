// ===== Inject Stylesheet from CDN =====
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/gh/Ruthramsocialmedia/Meghalaya-State-Profile@main/style.css";
document.head.appendChild(styleLink);

// ===== Set Page Metadata =====
document.title = "Founder Menu Showcase";
document.documentElement.lang = "en";
const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");
document.head.appendChild(metaCharset);

const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(metaViewport);

// ===== Background Gradient =====
const background = document.createElement("div");
background.className = "background-gradient";
document.body.appendChild(background);

// ===== Showcase Container =====
const showcase = document.createElement("div");
showcase.className = "showcase-container";
document.body.appendChild(showcase);

// ===== Content Display =====
const contentDisplay = document.createElement("div");
contentDisplay.className = "content-display";

const label = document.createElement("p");
label.className = "label";
label.textContent = "SHRI. A. SRINIVASAN — FOUNDER";

const title = document.createElement("h1");
title.id = "menu-title";
title.textContent = "Chancellor's Vision";

const desc = document.createElement("p");
desc.id = "menu-desc";
desc.textContent =
  "Building without limits — a future-ready India where innovation thrives, communities flourish, and every dream finds wings.";

contentDisplay.append(label, title, desc);
showcase.appendChild(contentDisplay);

// ===== Cards Wrapper =====
const cardsWrapper = document.createElement("div");
cardsWrapper.className = "cards-wrapper";
cardsWrapper.id = "cardsWrapper";
showcase.appendChild(cardsWrapper);

// Scroll Indicators
const scrollLeft = document.createElement("div");
scrollLeft.className = "scroll-indicator left";
scrollLeft.id = "scrollLeft";
scrollLeft.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const scrollRight = document.createElement("div");
scrollRight.className = "scroll-indicator right";
scrollRight.id = "scrollRight";
scrollRight.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const cardsContainer = document.createElement("div");
cardsContainer.className = "cards-container";
cardsContainer.id = "cardsContainer";

cardsWrapper.append(scrollLeft, cardsContainer, scrollRight);

// ===== Popup =====
const popup = document.createElement("div");
popup.className = "text-popup";
popup.id = "textPopup";

const popupContent = document.createElement("div");
popupContent.className = "popup-content";

const closePopup = document.createElement("button");
closePopup.className = "close-popup";
closePopup.id = "closePopup";
closePopup.setAttribute("aria-label", "Close popup");
closePopup.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const popupTitle = document.createElement("h2");
popupTitle.id = "popupTitle";
const popupDesc = document.createElement("p");
popupDesc.id = "popupDesc";

popupContent.append(closePopup, popupTitle, popupDesc);
popup.appendChild(popupContent);
document.body.appendChild(popup);

// ===== Menu Data =====
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

// ===== Render Cards =====
menuData.forEach((item, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.index = i;
  card.dataset.title = item.title;
  if (i === 0) card.classList.add("active");

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  img.loading = "lazy";
  img.onerror = () => {
    img.style.display = "none";
    card.dataset.noImage = "true";
  };

  const btn = document.createElement("button");
  btn.className = "info-btn";
  btn.textContent = "View Info";
  btn.setAttribute("aria-label", `View details about ${item.title}`);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    popupTitle.textContent = item.title;
    popupDesc.textContent = item.desc;
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  card.addEventListener("click", () => {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    title.textContent = item.title;
    desc.textContent = item.desc;

    const cardRect = card.getBoundingClientRect();
    const containerRect = cardsContainer.getBoundingClientRect();
    const scrollPosition = card.offsetLeft - (containerRect.width / 2) + (cardRect.width / 2);
    cardsContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
  });

  card.append(img, btn);
  cardsContainer.appendChild(card);
});

// ===== Scroll Controls =====
scrollLeft.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
});
scrollRight.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
});

const updateScrollIndicators = () => {
  const { scrollLeft: left, scrollWidth, clientWidth } = cardsContainer;
  scrollLeft.style.opacity = left > 10 ? "1" : "0.5";
  scrollRight.style.opacity = left < scrollWidth - clientWidth - 10 ? "1" : "0.5";
};
cardsContainer.addEventListener("scroll", updateScrollIndicators);
window.addEventListener("resize", updateScrollIndicators);
setTimeout(updateScrollIndicators, 100);

// ===== Popup Close Events =====
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
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popup.classList.contains("active")) {
    popup.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// ===== Drag & Swipe Scroll =====
let isDown = false, startX, scrollStart;
cardsContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  cardsContainer.style.cursor = "grabbing";
  startX = e.pageX - cardsContainer.offsetLeft;
  scrollStart = cardsContainer.scrollLeft;
});
cardsContainer.addEventListener("mouseleave", () => { isDown = false; cardsContainer.style.cursor = "grab"; });
cardsContainer.addEventListener("mouseup", () => { isDown = false; cardsContainer.style.cursor = "grab"; });
cardsContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardsContainer.offsetLeft;
  const walk = (x - startX) * 1.5;
  cardsContainer.scrollLeft = scrollStart - walk;
});

// Touch Scroll
let startTouchX = 0, isScrolling = false;
cardsContainer.addEventListener("touchstart", (e) => { startTouchX = e.touches[0].pageX; isScrolling = true; });
cardsContainer.addEventListener("touchmove", (e) => {
  if (!isScrolling) return;
  const touchX = e.touches[0].pageX;
  const move = startTouchX - touchX;
  cardsContainer.scrollLeft += move * 1.2;
  startTouchX = touchX;
});
cardsContainer.addEventListener("touchend", () => { isScrolling = false; });
