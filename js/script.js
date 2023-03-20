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

//Script for background changer//

const links = document.querySelectorAll('a');
const body = document.querySelector('body');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const imageUrl = link.dataset.imageUrl;
    body.classList.add('background-image'); // Add the background-image class to the body element
    body.style.backgroundImage = `url(${imageUrl})`;
  });

  link.addEventListener('mouseleave', () => {
    body.classList.remove('background-image'); // Remove the background-image class from the body element
    body.style.backgroundImage = 'none';
  });
});
