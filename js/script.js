//Script for the hamburger button//

const menuBtn = document.querySelector('.menu_button');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
//---------------------------//

//Attempt script for background changer//

const links = document.querySelectorAll('a');
const body = document.querySelector('body');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const imageUrl = link.dataset.imageUrl;
    body.style.backgroundImage = `url(${imageUrl})`;
  });

  link.addEventListener('mouseleave', () => {
    body.style.backgroundImage = 'none';
  });
});
