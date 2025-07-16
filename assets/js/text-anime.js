$(document).ready(() => {
    const options = {
        strings: [
            'Intégrateur web <i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i>',
            'Développeur PHP <i class="fab fa-php"></i>',
            'Développeur Laravel <i class="fab fa-laravel"></i>',
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        showCursor: false,
        html: true   // <-- important
    };

    $('.introduction__text_anime').each((index, element) => {
        new Typed(element, options);
    });
});