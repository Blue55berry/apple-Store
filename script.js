const carousel = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const totalItems = carousel.children.length;
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 16; // Move by 16rem (width of each item)
  carousel.style.transform = `translateX(${offset}rem)`;
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to the last item
  updateCarousel();
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first item
  updateCarousel();
});

// Make the carousel responsive
window.addEventListener('resize', () => {
  updateCarousel(); // Recalculate the offset on window resize
});
const words = ["Happy Customers Can Make a Bussiness", "To Make Creative", "Premium And User Friendly"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();