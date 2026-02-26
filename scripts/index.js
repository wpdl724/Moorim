/* 무림 메인페이지 JS */
// a링크 막기
document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
  if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
          e.preventDefault();
      }
  });
});


var mySwiper = new Swiper('.swiper', { /* 1행 : bnr  */
    slideperview:1,
    keyboard :{enabled:true,},
    autoplay: {delay:5000,},
    loop: true,
    effect: 'fade', //부드러운 전환
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // bullet 클릭 가능하도록 설정
    },
})

1// 2행 product
  document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product_img a");

  // 영어 → 한국어 매핑
  const textMap = {
    pulp: "펄프",
    paper: "종이",
    new_material: "신소재",
  };

  const textMapEn = {
    pulp: "PULP",
    paper: "PAPER",
    new_material: "NEW MATERIAL",
  };

  // 처음 시작할 때: pulp만 원형 + 한글 + 그림자
  const pulpItem = document.getElementById("pulp");
  pulpItem.classList.add("circle", "shadow");
  pulpItem.querySelector("span").textContent = textMap["pulp"];

  // hover 이벤트
  products.forEach((item) => {
    const span = item.querySelector("span");
    const id = item.getAttribute("id");

    item.addEventListener("mouseenter", () => {
      // 모든 아이템 초기화 (사각형 + 영어 + 그림자 제거)
      products.forEach((el) => {
        el.classList.remove("circle", "shadow");
        const elId = el.getAttribute("id");
        el.querySelector("span").textContent = textMapEn[elId];
      });

      // 현재 hover 된 아이템만 원형 + 한국어 + 그림자
      item.classList.add("circle", "shadow");
      span.textContent = textMap[id];
    });

    item.addEventListener("mouseleave", () => {
      // 마우스 빠지면 다시 초기 상태 (펄프만 원형+한글+그림자)
      products.forEach((el) => {
        el.classList.remove("circle", "shadow");
        const elId = el.getAttribute("id");
        el.querySelector("span").textContent = textMapEn[elId];
      });

      pulpItem.classList.add("circle", "shadow");
      pulpItem.querySelector("span").textContent = textMap["pulp"];
    });
  });
});

//6행 
document.addEventListener("scroll", function () {
  const copyTxt = document.querySelector(".copy_txt");
  const scrollY = window.scrollY; // 현재 스크롤 값

// 배경 위치를 스크롤에 따라 천천히 이동 (속도 조절)
  copyTxt.style.backgroundPositionY = `${scrollY * 0.4}px`;
});


//5행 지속가능경영 
// 5행 지속가능경영 hover 인터랙션
const managementItems = document.querySelectorAll('.management_contain');

managementItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        managementItems.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});


// 7행 news 
const newsSwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 5000, // 흐르는 속도
  autoplay: {
    delay: 0, // 끊김 없는 무한 이동
    disableOnInteraction: false,
  },
  
  freemode : true,
  freeModeMomentum: false,
});
