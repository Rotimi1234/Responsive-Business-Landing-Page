// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

const preloader = document.querySelector('.preloader')

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader")
})





const sr = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  delay: 400,
  opacity: '30px',
  reset: true
})

sr.reveal('.footer',{delay: 200, origin: 'top'})
sr.reveal('.showcase-area',{delay: 100, origin: 'right'})
sr.reveal('.section-container',{delay: 200, origin: 'left'})
sr.reveal('.text',{delay: 200, origin: 'bottom'})
sr.reveal('.texts',{delay: 400, origin: 'left'})
sr.reveal('.columns image',{delay: 200, origin: 'top'})
sr.reveal('.container',{delay: 200, origin: 'bottom'})
sr.reveal('.logo',{delay: 200, origin: 'left'})
sr.reveal('.footer-col',{delay: 200, origin: 'bottom'})
sr.reveal('.social-links',{delay: 200, origin: 'right'})
sr.reveal('.social-links',{delay: 200, origin: 'right'})
sr.reveal('.social-links',{delay: 200, origin: 'right'})
sr.reveal('.social-links',{delay: 200, origin: 'right'})

sr.reveal('.about',{delay: 200, origin: 'bottom'})
sr.reveal('.content',{delay: 200, origin: 'right'})
sr.reveal('.contact-info',{delay: 200, origin: 'right'})
sr.reveal('.contact-form',{delay: 200, origin: 'right'})
sr.reveal('.contact-section',{delay: 200, origin: 'right'})
sr.reveal('.big-title',{delay: 200, origin: 'right'})  

sr.reveal('.step',{delay: 200, origin: 'bottom'})
sr.reveal('.step-container',{delay: 200, origin: 'top'})
sr.reveal('.boxs',{delay: 200, origin: 'left'})
sr.reveal('.heading',{delay: 200, origin: 'right'})
sr.reveal('.contact-section',{delay: 200, origin: 'bottom'})
sr.reveal('.big-title',{delay: 200, origin: 'top'}) 

sr.reveal('.services',{delay: 200, origin: 'bottom'})
sr.reveal('.card',{delay: 200, origin: 'top'})
sr.reveal('.box',{delay: 200, origin: 'left'})


sr.reveal('.team',{delay: 200, origin: 'right'})
sr.reveal('.info',{delay: 200, origin: 'bottom'})
sr.reveal('.title',{delay: 200, origin: 'top'}) 
sr.reveal('.name',{delay: 200, origin: 'right'})
sr.reveal('.social',{delay: 200, origin: 'bottom'})

sr.reveal('.testimonial-heading',{delay: 200, origin: 'top'}) 
sr.reveal('.testimonial-box-container',{delay: 200, origin: 'right'})
sr.reveal('.testimonial-box',{delay: 200, origin: 'bottom'})
sr.reveal('.box-top',{delay: 200, origin: 'top'}) 
sr.reveal('.profile',{delay: 200, origin: 'top'}) 
sr.reveal('.profile-img',{delay: 200, origin: 'right'})
sr.reveal('.name-user',{delay: 200, origin: 'bottom'})
sr.reveal('.reviews',{delay: 200, origin: 'top'}) 
sr.reveal('.client-comment',{delay: 200, origin: 'top'})