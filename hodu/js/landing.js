// scripts.js

// 모바일헤더
document.addEventListener("DOMContentLoaded", () => {
  const menuMobile = document.getElementById("menu_mobile");

  // 메뉴 토글 함수
  const toggleMenu = () => {
    menuMobile.classList.toggle("open");
  };

  // 햄버거 버튼과 닫기 버튼에 동일한 이벤트 핸들러 할당
  document.getElementById("hamburger").addEventListener("click", toggleMenu);
  document.getElementById("close_menu").addEventListener("click", toggleMenu);
});

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
// 모달 열기 버튼 클릭 이벤트 핸들러
var modalOpenButton = document.getElementById("open_modal");
modalOpenButton.addEventListener("click", function () {
  openModal();
});
// 모달 닫기 버튼 클릭 이벤트 핸들러
var modalCloseButton = document.getElementById("close_modal");
modalCloseButton.addEventListener("click", function () {
  closeModal();
});
