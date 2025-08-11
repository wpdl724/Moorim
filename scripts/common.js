/* 무림 메인페이지  - 공통적인 동적 기능 JS */
/* a 링크 이동 막기 */
document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
  if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
          e.preventDefault();
      }
  });
});

//lnb//
/*  lnb  */
  // 공통 LNB 토글
// const lnbWrap = document.getElementById('.lnb_wrap');
// const allMenuBtn = document.getElementById('.all_menu_btn');
// const gnbItems = document.querySelectorAll('.gnb li');
// console.log();
// // GNB 메뉴 클릭 시 LNB 보이기
// gnbItems.forEach(item => {
// item.addEventListener('click', () => {
//     lnbWrap.classList.add('active');
// });
// });

// // 전체메뉴 버튼 클릭 시 LNB 보이기
// allMenuBtn.addEventListener('click', (e) => {
// e.preventDefault();
// lnbWrap.classList.toggle('active');
// });



  /* lnb */
// const gnbItems = document.querySelectorAll('.gnb li')
// const lnbWrap = document.querySelector ('.lnb_wrap');
// const allMenuBtn = document.querySelector('.all_menu_btn');
// console.log(gnbItems,lnbWrap,allMenuBtn);


//   // 공통 함수: LNB 열기
//   function openLnbWrap() {
//     lnbWrap.classList.add('active');
//   }

//   // GNB 클릭 시 LNB 열기
//   gnbItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//       e.stopPropagation(); // 버블링 방지
//       openLnbWrap();
//     });
//   });

//   // 전체메뉴 버튼 클릭 시 LNB 열기
//   allMenuBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     openLnbWrap();
//   });

//   // 바깥 클릭 시 LNB 닫기
//   document.addEventListener('click', (e) => {
//     if (!lnbWrap.contains(e.target) && !allMenuBtn.contains(e.target)) {
//       lnbWrap.classList.remove('active');
//     }
//   });


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