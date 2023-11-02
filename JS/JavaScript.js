// Get the navbar and the burger button elements
const burgerBtn = document.querySelector(".burger-menu");
const navbar = document.querySelector(".nav-links");

// Add a click event listener to the burger button
burgerBtn.addEventListener("click", () => {
  // Toggle the "active" class on the navbar
  navbar.classList.toggle("toggle-menu");
  burgerBtn.src = "../IMG/menu-btn-open.png";
  if (navbar.classList.contains("toggle-menu")) {
    burgerBtn.src = "../IMG/menu-btn.png";
  }
});

//=======================================================

// When it scrolls down under 800px, reduce the size of the navbar.
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    document.getElementById("navbar").style.padding = "20px";
    document.getElementById("logo").style.fontSize = "1.5em";
  } else {
    document.getElementById("navbar").style.padding = "40px";
    document.getElementById("logo").style.fontSize = "2empx";
  }
}

//=======================================================

// Get the navbar and the burger button elements
const togglebtn = document.querySelector(".btn");
const prod = document.querySelector(".music-prj");

togglebtn.addEventListener("click", () => {
  prod.style.display = "block";
  DESIGN.style.display = "none";
  PHOTO.style.display = "none";
  if (prod.style.display == "none") {
    DESIGN.style.display = "none";
    prod.style.display = "block";
  }
});

const BTN_DESIGN = document.querySelector(".btn2");
const DESIGN = document.querySelector(".design-prj");

BTN_DESIGN.addEventListener("click", () => {
  DESIGN.style.display = "block";
  prod.style.display = "none";
  PHOTO.style.display = "none";
  if (DESIGN.style.display == "none") {
    prod.style.display = "none";
    DESIGN.style.display = "block";
  }
});

const BTN_PHOTO = document.querySelector(".btn3");
const PHOTO = document.querySelector(".photo-prj");

BTN_PHOTO.addEventListener("click", () => {
  PHOTO.style.display = "block";
  prod.style.display = "none";
  DESIGN.style.display = "none";
  if (PHOTO.style.display == "none") {
    prod.style.display = "none";
    PHOTO.style.display = "block";
  }
});

//=======================================================

// Loeader Page
var loader = document.getElementById("load");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

//=======================================================

// Parallax effect on the home page
(function () {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#home");

  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem.style.backgroundPosition = x;
  }
})();

//=======================================================

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('square-animation');
    }
  });
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.about-section'));
observer.observe(document.querySelector('.skills-section'));
observer.observe(document.querySelector('.projects-section'));
observer.observe(document.querySelector('.contact-section'));

//=======================================================

function protect() {
  alert("Hop hop hop ! Vous ne pouvez pas copier le contenu de mon site !");
  return false;
}
