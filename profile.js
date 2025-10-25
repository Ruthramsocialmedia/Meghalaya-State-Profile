const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/gh/Ruthramsocialmedia/Meghalaya-State-Profile@main/style.css";
document.head.appendChild(styleLink);

document.title = "Founder Menu Showcase";
document.documentElement.lang = "en";

const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");
document.head.appendChild(metaCharset);

const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(metaViewport);

const background = document.createElement("div");
background.className = "background-gradient";
background.style.zIndex = "1";
document.body.appendChild(background);

const showcase = document.createElement("div");
showcase.className = "showcase-container";
showcase.style.zIndex = "10";
document.body.appendChild(showcase);

const contentDisplay = document.createElement("div");
contentDisplay.className = "content-display";

const heading = document.createElement("h1");
heading.id = "menu-title";
heading.textContent = "Chancellor's Vision";

const description = document.createElement("p");
description.id = "menu-desc";
description.textContent =
  "Building without limits — a future-ready India where innovation thrives, communities flourish, and every dream finds wings.";

contentDisplay.appendChild(heading);
contentDisplay.appendChild(description);
showcase.appendChild(contentDisplay);

const cardsWrapper = document.createElement("div");
cardsWrapper.className = "cards-wrapper";
cardsWrapper.id = "cardsWrapper";

const scrollLeft = document.createElement("div");
scrollLeft.className = "scroll-indicator left";
scrollLeft.id = "scrollLeft";
scrollLeft.innerHTML = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
cardsWrapper.appendChild(scrollLeft);

const cardsContainer = document.createElement("div");
cardsContainer.className = "cards-container";
cardsContainer.id = "cardsContainer";
cardsWrapper.appendChild(cardsContainer);

const scrollRight = document.createElement("div");
scrollRight.className = "scroll-indicator right";
scrollRight.id = "scrollRight";
scrollRight.innerHTML = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
cardsWrapper.appendChild(scrollRight);

showcase.appendChild(cardsWrapper);

const popup = document.createElement("div");
popup.className = "text-popup";
popup.id = "textPopup";

const popupContent = document.createElement("div");
popupContent.className = "popup-content";

const closePopup = document.createElement("button");
closePopup.className = "close-popup";
closePopup.id = "closePopup";
closePopup.setAttribute("aria-label", "Close popup");
closePopup.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
popupContent.appendChild(closePopup);

const popupTitle = document.createElement("h2");
popupTitle.id = "popupTitle";
popupContent.appendChild(popupTitle);

const popupDesc = document.createElement("p");
popupDesc.id = "popupDesc";
popupContent.appendChild(popupDesc);

popup.appendChild(popupContent);
document.body.appendChild(popup);

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

menuData.forEach((item, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-index", i);
  card.setAttribute("data-title", item.title);

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  img.loading = "lazy";

  img.onerror = () => {
    img.style.display = "none";
    card.setAttribute("data-no-image", "true");
  };

  const btn = document.createElement("button");
  btn.className = "info-btn";
  btn.textContent = "View";
  btn.setAttribute("aria-label", `View details about ${item.title}`);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    popupTitle.textContent = item.title;
    popupDesc.textContent = item.desc;
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  card.addEventListener("click", () => {
    document
      .querySelectorAll(".card")
      .forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
    heading.textContent = item.title;
    description.textContent = item.desc;

    const cardRect = card.getBoundingClientRect();
    const containerRect = cardsContainer.getBoundingClientRect();
    const scrollPosition =
      card.offsetLeft - containerRect.width / 2 + cardRect.width / 2;

    cardsContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
  });

  card.appendChild(img);
  card.appendChild(btn);
  cardsContainer.appendChild(card);
});

window.addEventListener("DOMContentLoaded", () => {
  const firstCard = document.querySelector(".card");
  if (firstCard) {
    firstCard.classList.add("active");
    heading.textContent = menuData[0].title;
    description.textContent = menuData[0].desc;

    const cardRect = firstCard.getBoundingClientRect();
    const containerRect = cardsContainer.getBoundingClientRect();
    const scrollPosition =
      firstCard.offsetLeft - containerRect.width / 2 + cardRect.width / 2;
    cardsContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
  }
});

scrollLeft.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
});
scrollRight.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
});

const updateScrollIndicators = () => {
  const { scrollLeft: sLeft, scrollWidth, clientWidth } = cardsContainer;
  scrollLeft.style.opacity = sLeft > 10 ? "1" : "0.5";
  scrollRight.style.opacity =
    sLeft < scrollWidth - clientWidth - 10 ? "1" : "0.5";
};

cardsContainer.addEventListener("scroll", updateScrollIndicators);
window.addEventListener("resize", updateScrollIndicators);
setTimeout(updateScrollIndicators, 200);

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

let isDown = false,
  startX,
  scrollLeftStart;

cardsContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - cardsContainer.offsetLeft;
  scrollLeftStart = cardsContainer.scrollLeft;
  cardsContainer.style.cursor = "grabbing";
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
  cardsContainer.scrollLeft = scrollLeftStart - walk;
});

let startTouchX = 0,
  isScrolling = false;

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

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft")
    cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
  else if (e.key === "ArrowRight")
    cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
});
