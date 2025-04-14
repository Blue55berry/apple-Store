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

// Initialize AOS library
function gold() {
  const imageElement = document.getElementById("Image");
  imageElement.src = "./images/Airpods-max-starlight-1.png";
  const titleElement = document.getElementById("title"); // Assuming there's an element with id "title"

  // Ensure the image maintains its size and position
  imageElement.style.width = "520px"; // Set a fixed width
  imageElement.style.height = "auto"; // Maintain aspect ratio
  imageElement.style.objectFit = "cover"; // Ensure the image fits within its container

  // Remove existing AOS attributes if any
  imageElement.removeAttribute("data-aos");

  // Add a CSS class for animation
  imageElement.classList.remove("aos-animate"); // Reset animation
  imageElement.classList.add("custom-zoom-in");

  // Trigger reflow to restart animation
  void imageElement.offsetWidth;
  titleElement.textContent = "Apple Airpods Max Rose Gold";
  titleElement.style.color = " rgba(235, 218, 123, 0.74)";
  // Add the animation class back
  imageElement.classList.add("aos-animate");
  document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
  });
}
function gary() {
  const imageElement = document.getElementById("Image");
  imageElement.src = "./images/300px-AirPods_Max.webp";
  const titleElement = document.getElementById("title"); // Assuming there's an element with id "title"

  // Ensure the image maintains its size and position
  imageElement.style.width = "500px"; // Set a fixed width
  imageElement.style.height = "auto"; // Maintain aspect ratio
  imageElement.style.objectFit = "cover"; // Ensure the image fits within its container

  // Remove existing AOS attributes if any
  imageElement.removeAttribute("data-aos");

  // Add a CSS class for animation
  imageElement.classList.remove("aos-animate"); // Reset animation
  imageElement.classList.add("custom-zoom-in");

  // Trigger reflow to restart animation
  void imageElement.offsetWidth;
  titleElement.textContent = "Apple Airpods Max Gary ";
  titleElement.style.color = " rgb(170, 165, 165)";
  // Add the animation class back
  imageElement.classList.add("aos-animate");
  document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
  });
}
// function black() {
//   const imageElement = document.getElementById("Image");
//   const titleElement = document.getElementById("title"); // Assuming there's an element with id "title"

//   imageElement.src = "./images/new-project-28.avif";

//   // Ensure the image maintains its size and position
//   imageElement.style.width = "750px"; // Set a fixed width
//   imageElement.style.height = "auto"; // Maintain aspect ratio
//   imageElement.style.objectFit = "cover"; // Ensure the image fits within its container
//   imageElement.style.marginTop = "10px"; // Decrease the margin-top height

//   // Remove existing AOS attributes if any
//   imageElement.removeAttribute("data-aos");

//   // Add a CSS class for animation
//   imageElement.classList.remove("aos-animate"); // Reset animation
//   imageElement.classList.add("custom-zoom-in");

//   // Trigger reflow to restart animation
//   void imageElement.offsetWidth;

//   // Add the animation class back
//   imageElement.classList.add("aos-animate");

//   // Dynamically change the title
//   titleElement.textContent = "Apple Airpods Max black "; // Update the title text

//   document.addEventListener("DOMContentLoaded", () => {
//     AOS.init();
//   });
// }
function purple() {
  const imageElement = document.getElementById("Image");
  const titleElement = document.getElementById("title"); // Assuming there's an element with id "title"

  imageElement.src = "./images/309246_0_d21pnw.png";

  // Ensure the image maintains its size and position
  imageElement.style.width = "650px"; // Set a fixed width
  imageElement.style.height = "auto"; // Maintain aspect ratio
  imageElement.style.objectFit = "cover"; // Ensure the image fits within its container
  imageElement.style.marginTop = "12px"; // Decrease the margin-top height

  // Remove existing AOS attributes if any
  imageElement.removeAttribute("data-aos");

  // Add a CSS class for animation
  imageElement.classList.remove("aos-animate"); // Reset animation
  imageElement.classList.add("custom-zoom-in");

  // Trigger reflow to restart animation
  void imageElement.offsetWidth;

  // Add the animation class back
  imageElement.classList.add("aos-animate");

  // Dynamically change the title
  titleElement.textContent = "Apple Airpods Max Purple ";
  titleElement.style.color = " rgb(235, 155, 235)"; // Update the title text

  document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
  });
}
function pink() {
  const imageElement = document.getElementById("Image");
  const titleElement = document.getElementById("title"); // Assuming there's an element with id "title"

  imageElement.src =
    "./images/982ff5_a70939a331b241a4a7d7eecb33196660~mv2.avif";

  // Ensure the image maintains its size and position
  imageElement.style.width = "950px"; // Set a fixed width
  imageElement.style.height = "auto"; // Maintain aspect ratio
  imageElement.style.objectFit = "cover"; // Ensure the image fits within its container
  imageElement.style.marginTop = "50px"; // Decrease the margin-top height

  // Remove existing AOS attributes if any
  imageElement.removeAttribute("data-aos");

  // Add a CSS class for animation
  imageElement.classList.remove("aos-animate"); // Reset animation
  imageElement.classList.add("custom-zoom-in");

  // Trigger reflow to restart animation
  void imageElement.offsetWidth;

  // Add the animation class back
  imageElement.classList.add("aos-animate");

  // Dynamically change the title
  titleElement.textContent = "Apple Airpods Max Pink "; // Update the title text

  // Dynamically change the text color
  titleElement.style.color = "rgb(231, 63, 91)"; // Set the text color to match the theme

  document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
  });
}
