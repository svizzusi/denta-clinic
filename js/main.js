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
function reviewSection() {
  let swiper = new Swiper('.review-container .swiper-container', {
    // Set your desired options here
    loop: true, // enable loop mode
    pagination: {
      el: '.swiper-pagination', // specify the pagination element
    },
    navigation: false,
    scrollbar: false,
    slidesPerView: 1,
    autoplay: {
      delay: 5000, // set the time delay between slides in milliseconds
      disableOnInteraction: false, // set to false to prevent autoplay from stopping on user interaction
      },
  });
}
reviewSection();

function patientCareSection() {
  let swiper = new Swiper('.patient-care-container .swiper-container', {
    // Set your desired options here
    loop: true, // enable loop mode
    pagination: {
      el: '.swiper-pagination', // specify the pagination element
    },
    navigation: false,
    scrollbar: false,
    slidesPerView: 3,
    autoplay: {
      delay: 5000, // set the time delay between slides in milliseconds
      disableOnInteraction: false, // set to false to prevent autoplay from stopping on user interaction
      },
  });
}
patientCareSection();