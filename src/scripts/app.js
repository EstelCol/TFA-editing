'use strict';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



// BurgerMenu Design
const burgerMenu = document.querySelector('.burger__menu');

if (burgerMenu) {
  burgerMenu.addEventListener('click', function () {
    this.classList.toggle('designopen');
  });
}



// Button MenuBurger
let TriggerButton = document.querySelector(".burger__menu");
let menu = document.querySelector(".nav__menu");

if (TriggerButton && menu) {
  TriggerButton.addEventListener("click", triggerListener);

  function triggerListener() {
    menu.classList.toggle('menu--open');
  }
}



// NAV ACTIVE
let navTriggers = document.querySelectorAll(".menu__el");
for (let navTrigger of navTriggers) {
  navTrigger.addEventListener("click", (event) => {
    let activeClass = document.querySelector(".menu__el--active");
    if (activeClass) {
      activeClass.classList.remove("menu__el--active");
    }
    event.currentTarget.classList.add("menu__el--active");
  });
}



// NAV ACTIVE SCROLL
if (TriggerButton && document.querySelectorAll('.section').length > 0) {
  let section = document.querySelectorAll('.section');

  function activeLink(li) {
    navTriggers.forEach((item) => item.classList.remove('menu__el--active'));
    li.classList.add('menu__el--active');
  }

  navTriggers.forEach((item) =>
    item.addEventListener('click', function () {
      activeLink(this);
    })
  );

  window.onscroll = () => {
    section.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        const target = document.querySelector(`[href='#${id}']`);
        if (target && target.parentElement) {
          activeLink(target.parentElement);
        }
      }
    });
  };
}




// PARALLAX HEADER
var layers = document.querySelectorAll('.div__parallax');

function parallax() {
  if (window.matchMedia("(min-width: 600px)").matches) {
    var scrollTop = window.pageYOffset;
    layers.forEach(function (layer) {
      var speed = layer.getAttribute('data-speed');
      var yPos = scrollTop * speed / 100;
      layer.style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
    });
  }
}
window.addEventListener('scroll', parallax);




// SCROLL TIKTOK
var upItem = document.querySelector('.editor__list--up');
var centerItem = document.querySelector('.editor__list--center');

if (upItem && centerItem) {
  window.addEventListener("scroll", function () {
    if (window.matchMedia("(min-width: 600px)").matches) {
      upItem.style.transform = "translateX(" + -window.pageYOffset / 40 + "px)";
      centerItem.style.transform = "translateX(" + window.pageYOffset / 20 + "px)";
    }
  });
}



// Bouton rencontre utilisateur
var showButtons = document.querySelectorAll('.showButton');
var hideButtons = document.querySelectorAll('.hideButton');
var actionButtons = document.querySelectorAll('.action__button');

showButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    actionButtons[index].style.display = 'block';
  });
});

hideButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    actionButtons[index].style.display = 'none';
  });
});

hideButtons.forEach



// Graphique bâtonnet
const bars = document.querySelectorAll('.bargraph');
const barDescription = document.getElementById('bar-description');

bars.forEach(bar => {
  bar.addEventListener('mouseover', function () {
    const label = this.getAttribute('data-label');
    barDescription.textContent = label;
  });

  bar.addEventListener('mouseout', function () {
    barDescription.textContent = '';
  });
});



//Slide Image graphique
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.slider__prev');
  const nextBtn = document.querySelector('.slider__next');
  const items = document.querySelectorAll('.slider__item');
  let currentIndex = 0;

  if (prevBtn && nextBtn) {
    nextBtn.addEventListener('click', function() {
      currentIndex++;
      if (currentIndex >= items.length) {
        currentIndex = 0;
      }
      updateSlider();
    });

    prevBtn.addEventListener('click', function() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = items.length - 1;
      }
      updateSlider();
    });
  }

  function updateSlider() {
    for (let i = 0; i < items.length; i++) {
      if (i === currentIndex) {
        items[i].style.display = 'block';
      } else {
        items[i].style.display = 'none';
      }
    }
  }
});





//ANIMATIONS GSAP
const Animelements = document.querySelectorAll('.img__hypo--ae, .img__hypo--cc, .img__girls');

Animelements.forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 100,
    duration: 5,
    scrollTrigger: {
      trigger: element,
      start: 'top 100%',
      end: 'bottom 100%',
      scrub: true
    }
  });
});

