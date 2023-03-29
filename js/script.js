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
    overlay.classList.add('overlay');
    overlay.style.display = 'flex';
  } else {
    menuBtn2.classList.remove('open');
    menuOpen2 = false;
    overlay.classList.remove('overlay');
    overlay.style.display = 'none';
  }
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    menuBtn2.classList.remove('open');
    menuOpen2 = false;
    overlay.classList.remove('overlay');
    overlay.style.display = 'none';
  }
});

//---------------------------//

//--- JS for the content --- //

// Icon Changer CLASSES #1//

//1-1//
let iconDiv = document.getElementById("icon-div1");
let icon = document.getElementById("icon1");
let iconClass = document.getElementById("iconClass1");
let isLiked = false;

iconDiv.addEventListener("click", function() {
  if (isLiked) {
    icon.classList.remove("bi-pc-display-horizontal");
    icon.classList.add("bi-check2-circle");
    iconClass.classList.add("icon_order_active")
    isLiked = false;
  } else {
    icon.classList.remove("bi-check2-circle");
    icon.classList.add("bi-pc-display-horizontal");
    iconClass.classList.remove("icon_order_active")
    iconClass.classList.add("icon_order_deactive")
    isLiked = true;
  }
});
//1-2//
let iconDiv2 = document.getElementById("icon-div2");
let icon2 = document.getElementById("icon2");
let iconClass2 = document.getElementById("iconClass2");
let isLiked2 = false;

iconDiv2.addEventListener("click", function() {
  if (isLiked2) {
    icon2.classList.remove("bi-shop");
    icon2.classList.add("bi-check2-circle");
    iconClass2.classList.add("icon_order_active")
    isLiked2 = false;
  } else {
    icon2.classList.remove("bi-check2-circle");
    icon2.classList.add("bi-shop");
    iconClass2.classList.remove("icon_order_active")
    iconClass2.classList.add("icon_order_deactive")
    isLiked2 = true;
  }
});
//1-3//
let iconDiv3 = document.getElementById("icon-div3");
let icon3 = document.getElementById("icon3");
let iconClass3 = document.getElementById("iconClass3");
let isLiked3 = false;

iconDiv3.addEventListener("click", function() {
  if (isLiked3) {
    icon3.classList.remove("bi-box-seam");
    icon3.classList.add("bi-check2-circle");
    iconClass3.classList.add("icon_order_active")
    isLiked3 = false;
  } else {
    icon3.classList.remove("bi-check2-circle");
    icon3.classList.add("bi-box-seam");
    iconClass3.classList.remove("icon_order_active")
    iconClass3.classList.add("icon_order_deactive")
    isLiked3 = true;
  }
});
//1-4//
let iconDiv4 = document.getElementById("icon-div4");
let icon4 = document.getElementById("icon4");
let iconClass4 = document.getElementById("iconClass4");
let isLiked4 = false;

iconDiv4.addEventListener("click", function() {
  if (isLiked4) {
    icon4.classList.remove("bi-chat-dots");
    icon4.classList.add("bi-check2-circle");
    iconClass4.classList.add("icon_order_active")
    isLiked4 = false;
  } else {
    icon4.classList.remove("bi-check2-circle");
    icon4.classList.add("bi-chat-dots");
    iconClass4.classList.remove("icon_order_active")
    iconClass4.classList.add("icon_order_deactive")
    isLiked4 = true;
  }
});

// Icon Changer SUBClasse #2//
//2-1//
let iconDiv11 = document.getElementById("icon-div12");
let icon11 = document.getElementById("icon12");
let iconClass11 = document.getElementById("iconClass12");
let isLiked11 = false;

iconDiv11.addEventListener("click", function() {
  if (isLiked11) {
    icon11.classList.remove("bi-pencil");
    icon11.classList.add("bi-check2-circle");
    iconClass11.classList.add("icon_order_active")
    isLiked11 = false;
  } else {
    icon11.classList.remove("bi-check2-circle");
    icon11.classList.add("bi-pencil");
    iconClass11.classList.remove("icon_order_active")
    iconClass11.classList.add("icon_order_deactive")
    isLiked11 = true;
  }
});
//2-2//
let iconDiv1_2 = document.getElementById("icon-div22");
let icon1_2 = document.getElementById("icon22");
let iconClass1_2 = document.getElementById("iconClass22");
let isLiked1_2 = false;

iconDiv1_2.addEventListener("click", function() {
  if (isLiked1_2) {
    icon1_2.classList.remove("bi-code-slash");
    icon1_2.classList.add("bi-check2-circle");
    iconClass1_2.classList.add("icon_order_active")
    isLiked1_2 = false;
  } else {
    icon1_2.classList.remove("bi-check2-circle");
    icon1_2.classList.add("bi-code-slash");
    iconClass1_2.classList.remove("icon_order_active")
    iconClass1_2.classList.add("icon_order_deactive")
    isLiked1_2 = true;
  }
});
//2-3//
let iconDiv1_3 = document.getElementById("icon-div32");
let icon1_3 = document.getElementById("icon32");
let iconClass1_3 = document.getElementById("iconClass32");
let isLiked1_3 = false;

iconDiv1_3.addEventListener("click", function() {
  if (isLiked1_3) {
    icon1_3.classList.remove("bi-bezier2");
    icon1_3.classList.add("bi-check2-circle");
    iconClass1_3.classList.add("icon_order_active")
    isLiked1_3 = false;
  } else {
    icon1_3.classList.remove("bi-check2-circle");
    icon1_3.classList.add("bi-bezier2");
    iconClass1_3.classList.remove("icon_order_active")
    iconClass1_3.classList.add("icon_order_deactive")
    isLiked1_3 = true;
  }
});
//---------------------------------------//

//Scrollable Button//
//Budget//
const sliderRange = document.querySelector('.slider-range');
const sliderValue = document.querySelector('.slider-value');

sliderRange.addEventListener('input', () => {
  const value = sliderRange.value;
  sliderValue.textContent = 'Approximately ' + value + 'K SEK';
});

sliderRange.addEventListener('mousemove', () => {
  const value = sliderRange.value;
  sliderValue.style.left = `calc(${value}% - 10px)`;
});

sliderRange.addEventListener('touchmove', () => {
  const value = sliderRange.value;
  sliderValue.style.left = `calc(${value}% - 10px)`;
});

//Time//
const sliderRangeTime = document.querySelector('.range2');
const sliderValueTime = document.querySelector('.value2');

sliderRangeTime.addEventListener('input', () => {
  const value = sliderRangeTime.value;
  sliderValueTime.textContent = 'About ' + value + ' Weeks';
});

sliderRangeTime.addEventListener('mousemove', () => {
  const value = sliderRangeTime.value;
  sliderValueTime.style.left = `calc(${value}% - 10px)`;
});

sliderRangeTime.addEventListener('touchmove', () => {
  const value = sliderRangeTime.value;
  sliderValueTime.style.left = `calc(${value}% - 10px)`;
});

//--------------------------------------//
//Drop Down Button//
const dropdownSelect = document.querySelector("#dropdown-select");
const selectedOption = document.querySelector("#selected-option");

dropdownSelect.addEventListener("change", () => {
  selectedOption.innerText = dropdownSelect.value ? dropdownSelect.options[dropdownSelect.selectedIndex].text : "";
});

//-------------------------//