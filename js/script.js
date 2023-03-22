//Script for the hamburger button//

const menuBtn = document.querySelector('.menu_button');
const menuBtn2 = document.querySelector('.menu_button');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
let menuOpen = false;
let menuOpen2 = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
//Uses btn2/menuOpen2 so the program will not confuse it with the function for only opening and closing the button <-> This code is for the menu ADD and REMOVE the overlay//
menuBtn2.addEventListener('click', () => {
  if (!menuOpen2) {
      menuBtn2.classList.add('open');
      menuOpen2 = true;
      overlay.style.display = 'flex';
  } else {
      menuBtn2.classList.remove('open');
      menuOpen2 = false;
      overlay.style.display = 'none';
  }
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
      menuBtn2.classList.remove('open');
      menuOpen2 = false;
      overlay.style.display = 'none';
  }
});
//---------------------------//