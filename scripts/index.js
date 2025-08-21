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

  // 처음 시작할 때: pulp만 원형 + 한글
  const pulpItem = document.getElementById("pulp");
  pulpItem.classList.add("circle");
  pulpItem.querySelector("span").textContent = textMap["pulp"];

  // hover 이벤트
  products.forEach((item) => {
    const span = item.querySelector("span");
    const id = item.getAttribute("id");

    item.addEventListener("mouseenter", () => {
      // 모든 아이템 초기화 (사각형 + 영어)
      products.forEach((el) => {
        el.classList.remove("circle");
        const elId = el.getAttribute("id");
        el.querySelector("span").textContent = textMapEn[elId];
      });

      // 현재 hover 된 아이템만 원형 + 한국어
      item.classList.add("circle");
      span.textContent = textMap[id];
    });

    item.addEventListener("mouseleave", () => {
      // 마우스 빠지면 다시 초기 상태 (펄프만 원형+한글)
      products.forEach((el) => {
        el.classList.remove("circle");
        const elId = el.getAttribute("id");
        el.querySelector("span").textContent = textMapEn[elId];
      });

      pulpItem.classList.add("circle");
      pulpItem.querySelector("span").textContent = textMap["pulp"];
    });
  });
});