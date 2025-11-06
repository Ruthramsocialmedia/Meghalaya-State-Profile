document.addEventListener('DOMContentLoaded', function() {
    // Menu data
    const menuData = [
        {
            title: "Anthem",
            desc: "Meghalaya — The Rhythm of Rain, The Soul of Nature.",
            webFrame: "https://www.youtube.com/embed/CUCWgSN-IgA?si=MWQb2itDjEv874qh",
            img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/Anthem.png",
        },
        {
            title: "People & Culture",
            desc: "Where every smile is a story, and every dance a prayer.",
            webFrame: "https://meghalaya-people-culture.netlify.app/",
            img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/PEOPLE%20AND%20CULTURE.png",
        },
        {
            title: "Population",
            desc: "Home to more than three million souls, united by nature and tradition.",
            webFrame: "https://meghalaya-population.netlify.app/",
            img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/POPULATION.png",
        },
        {
            title: "Religion Style",
            desc: "Three religions, countless wonders — bound by clouds, united by culture.",
            webFrame: "https://religion-style.netlify.app/",
            img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/RELIGION%20STYLE.png",
        },
        {
            title: "City Accent",
            desc: "Every street hums with stories; every hilltown echoes with harmony.",
            webFrame: "https://city-accent.netlify.app/",
            img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/PEOPLE%20SPEAK.png",
        },
        {
            title: "Authentic Food",
            desc: "Where food is not cooked, but crafted with love and legacy.",
            webFrame: "https://authentic-foods.netlify.app/",
            img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/AUTHENTIC%20FOOD.png",
        },
        {
            title: "GI Codes",
            desc: "Born from the earth, blessed by the clouds — Meghalaya's gifts to the world.",
            webFrame: "https://gi-codes.netlify.app/",
            img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/GEOGRAPHICAL%20INDICATION.png",
        },
        {
            title: "Weather",
            desc: "Sunlight dances through rain, painting rainbows across the valleys.",
            webFrame: "https://weather-meghala.netlify.app/",
            img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/WEATHER.png",
        },
        {
            title: "How to Reach",
            desc: "All roads that chase the clouds, lead here — to Meghalaya.",
            webFrame: "https://get-direction.netlify.app/",
            img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/TRANSPORT.png",
        },
        {
            title: "Audio Tourism",
            desc: "Hear the rhythm of rain, the hum of hills, the heartbeat of its people.",
            webFrame: "https://audio-tourism-meghalaya.netlify.app/",
            img: "https://raw.githubusercontent.com/Ruthramsocialmedia/Meghalaya-State-Profile/main/Images/Anthem.png",
        },
    ];

    // DOM elements
    const cardsContainer = document.getElementById('cardsContainer');
    const menuTitle = document.getElementById('menu-title');
    const menuDesc = document.getElementById('menu-desc');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');
    const showcaseContainer = document.getElementById('showcaseContainer');

    // Create popup function
    const createPopup = (item) => {
        const popup = document.createElement("div");
        popup.className = "text-popup";

        const popupContent = document.createElement("div");
        popupContent.className = "popup-content";

        const headerSection = document.createElement("div");
        headerSection.style.cssText = `
            padding: 35px 40px 25px;
            background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            flex-shrink: 0;
        `;

        const closePopup = document.createElement("button");
        closePopup.className = "close-popup";
        closePopup.innerHTML = `
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2.5"/>
            </svg>`;

        const fullScreenBtn = document.createElement("button");
        fullScreenBtn.className = "fullscreen-popup";
        fullScreenBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;

        const title = document.createElement("h2");
        title.textContent = item.title;

        const desc = document.createElement("p");
        desc.textContent = item.desc;

        const webFrameContainer = document.createElement("div");
        webFrameContainer.style.cssText = `
            flex: 1;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            border: none;
            position: relative;
            overflow: hidden;
        `;

        const webFrame = document.createElement("iframe");
        webFrame.src = item.webFrame;
        webFrame.style.cssText = `
            width: 100%;
            height: 100%;
            border: none;
            background: transparent;
        `;
        webFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        webFrame.allowFullscreen = true;

        const loadingOverlay = document.createElement("div");
        loadingOverlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.1rem;
            backdrop-filter: blur(10px);
            transition: opacity 0.5s ease;
            z-index: 10;
        `;
        loadingOverlay.innerHTML = `
            <div style="text-align: center;">
                <div style="width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 15px;"></div>
                Loading ${item.title}...
            </div>
        `;

        webFrame.addEventListener("load", () => {
            loadingOverlay.style.opacity = "0";
            setTimeout(() => {
                loadingOverlay.style.display = "none";
            }, 500);
        });

        webFrameContainer.appendChild(webFrame);
        webFrameContainer.appendChild(loadingOverlay);

        const stopIframe = () => {
            const iframe = webFrameContainer.querySelector("iframe");
            iframe.src = "";
        };

        closePopup.addEventListener("click", () => {
            stopIframe();
            popupContent.style.transform = "translateY(50px) scale(0.9)";
            popupContent.style.opacity = "0";
            setTimeout(() => {
                popup.style.display = "none";
                document.body.style.overflow = "auto";
            }, 400);
        });

        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                stopIframe();
                popupContent.style.transform = "translateY(50px) scale(0.9)";
                popupContent.style.opacity = "0";
                setTimeout(() => {
                    popup.style.display = "none";
                    document.body.style.overflow = "auto";
                }, 400);
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && popup.style.display === "flex") {
                stopIframe();
                popupContent.style.transform = "translateY(50px) scale(0.9)";
                popupContent.style.opacity = "0";
                setTimeout(() => {
                    popup.style.display = "none";
                    document.body.style.overflow = "auto";
                }, 400);
            }
        });

        closePopup.addEventListener("mouseenter", () => {
            closePopup.style.transform = "rotate(90deg) scale(1.15)";
            closePopup.style.background = "rgba(255, 255, 255, 0.2)";
            closePopup.style.border = "1px solid rgba(255, 255, 255, 0.5)";
        });

        closePopup.addEventListener("mouseleave", () => {
            closePopup.style.transform = "rotate(0deg) scale(1)";
            closePopup.style.background = "rgba(255, 255, 255, 0.12)";
            closePopup.style.border = "1px solid rgba(255, 255, 255, 0.3)";
        });

        fullScreenBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            window.open(item.webFrame, "_blank", "noopener,noreferrer");
        });

        fullScreenBtn.addEventListener("mouseenter", () => {
            fullScreenBtn.style.transform = "scale(1.15)";
            fullScreenBtn.style.background = "rgba(255, 255, 255, 0.2)";
            fullScreenBtn.style.border = "1px solid rgba(255, 255, 255, 0.5)";
        });

        fullScreenBtn.addEventListener("mouseleave", () => {
            fullScreenBtn.style.transform = "scale(1)";
            fullScreenBtn.style.background = "rgba(255, 255, 255, 0.12)";
            fullScreenBtn.style.border = "1px solid rgba(255, 255, 255, 0.3)";
        });

        headerSection.appendChild(title);
        headerSection.appendChild(desc);
        headerSection.appendChild(closePopup);
        headerSection.appendChild(fullScreenBtn);

        popupContent.appendChild(headerSection);
        popupContent.appendChild(webFrameContainer);
        popup.appendChild(popupContent);
        document.body.appendChild(popup);

        return popup;
    };

    // Create popups
    const popups = menuData.map((item) => createPopup(item));

    // Create cards
    menuData.forEach((item, i) => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.index = i;
        card.dataset.title = item.title;

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.title;
        img.loading = "lazy";
        img.onerror = () => {
            card.dataset.noImage = "true";
            img.remove();
        };

        const btn = document.createElement("button");
        btn.className = "info-btn";
        btn.textContent = "View";
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const popup = popups[i];
            const iframe = popup.querySelector("iframe");
            iframe.src = item.webFrame;
            popup.style.display = "flex";
            document.body.style.overflow = "hidden";

            setTimeout(() => {
                popup.style.opacity = "1";
                const content = popup.querySelector(".popup-content");
                content.style.transform = "translateY(0) scale(1)";
                content.style.opacity = "1";
            }, 50);
        });

        card.append(img, btn);
        card.addEventListener("click", () => {
            document.querySelectorAll(".card").forEach((c) => c.classList.remove("active"));
            card.classList.add("active");
            menuTitle.textContent = item.title;
            menuDesc.textContent = item.desc;
            const rect = card.getBoundingClientRect();
            const cont = cardsContainer.getBoundingClientRect();
            const pos = card.offsetLeft - cont.width / 2 + rect.width / 2;
            cardsContainer.scrollTo({ left: pos, behavior: "smooth" });
        });
        cardsContainer.appendChild(card);
    });

    // Activate first card
    const activateFirst = () => {
        const first = document.querySelector(".card");
        if (first) {
            first.classList.add("active");
            menuTitle.textContent = menuData[0].title;
            menuDesc.textContent = menuData[0].desc;
        }
    };
    activateFirst();

    // Scroll functionality
    scrollLeft.addEventListener("click", () => {
        cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", () => {
        cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
    });

    // Update scroll indicators
    const updateScrollIndicators = () => {
        const { scrollLeft, scrollWidth, clientWidth } = cardsContainer;
        document.getElementById('scrollLeft').style.opacity = scrollLeft > 10 ? "1" : "0.5";
        document.getElementById('scrollLeft').style.pointerEvents = scrollLeft > 10 ? "all" : "none";
        document.getElementById('scrollRight').style.opacity = scrollLeft < scrollWidth - clientWidth - 10 ? "1" : "0.5";
        document.getElementById('scrollRight').style.pointerEvents = scrollLeft < scrollWidth - clientWidth - 10 ? "all" : "none";
    };

    cardsContainer.addEventListener("scroll", updateScrollIndicators);
    window.addEventListener("resize", updateScrollIndicators);
    setTimeout(updateScrollIndicators, 100);

    // Mouse drag functionality
    let isDown = false;
    let startX, scrollLeftPos;

    cardsContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        cardsContainer.style.cursor = "grabbing";
        startX = e.pageX - cardsContainer.offsetLeft;
        scrollLeftPos = cardsContainer.scrollLeft;
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
        cardsContainer.scrollLeft = scrollLeftPos - walk;
    });

    // Touch functionality
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

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
        } else if (e.key === "ArrowRight") {
            cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
        }
    });
});