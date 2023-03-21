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

Barba.init({
  transitions: [{
    name: 'fade',
    leave(data) {
      return gsap.to(data.current.container, {opacity: 0});
    },
    enter(data) {
      return gsap.from(data.next.container, {opacity: 0});
    }
  }],
  views: [{
    namespace: 'home',
    beforeEnter() {
      document.body.style.backgroundImage = `url('path/to/home-image.jpg')`;
    },
    beforeLeave() {
      document.body.style.backgroundImage = 'none';
    }
  }]
});

// Add the following code to change the body background image on hover of the links container

const linksContainer = document.getElementById('links');
linksContainer.addEventListener('mouseenter', (event) => {
  const link = event.target.closest('a');
  if (link) {
    const className = link.classList[0]; // get the first class name of the link element
    document.body.style.backgroundImage = `url('path/to/${className}-hover-image.jpg')`; // change the body background image
  }
});

linksContainer.addEventListener('mouseleave', (event) => {
  document.body.style.backgroundImage = `url('path/to/home-image.jpg')`; // reset the body background image
});

