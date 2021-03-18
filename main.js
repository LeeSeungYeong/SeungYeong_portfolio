'use strict'

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;


document.addEventListener('scroll', () => {
  const opacityValue = 1 - window.scrollY / homeHeight;
  if (opacityValue < 0) {
    return;
  }
  home.style.opacity = opacityValue
});


//Handle scrolling when click on the home contact button
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Arrow button when scrolling down
const arrowBtn = document.querySelector('.arrow__btn');
document.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    arrowBtn.classList.add('active');
  } else {
    arrowBtn.classList.remove('active');
  }
});

// Arrow button click event
arrowBtn.addEventListener('click', () => {
  scrollIntoView('#home');
});

function scrollIntoView(selector) {
  const scollTo = document.querySelector(selector);
  scollTo.scrollIntoView({ behavior: "smooth" });
}

