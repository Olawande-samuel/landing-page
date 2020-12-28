const openNav = document.querySelector('.open-menu');
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.btn-image');
const close = 'https://raw.githubusercontent.com/Olawande-samuel/landing-page/f5d82acd47bf930411d5ddf2c41c93418e496916/images/icon-close.svg';
const ham = 'https://raw.githubusercontent.com/Olawande-samuel/landing-page/f5d82acd47bf930411d5ddf2c41c93418e496916/images/icon-hamburger.svg';
const subscribe = document.querySelector('#subscribe');
const submit = document.querySelector('#submitEmail');
const formValidation = document.querySelector('#form-validation');


//hamburger/close switch toggle

openNav.addEventListener("click", function() {
    navbar.classList.toggle('show-nav');  
    icon.src = (icon.src === ham)? close : ham ;
    console.log(icon.src);
});


//form validation
submit.addEventListener("click", validation);
function validation () {
    const x = document.subform.subscribe.value;
    const atPosition = x.indexOf("@");
    const dotPosition = x.lastIndexOf(".");
    if (atPosition<1||dotPosition<atPosition+2||dotPosition+2>=x.length) {
        // alert('please enter a valid email address`atPosition dotPosition`');
        formValidation.innerText = "Please enter a valid email address";
        return false;
    }

}

//swiperjs slides
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});