/* 무림 메인페이지  - 공통적인 동적 기능 JS */






/* right_wrap (언어변경) */
// 초기설정 : 한국어 , 영어 옵션 숨기기
//lang_select 클릭시, .lang_open 보이기
// lang_open이 보이는 상태라면 #lang_select 클릭시 .lang_open 숨기기
// const langOpen = document.querySelector('.lang_open');
// const langSelect = document.querySelector('#lang_select');
// console.log(langOpen,langSelect);
// langOpen.style.display = 'none'; /* 초기값 설정 - 숨기기 */

// let openif = false; // 숨기기
// langSelect.addEventListener('click', ()=>{
//     if(openif==false){
//         langOpen.style.display = 'flex';
//         openif = true //상태값 변경
//     }else if(openif == true){
//         langOpen.style.display = 'none';
//         openif = false;
//     }
// })