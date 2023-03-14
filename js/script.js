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

const body = document.querySelector('body');
const links = document.querySelectorAll('a');
const imagePaths = {
    '#1': '/img/random_image1.jpg',
    '#2': '/img/random_image2.jpg',
    '#3': '/img/random_image3.jpg',
    '#4': '/img/random_image4.jpg',
    '#5': '/img/random_image5.jpg',
};

links.forEach(link => {
    // Add a mouseover event listener to change the background image when the mouse is over the hyperlink
    link.addEventListener('mouseover', () => {
      const imagePath = imagePaths[link.getAttribute('href')];
      if (imagePath) {
        body.style.backgroundImage = `url(${imagePath})`;
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
      }
    });
  
    // Add a mouseout event listener to change the background image back to the original when the mouse leaves the hyperlink
    link.addEventListener('mouseout', () => {
      body.style.backgroundImage = 'none';
    });
});