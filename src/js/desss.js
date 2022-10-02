document.querySelector(document).ready(function () {
    function checkWidth() {
        var windowWidth = document.querySelector('body').innerWidth(),
            elem = document.querySelector(".number-bullets"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
        // страницу для поиска нужного элемента

        const mySwiper = document.querySelector('.mySwiper');
        console.log(mySwiper)
        const slider__images = document.querySelector('.slider__images');

        if (windowWidth < 480) {
            // elem.classList.remove('col-xs-12');
            // elem.classList.add('col-xs-4');
            const width = window.innerWidth
            if (width < 481) {
                mySwiper.classList.addClass('swiper');
                slider__images.classList.addClass('swiper-wrapper');
                // const swiper = new Swiper(".mySwiper"
                var swiper = new Swiper(".mySwiper", {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                });
            }
        }
        else {
            // elem.classList.remove('col-xs-4');
            // elem.classList.add('col-xs-12');
            mySwiper.classList.remove('swiper');
            slider__images.classList.remove('swiper-wrapper');

        }
    }

    checkWidth(); // проверит при загрузке страницы

    document.querySelector(window).resize(function () {
        checkWidth(); // проверит при изменении размера окна клиента
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 481) {

        // const swiper = new Swiper(".mySwiper"
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            spaceBetween: 0,
        });
    }

});