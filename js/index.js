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

const speakers = {
  data: [
    {
      id: 1,
      img: './images/speaker_01.png',
      name: 'Jefferson Lakuel',
      career: 'Google Developer Expert',
      description:
        'Has been into Angular for the past years and loves to share his knowledge about Angular through conferences.',
    },
    {
      id: 2,
      img: './images/speaker_03.png',
      name: 'Rachel Maria',
      career: 'Google Developer Expert',
      description:
        'Has been into Angular for the past years and loves to share his knowledge about Angular through conferences.',
    },
  ],
};

let speakersSectionMain = `
      <section id="speakers" class="speakers dflex">

        <div class="header lato">
          <h2>Featured Speakers</h2>
          <div class="line"></div>
        </div>
        <div class="speakers-cards dflex">
        `;

speakers.data.forEach((speaker) => {
  speakersSectionMain += `
            <div class="speakers-content dflex">    
            <div class="speaker-img">
              <img src="${speaker.img}" alt="speaker_01" />
            </div>
            <div class="speaker-des dflex lato">
              <h3>${speaker.name}</h3>
              <p class="career">${speaker.career}</p>
              <div class="seperator"></div>
              <p class="work">
              ${speaker.description}
              </p>
            </div>
          </div>
          `;
});

speakersSectionMain += '</div> </div> </section>';

document.querySelector('.speakers-section').innerHTML = speakersSectionMain;
