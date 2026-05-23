const carousel = document.getElementById("carousel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const totalItems = carousel.children.length;
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 16; // Move by 16rem (width of each item)
  carousel.style.transform = `translateX(${offset}rem)`;
}

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to the last item
  updateCarousel();
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first item
  updateCarousel();
});

// Make the carousel responsive
window.addEventListener("resize", () => {
  updateCarousel(); // Recalculate the offset on window resize
});
const words = [
  "Happy Customers Can Make a Bussiness",
  "To Make Creative",
  "Premium And User Friendly",
];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(
      0,
      j - 1
    );
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(
      0,
      j + 1
    );
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();

// Smooth Animation Logic for Headset Colors
function updateHeadset(imageSrc, text, color) {
  const imageElement = document.getElementById("Image");
  const titleElement = document.getElementById("title");

  // Add transition styling for fading out
  imageElement.style.transition = "opacity 0.4s ease-in-out, transform 0.4s ease-in-out";
  titleElement.style.transition = "opacity 0.3s ease-in, transform 0.3s ease-in, letter-spacing 0.3s ease-in";

  // 1. Fade out Image (scale down)
  imageElement.style.opacity = "0";
  imageElement.style.transform = "scale(0.95)";

  // 2. Fade out Text differently (slide up and space out)
  titleElement.style.opacity = "0";
  titleElement.style.transform = "translateY(-30px)";
  titleElement.style.letterSpacing = "8px";

  // Wait for fade out to complete, then change content and fade back in
  setTimeout(() => {
    // Update Image
    imageElement.src = imageSrc;

    // Update Text
    titleElement.textContent = text;
    titleElement.style.color = color;

    // Prepare text for sliding in from below by disabling transition instantly
    titleElement.style.transition = "none";
    titleElement.style.transform = "translateY(30px)";
    titleElement.style.letterSpacing = "-2px";

    // Trigger reflow to apply the instant reposition
    void titleElement.offsetWidth;

    // Re-enable transitions with a bouncy effect for the text
    titleElement.style.transition = "opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), letter-spacing 0.5s ease-out";

    // Fade in Image
    imageElement.style.opacity = "1";
    imageElement.style.transform = "scale(1)";

    // Fade in Text
    titleElement.style.opacity = "1";
    titleElement.style.transform = "translateY(0)";
    titleElement.style.letterSpacing = "normal";
  }, 350);
}

function gold() {
  updateHeadset("./images/Airpods-max-starlight-1.png", "Apple Airpods Max Rose Gold", "rgba(235, 218, 123, 0.74)");
}

function gary() {
  updateHeadset("./images/300px-AirPods_Max.webp", "Apple Airpods Max Gary", "rgb(170, 165, 165)");
}

function purple() {
  updateHeadset("./images/309246_0_d21pnw.png", "Apple Airpods Max Purple", "rgb(235, 155, 235)");
}

function pink() {
  updateHeadset("./images/982ff5_a70939a331b241a4a7d7eecb33196660~mv2.avif", "Apple Airpods Max Pink", "rgb(231, 63, 91)");
}

// Mobile Menu Toggle Logic
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      
      // Toggle icon between hamburger and close (X)
      if (mobileMenu.classList.contains("hidden")) {
        menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
      } else {
        menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
      }
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
      });
    });
  }
});
