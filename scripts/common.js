/* 무림 메인페이지  - 공통적인 동적 기능 JS */


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
const gnbItems = document.querySelectorAll('.gnb li')
const lnbWrap = document.querySelector ('.lnb_wrap');
const allMenuBtn = document.querySelector('.all_menu_btn');
console.log(gnbItems,lnbWrap,allMenuBtn);


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