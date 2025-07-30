/* 무림 메인페이지 JS */
var mySwiper = new Swiper('.swiper', { 
    slideperview:1,
    autoplay: {delay:6000,},
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // bullet 클릭 가능하도록 설정
    },
})

