function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

window.addEventListener('scroll', function() {
    let cards = document.querySelector('.cards');
    let cardsPosition = cards.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if (cardsPosition < screenPosition) {
        cards.classList.add('visible');
    }
});
