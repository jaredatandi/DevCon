// Toggle menu for mobile
const toggleBtn = document.querySelector('.mobile-popup-nav');
const menu = document.querySelector('.hamburger-menu');
const xicon = document.querySelector('.close');
const links = document.querySelectorAll('.nav');

menu.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
});

xicon.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
});

Array.from(links).forEach((link) => {
  link.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
  });
});

// Dynamic loading of speakers
