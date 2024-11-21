let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image");
  console.log(slides);
  console.log(n)
  console.log(slides.length)
  // let dots = document.getElementsByClassName("c1");
 //Helps in keeping the index within img lenght[3] if its 3 , next index will be 0 when clicked..
  if (n > slides.length)
    // console.log(n)
     {slideIndex = 1}
  if (n < 1) 
    {slideIndex = slides.length
      // console.log(slides.length)
    }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  console.log(slideIndex);
  // dots[slideIndex-1].className += " active";
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
} 