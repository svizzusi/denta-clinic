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