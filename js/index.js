const toggleBtn = document.querySelector('.mobile-popup-nav');
const bars = document.querySelector('.ham');
const xicon = document.querySelector('.close');
const links = document.querySelectorAll('.nav');

let flag = false;

function toggleHam() {
  if (flag) {
    bars.style.display = 'none';
    toggleBtn.style.display = 'flex';
    flag = false;
  } else {
    bars.style.display = 'flex';
    toggleBtn.style.display = 'none';
    flag = true;
  }
}
bars.addEventListener('click', toggleHam);
xicon.addEventListener('click', toggleHam);

Array.from(links).forEach((link) => {
  link.addEventListener('click', toggleHam);
});
