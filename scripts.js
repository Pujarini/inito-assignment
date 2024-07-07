/** Menu handling */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

$(document).ready(function () {
  $(".slick-slider").slick({
    dots: false,
    infinite: true,
    speed: 0, // Set speed to 0 to remove animation
    fade: true, // Use fade effect instead of sliding
    cssEase: "linear", // Linear easing for a more abrupt change
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change slide every 2 seconds
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  let currentAcc = acc[i];
  currentAcc.addEventListener("click", function () {
    currentAcc.classList.toggle("active");
    var panel = currentAcc.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
