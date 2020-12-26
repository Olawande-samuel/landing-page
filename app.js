const openNav = document.querySelector('.open-menu');
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.btn-image');
const close = 'https://raw.githubusercontent.com/Olawande-samuel/landing-page/f5d82acd47bf930411d5ddf2c41c93418e496916/images/icon-close.svg';
const ham = 'https://raw.githubusercontent.com/Olawande-samuel/landing-page/f5d82acd47bf930411d5ddf2c41c93418e496916/images/icon-hamburger.svg';

// 

openNav.addEventListener("click", function() {
    navbar.classList.toggle('show-nav');  
    icon.src = (icon.src === ham)? close : ham ;
    console.log(icon.src);
});

