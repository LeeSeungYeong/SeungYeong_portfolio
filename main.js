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


// project button filtering
const workBtnContainer = document.querySelector('.work__categories');
const workProjectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (event) => {
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // remove selection from the previous item and select new item
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
  target.classList.add('selected');


  // 

  workProjectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach(project => {
      if (filter === "*" || project.dataset.type === filter) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    workProjectContainer.classList.remove('anim-out');
  }, 300);


});

function scrollIntoView(selector) {
  const scollTo = document.querySelector(selector);
  scollTo.scrollIntoView({ behavior: "smooth" });
}

