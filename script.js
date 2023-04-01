let slideIndex = 0;
let slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");

function startSlideshow() {
  setInterval(() => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
  }, 3000);
}
