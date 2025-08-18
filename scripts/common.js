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