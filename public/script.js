const navLinks = document.querySelectorAll('.links');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('visited'));

    e.currentTarget.classList.add('visited');
  });
});

const aboutSection = document.querySelector('#about')
const aboutImage = document.querySelector('.profile-container img');
const contactInfo = document.querySelector('.contact h3');

aboutSection.addEventListener("mouseenter",()=>{
  aboutImage.classList.add('animate');
  contactInfo.classList.add('contact-animate')
});


const skillWrapper = document.querySelector('.skill-wrapper');
const skillContainer = document.querySelector('.skills-container');


const clone = skillWrapper.cloneNode(true);
clone.id = ''; 

skillWrapper.append(...clone.children);

const originalWidth = skillWrapper.scrollWidth / 2;

skillWrapper.style.setProperty('--scroll-distance', `-${originalWidth}px`);

skillContainer.addEventListener('mouseenter', () => {
  skillWrapper.classList.add('animate-scroll');
});

skillContainer.addEventListener('mouseleave', () => {
  skillWrapper.classList.remove('animate-scroll');
});

function downloadResume(){
    const link = document.createElement('a');
    link.href = './my-resume.pdf';
    link.download = 'Harish-Kumar-Resume';
    link.click();
    alert('Downloading...')
}