
const menuBtn = document.querySelector('.nav-links a[href="#menu"]');
const homeBtn = document.querySelector('.nav-links a[href="#home"]');
const contactBtn = document.querySelector('.nav-links a[href="#contact"]');
const aboutBtn = document.querySelector('.nav-links a[href="#about"]');

const gohomefun=()=>{
  const homesection = document.querySelector('.home');
homesection.scrollIntoView({ behavior: "smooth" });
}
homeBtn.addEventListener('click', gohomefun);

const menufun = () => {
  const menuSection = document.querySelector('.menu');
  menuSection.scrollIntoView({ behavior: "smooth" });
};
menuBtn.addEventListener('click', menufun);

const contactfun=()=>{
  const contactsection = document.querySelector('.contact-section');
contactsection.scrollIntoView({ behavior: "smooth" });
}
contactBtn.addEventListener('click', contactfun);

const aboutfun =() =>{
  const aboutsection = document.querySelector('.about-section');
aboutsection.scrollIntoView({ behavior: "smooth" });
}
aboutBtn.addEventListener('click', aboutfun);


  const menuToggle = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");
  
  const togglefun = () => {
      navLinks.classList.toggle("show");
}
  menuToggle.addEventListener('click',togglefun)  


