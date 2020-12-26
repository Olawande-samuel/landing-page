const openNav = document.querySelector('.open-menu');
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.btn-image');
const close = 'http://127.0.0.1:5500/images/icon-close.svg';
const ham = 'http://127.0.0.1:5500/images/icon-hamburger.svg';

// 

openNav.addEventListener("click", function() {
    navbar.classList.toggle('show-nav');  
    icon.src = (icon.src === ham)? close : ham ;
    console.log(icon.src);
});

