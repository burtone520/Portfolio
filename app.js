let menu = document.querySelector('#mobile-menu');
let menuLinks = document.querySelector('.navbar_menu');
let menuItems = document.querySelectorAll('.navbar_links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});