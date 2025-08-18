/* 무림 메인페이지  - 공통적인 동적 기능 JS */
/* a 링크 이동 막기 */
document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
  if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
          e.preventDefault();
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const gnbItems = document.querySelectorAll(".gnb > li");   // GNB 메뉴
  const lnbWrap = document.querySelector(".lnb_wrap");       // 전체 LNB 박스
  const lnbLists = document.querySelectorAll(".lnb_wrap > ul"); // 개별 LNB

  gnbItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      // 전체 wrap 열기
      lnbWrap.classList.add("active");

      // 모든 LNB 닫기
      lnbLists.forEach(list => list.classList.remove("active"));

      // 현재 GNB에 해당하는 LNB만 열기
      if (lnbLists[index]) {
        lnbLists[index].classList.add("active");
      }
    });
  });

  // nav 밖으로 나가면 닫힘
  const nav = document.querySelector("nav");
  nav.addEventListener("mouseleave", () => {
    lnbWrap.classList.remove("active");
    lnbLists.forEach(list => list.classList.remove("active"));
  });
});

/* 헤더 색상 변경 - 마우스 올렸을때 효과 */
// 요소 선택
const header = document.querySelector("#wrap header");
const logo = document.querySelector("header h1 a img");

// 로고 경로
const whiteLogo = "./images/logo/morrim_logo_white.png";
const blackLogo = "./images/logo/logo_color.png";

// 오른쪽 메뉴 아이콘
const searchIcon = document.querySelector(".search button img");
const menuIcon = document.querySelector(".all_menu_btn a img");
const langSelect = document.querySelector("#lang_btn");

// 아이콘 경로
const whiteSearch = "./images/icons/search_white.png";
const blackSearch = "./images/icons/search_black.png";
const whiteMenu = "./images/icons/menu_white.png";
const blackMenu = "./images/icons/menu_black.png";

// 헤더 전체에 hover 이벤트
header.addEventListener("mouseenter", () => {
  // 배경
  header.style.backgroundColor = "#fff";

  // 로고 교체
  logo.src = blackLogo;

  // gnb 글자 색상 변경
  document.querySelectorAll(".gnb li a").forEach(link => {
    link.style.color = "#000";
    link.style.fontWeight = 500;
  });

  // 검색창
  const searchInput = document.querySelector(".search input");
  searchInput.style.borderBottom = "1px solid #000";
  searchInput.style.color = "#000";
  searchInput.style.fontWeight = "600";
  
  // 아이콘 교체
  searchIcon.src = blackSearch;
  menuIcon.src = blackMenu;

  // 셀렉트박스
  langSelect.style.border = "1px solid #000";
  langSelect.style.color = "#000";
  langSelect.style.fontWeight = "600";
});

header.addEventListener("mouseleave", () => {
  // 배경 원상복구
  header.style.backgroundColor = "transparent";

  // 로고 교체
  logo.src = whiteLogo;

  // gnb 글자 색상 복구
  document.querySelectorAll(".gnb li a").forEach(link => {
    link.style.color = "#fff";
  });

  // 검색창
  const searchInput = document.querySelector(".search input");
  searchInput.style.borderBottom = "1px solid #fff";
  searchInput.style.color = "#fff";

  // 아이콘 복구
  searchIcon.src = whiteSearch;
  menuIcon.src = whiteMenu;

  // 셀렉트박스
  langSelect.style.border = "1px solid #fff";
  langSelect.style.color = "#fff";
});

/* footer - 패밀리사이트 */
document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.querySelector('.fam-toggle');
  const list = document.querySelector('.family_site_list');
  console.log(toggle,list);

  toggle.addEventListener('click', function () {
    list.style.display = (list.style.display === 'block') ? 'none' : 'block';
  });

  /* 바깥쪽 영역 클릭시 닫힘 */
  document.addEventListener('click', function (e){
    if (!toggle.contains(e.target) && !list.contains(e.target)) {
      list.style.display = 'none';
    }
  });
});