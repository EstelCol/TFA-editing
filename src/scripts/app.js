'use strict';
//BurgerMenu Design
 const burgerMenu = document.querySelector('.burger__menu');

 burgerMenu.addEventListener('click', function() {
   this.classList.toggle('designopen');
 });

//Button MenuBurger
let TriggerButton = document.querySelector(".burger__menu");
let menu = document.querySelector(".nav__menu");

TriggerButton.addEventListener("click", triggerListener);

function triggerListener(){
    menu.classList.toggle('menu--open');
}




//PARALLAX HEADER
var layers = document.querySelectorAll('.div__parallax');

function parallax(){
    
  if (window.matchMedia("(min-width: 600px)").matches){

    var scrollTop = window.pageYOffset;

    layers.forEach(function(layer){
        var speed = layer.getAttribute('data-speed');
        var yPos = scrollTop * speed / 100;
        layer.style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
    });

  }else{

  }   

}
window.addEventListener('scroll', parallax);




//SCROLL TIKTOK
var upItem = document.querySelector('.editor__list--up');
var centerItem = document.querySelector('.editor__list--center');

window.addEventListener("scroll", function () {

  if (window.matchMedia("(min-width: 600px)").matches) {

    upItem.style.transform = "translateX(" + -window.pageYOffset / 40 + "px)";
    centerItem.style.transform = "translateX(" + window.pageYOffset / 20 + "px)";
  
  } else {
   
  }

});



//Bouton rencontre utlisateur
var showButtons = document.querySelectorAll('.showButton');
var hideButtons = document.querySelectorAll('.hideButton');
var actionButtons = document.querySelectorAll('.action__button');

showButtons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    actionButtons[index].style.display = 'block';
  });
});

hideButtons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    actionButtons[index].style.display = 'none';
  });
});



//graphique batonnet
const bars = document.querySelectorAll('.bargraph');
const barDescription = document.getElementById('bar-description');

bars.forEach(bar => {
  bar.addEventListener('mouseover', function() {
    const label = this.getAttribute('data-label');
    barDescription.textContent = label;
  });

  bar.addEventListener('mouseout', function() {
    barDescription.textContent = '';
  });
});
















