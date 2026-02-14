const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
const totalSlides = slide.length;

/* Create dots */
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= totalSlides) index = 0;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = totalSlides - 1;
  updateSlider();
});

/* Auto Slide */
setInterval(() => {
  index++;
  if (index >= totalSlides) index = 0;
  updateSlider();
}, 4000);
