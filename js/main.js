
const navbar = document.querySelector('#navbar');
const hamburger = document.querySelector('.hamburger');
const closeHamburger = document.querySelector('.close-hamburger');
const navList = document.querySelector('.nav-list');

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    navbar.style.height = "80px";
    navList.style.top = "80px";
    navbar.style.background = "white";
    navbar.style.transition = ".3s ease-in-out";
  } else {
    navbar.style.height = "120px";
    navList.style.top = "120px";
    navbar.style.background = "white";
    navbar.style.transition = "none";
  }
}

hamburger.addEventListener('click', function () {
  const displayMenu = () => {
    navList.style.display = "flex";
    hamburger.style.display = "none";
    closeHamburger.style.display = "block";
  };
  displayMenu();
});

closeHamburger.addEventListener('click', function () {
  const hideMenu = () => {
    navList.style.display = "none";
    hamburger.style.display = "block";
    closeHamburger.style.display = "none";
 };
  hideMenu();
});

function closeLargeScreenHamburger () {
  const mediaQuery = window.matchMedia('(min-width:1024px)')
  function updateHamburgerDisplay () {
    if (mediaQuery.matches) {
      hamburger.style.display = "none";
      closeHamburger.style.display = "none";
    } else {
      hamburger.style.display = "block";
      closeHamburger.style.display = "none";
    }
  }
  updateHamburgerDisplay();
  window.addEventListener('resize', updateHamburgerDisplay);
}
closeLargeScreenHamburger();

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
    loop: true,// enable loop mode
    pagination: {
      el: '.swiper-pagination', // specify the pagination element
    },
    navigation: false,
    scrollbar: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
      }, 
      423: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      622: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
    autoplay: {
      delay: 5000, // set the time delay between slides in milliseconds
      disableOnInteraction: false, // set to false to prevent autoplay from stopping on user interaction
      },
  });
}
patientCareSection();

// top header toggle

const toggleBtn = document.getElementById('header-toggle-btn');
const topHeader = document.querySelector('.top-header');

toggleBtn.addEventListener('click', function(){
  topHeader.classList.toggle('show')
}) 

const mediaQuery = window.matchMedia('(max-width:768px)')
  if (mediaQuery.matches) {
    scrollFunction = null;
  } else {
    window.onscroll = function() {scrollFunction()};
  }

