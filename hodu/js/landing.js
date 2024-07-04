// scripts.js

// 모바일헤더
document.addEventListener("DOMContentLoaded", () => {
  const menuMobile = document.getElementById("nav_mobile");

  // 메뉴 토글 함수
  const toggleMenu = () => {
    menuMobile.classList.toggle("open");
  };

  // 햄버거 버튼과 닫기 버튼에 동일한 이벤트 핸들러 할당
  document.getElementById("hamburger").addEventListener("click", toggleMenu);
  document.getElementById("close_menu").addEventListener("click", toggleMenu);
});

// 구독모달
// 모달 열기
function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}
// 모달 닫기
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  // 폼 제출 이벤트 리스너
  var subscribeForm = document.getElementById("subscribe_form");
  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 막음
    openModal(); // 모달 열기 함수 호출
  });

  // 모달 닫기 버튼 클릭 이벤트 핸들러
  var modalCloseButton = document.getElementById("close_modal");
  modalCloseButton.addEventListener("click", function () {
    closeModal(); // 모달 닫기 함수 호출
  });
});
