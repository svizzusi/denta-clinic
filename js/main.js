window.onscroll = function() {scrollFunction()};
const navbar = document.querySelector('#navbar');

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    navbar.style.height = "80px";
    navbar.style.background = "white";
    navbar.style.boxShadow = "none";
    navbar.style.transition = ".3s ease-in-out";
  } else {
    navbar.style.height = "120px";
    navbar.style.background = "white";
    navbar.style.boxShadow = "none";
  }
}

// swiper
let swiper = new Swiper('.swiper-container', {
  // Set your desired options here
  loop: true, // enable loop mode
  pagination: {
    el: '.swiper-pagination', // specify the pagination element
  },
  navigation: {
    nextEl: '.swiper-button-next', // specify the next button element
    prevEl: '.swiper-button-prev', // specify the previous button element
  },
});
