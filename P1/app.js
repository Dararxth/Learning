const menu = document.querySelector('#mobile-menu');
const menulink = document.querySelector('.navbar__menu');

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menulink.classList.toggle('active');
});