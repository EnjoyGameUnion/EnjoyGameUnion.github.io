const aboutSlide = document.querySelectorAll(".about-slide");
let currentSlides = 0;
setInterval(() => {
  aboutSlide[currentSlides].classList.remove("active");
  currentSlides = (currentSlides + 1) % aboutSlide.length;
  aboutSlide[currentSlides].classList.add("active");
}, 4000);