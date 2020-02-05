
let currentSlide = 1;


function showSlide(slideNumber) {
 
  const slides = document.querySelectorAll('.slide');
 
  const dots = document.querySelectorAll('.dot');

  
  if (slideNumber > slides.length) {
    currentSlide = 1;
  }
  
  if (slideNumber < 1) {
    currentSlide = slides.length;
  }

 
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  
  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  
  slides[currentSlide - 1].style.display = 'block';
 
  dots[currentSlide - 1].classList.add('active');
}

function increaseSlide() {
  currentSlide += 1;
  showSlide(currentSlide);
}

function decreaseSlide() {
  currentSlide -= 1;
  showSlide(currentSlide);
}


function specificSlide(slideNumber) {
  currentSlide = slideNumber;
  showSlide(currentSlide);
}


document.querySelector('.prev').addEventListener('click', decreaseSlide);

document.querySelector('.next').addEventListener('click', increaseSlide);


showSlide(currentSlide);

