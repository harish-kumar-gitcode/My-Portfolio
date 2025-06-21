const navLinks = document.querySelectorAll('.links');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('visited'));

    e.currentTarget.classList.add('visited');
  });
});

const aboutSection = document.querySelector('#about')
const aboutImage = document.querySelector('.profile-container img');

aboutSection.addEventListener("mouseenter",()=>{
  aboutImage.classList.add('animate');
});