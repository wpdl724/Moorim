# 개인 프로젝트 (기여도 100%) : Moorim 리디자인
# 제작기간 - 2025.07.24 ~ 
## Moorim 제작 목록
* 메인(index.html) - 다양한 슬라이드 구조와 레이아웃 구성
* 서브(company / product) 
## Moorim 사용 색상
* `#000`
* `#fff`
* `#0069B3` : 청색계열 로고 색상
* `#8CC63F` : 그린계열 로고 색상
* `#404246` : 무채색계열 색상
## Moorim 사용 글꼴
* `'Pretendard',sans-serif;`
## Pretendard 링크
* `<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />`
## Moorim 폴더 / 파일 구성
* `./styles/common.css` : header, footer 공통 CSS
* `./styles/reset.css` : 설정 초기화 CSS
* `./scripts/index.js` : index.html에 해당하는 JS (메인 페이지 동적기능)
* `./scripts/common.js`: index.html에 해당하는 JS (공통적인 동적기능)
* `./index.html` : 메인 페이지 HTML 
## font-size  / font-weight (header ~ footer 순서대로 사용한 폰트크기)
1. `18px (1.125em;) - Medium (500)` : gnb 
2. `14px (0.875em;) - Medium (500)` : 언어변경 KOR ~ ENG
3. `20px (1.25em;) - Medium (500)` : 1행 bnr 중간 글자
4. `60px (3.75em;) - Medium (500)` : 1행 bnr 큰 글자
5. `34px (2.125em;) - Medium (500)` : 2행 제목 
6. `18px (1.125em;) - Regular (400)` : 2행 내용
7. `20px (1.25em;) - Medium (500)` : 2행 제품명 글자 (펄프, 종이, 신소재) 
8. `20px (1.25em;) - Regular (400)` : 3행 btn 내용
9. `24px (1.5em;) - Medium (500)` : 4행 (그리드) 내용

## 글자 그림자(box-shadow) 설정
* `(box-shadow: offset-x offset-y blur-radius spread-radius color;)`: 2행 제품명 글자(펄프, 종이, 신소재) / 4행 그리드 내용 
## Moorim line-height 
* `140% (1.4)` 

## 반응형 디자인
* 데스크탑 : 1440-1920
* 태블릿 : 1339-850
* 모바일 : 849-320 

* a태그 이동 링크 막기
`document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
            e.preventDefault();
        }
    });
});`



* 슬라이드
                    <div class="swiper-wrapper"> <!--news 슬라이드 시작-->
                        <div class="swiper-slide slide1">
                            <a href="#"><img src="./images/main/news/01_news.jpg" alt="뉴스 1번째 이미지 (2026 제지부분 1위 무림)"></a>
                        </div>
                        <div class="swiper-slide slide2">
                            <a href="#"><img src="./images/main/news/02_news.jpg" alt="뉴스 2번째 이미지 (2026 제지부분 1위 무림)"></a>
                        </div>
                        <div class="swiper-slide slide3">
                            <a href="#"><img src="./images/" alt="뉴스 3번째 이미지 (2026 제지부분 1위 무림)"></a>
                        </div>
                        <div class="swiper-slide slide4">
                            <a href="#"><img src="./images/" alt="뉴스 4번째 이미지 (2026 제지부분 1위 무림)"></a>
                        </div>
                        <div class="swiper-slide slide5">
                            <a href="#"><img src="./images/" alt="뉴스 5번째 이미지 (2026 제지부분 1위 무림)"></a>
                        </div>
                        <div class="swiper-slide slide6">
                            <a href="#"><img src="./images/" alt="뉴스 6번째 이미지 (2026 제지부분 1위 무림)"></a>
                        </div>
                        <div class="swiper-slide slide7">
                            <a href="#"><img src="./images/" alt="뉴스 7번째 이미지 (2026 제지부분 1위 무림)"></a>
                        </div>
                        <div class="swiper-slide slide8">
                            <a href="#"><img src="./images/" alt="뉴스 8번째 이미지 (2026 제지부분 1위 무림)"></a>
                        </div>
                        <div class="swiper-slide slide9">
                            <a href="#"><img src="./images/" alt="뉴스 9번째 이미지 (2026 제지부분 1위 무림)"></a>
                        </div>
                        <div class="swiper-slide slide10">
                            <a href="#"><img src="./images/" alt="뉴스 10번째 이미지 (2026 제지부분 1위 무림)"></a>
                        </div>
                    </div>


@media screen and (max-width : 1399px) {/* 태블릿 */
    header .top_wrap {
        background-color: yellow;
    }
    header .top_wrap h1 a img {
        background-color: brown;
        width: 120px; 
    }
    header nav{
        background-color: pink;
        width: 944px; 
        padding: 0 40px;
    }
    header nav .gnb_wrap{/* gnb 큰묶음 */
        width: 548px;
        background-color: mediumpurple;
    }
    header nav .gnb_wrap .gnb {}
    header nav .gnb_wrap .gnb li {}

    /*lnb */
    header nav .lnb_wrap {/* lnb 큰묶음 */
    }
    header nav .lnb_wrap .intro { /* 1. lnb intro 기업소개 */

    }
    header nav .lnb_wrap .intro li {}
    header nav .lnb_wrap .intro li a {}
    header nav .lnb_wrap .intro li a span {}

}/* 태블릿 반응형 끝 */


js 패밀리
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


====
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




