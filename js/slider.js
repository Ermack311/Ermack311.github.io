const sliderImages = document.querySelectorAll(".slider__img"),
  sliderLine = document.querySelector(".slider__line"),
  sliderDots = document.querySelectorAll(".slider__dot");

let sliderCount = 0,
  sliderWidth;

window.addEventListener("resize", showSlide);

function showSlide() {
  sliderWidth = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + "px";
  sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));

  rollSlider();
}
showSlide();


function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;

  rollSlider();
  thisSlide(sliderCount);
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;

  rollSlider();
  thisSlide(sliderCount);
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("slider__active-dot"));
  sliderDots[index].classList.add("slider__active-dot");
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});
