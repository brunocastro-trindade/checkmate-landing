function scrollReveal() {

    const options = {
        root: null,
        threshold: 0.12,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });

}, options);

const elementos = document.querySelectorAll('.reveal');

elementos.forEach(function(el) {
    observer.observer(el);
});
}

document.addEventListener('DOMContentLoaded', scrollReveal);


function navbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

document.addEventListener('DOMContentLoaded', navbarScroll);