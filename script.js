// ===== MENU DATA =====
const menuData = [
  {
    title: "Antham",
    desc: "Meghalaya — The Rhythm of Rain, The Soul of Nature.",
    img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/Anthem.png",
  },
  {
    title: "People & Culture",
    desc: "Where every smile is a story, and every dance a prayer.",
    img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/PEOPLE AND CULTURE.png",
  },
  {
    title: "Population",
    desc: "Home to more than three million souls, united by nature and tradition.",
    img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/POPULATION.png",
  },
  {
    title: "Region Style",
    desc: "Three regions, countless wonders — bound by clouds, united by culture.",
    img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/RELIGION STYLE.png",
  },
  {
    title: "City Accent",
    desc: "Every street hums with stories; every hilltown echoes with harmony.",
    img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/PEOPLE SPEAK.png",
  },
  {
    title: "Authentic Food",
    desc: "Where food is not cooked, but crafted with love and legacy.",
    img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/AUTHENTIC FOOD.png",
  },
  {
    title: "GI Codes",
    desc: "Born from the earth, blessed by the clouds — Meghalaya’s gifts to the world.",
    img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/GEOGRAPHICAL INDICATION.png",
  },
  {
    title: "Weather",
    desc: "Sunlight dances through rain, painting rainbows across the valleys.",
    img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/WEATHER.png",
  },
  {
    title: "How to Reach",
    desc: "All roads that chase the clouds, lead here — to Meghalaya.",
    img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/TRANSPORT.png",
  },
  {
    title: "Audio Tourism",
    desc: "Hear the rhythm of rain, the hum of hills, the heartbeat of its people.",
    img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/Anthem.png",
  },
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

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  img.loading = "lazy";

  // Handle image load failure
  img.onerror = () => {
    img.style.display = "none";
    card.setAttribute("data-no-image", "true");
  };

  const btn = document.createElement("button");
  btn.className = "info-btn";
  btn.textContent = "View";
  btn.setAttribute("aria-label", `View details about ${item.title}`);

  // ===== OPEN POPUP =====
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    popupTitle.textContent = item.title;
    popupDesc.textContent = item.desc;
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // ===== ACTIVATE CARD =====
  card.addEventListener("click", () => {
    document
      .querySelectorAll(".card")
      .forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
    title.textContent = item.title;
    desc.textContent = item.desc;

    // Smooth scroll to center active card
    const cardRect = card.getBoundingClientRect();
    const containerRect = cardsContainer.getBoundingClientRect();
    const scrollPosition =
      card.offsetLeft - containerRect.width / 2 + cardRect.width / 2;

    cardsContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  });

  card.appendChild(img);
  card.appendChild(btn);
  cardsContainer.appendChild(card);
});

// ===== DEFAULT FIRST CARD LOAD =====
window.addEventListener("DOMContentLoaded", () => {
  const firstCard = document.querySelector(".card");
  if (firstCard) {
    firstCard.classList.add("active");
    title.textContent = menuData[0].title;
    desc.textContent = menuData[0].desc;

    // Center the first card
    const cardRect = firstCard.getBoundingClientRect();
    const containerRect = cardsContainer.getBoundingClientRect();
    const scrollPosition =
      firstCard.offsetLeft - containerRect.width / 2 + cardRect.width / 2;

    cardsContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }
});

// ===== SCROLL INDICATORS =====
scrollLeftBtn.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
});

const updateScrollIndicators = () => {
  const { scrollLeft, scrollWidth, clientWidth } = cardsContainer;
  scrollLeftBtn.style.opacity = scrollLeft > 10 ? "1" : "0.5";
  scrollLeftBtn.style.pointerEvents = scrollLeft > 10 ? "all" : "none";
  scrollRightBtn.style.opacity =
    scrollLeft < scrollWidth - clientWidth - 10 ? "1" : "0.5";
  scrollRightBtn.style.pointerEvents =
    scrollLeft < scrollWidth - clientWidth - 10 ? "all" : "none";
};

cardsContainer.addEventListener("scroll", updateScrollIndicators);
window.addEventListener("resize", updateScrollIndicators);
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

// ===== TOUCH SCROLL =====
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
    cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
  } else if (e.key === "ArrowRight") {
    cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
  }
});

// ===== OVERALL CLOSE BUTTON =====
const closeOverall = document.getElementById("closeOverall");
const showcaseContainer = document.getElementById("showcaseContainer");
const backgroundGradient = document.querySelector(".background-gradient");

closeOverall.addEventListener("click", () => {
  showcaseContainer.style.transition = "all 0.6s ease";
  backgroundGradient.style.transition = "opacity 0.5s ease";

  showcaseContainer.style.opacity = "0";
  backgroundGradient.style.opacity = "0";

  setTimeout(() => {
    showcaseContainer.style.display = "none";
    backgroundGradient.style.display = "none";
    closeOverall.style.display = "none";
  }, 600);
});
