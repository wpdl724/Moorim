/* 무림 메인페이지 JS */
// 메뉴바 클릭시 lnb 드롭다운
document.addEventListener("DOMContentLoaded", function () {
  const allMenuBtn = document.querySelector(".all_menu_btn a"); // 전체메뉴 버튼
  const lnbWrap = document.querySelector(".lnb_wrap"); // LNB 전체 묶음

  allMenuBtn.addEventListener("click", function (e) {
    e.preventDefault(); // 링크 기본 동작 막기
    lnbWrap.classList.toggle("active"); // active 클래스 토글
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