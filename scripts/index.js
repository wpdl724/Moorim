/* 무림 메인페이지 JS */

var mySwiper = new Swiper('.swiper', { /* 1행 : bnr  */
    slideperview:1,
    keyboard :{enabled:true,},
    autoplay: {delay:6000,},
    loop: true,
    effect: 'fade', //부드러운 전환
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // bullet 클릭 가능하도록 설정
    },
})

