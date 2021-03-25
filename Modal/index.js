const btn = document.querySelector(".submit-btn");
const email = document.querySelector(".input-email");
const phone = document.querySelector(".input-phone");
const modal = document.querySelector(".modal-back");
const emailErrorLog = document.querySelector(".error-msg-email");
const phoneErrorLog = document.querySelector(".error-msg-phone");
const mainModal = document.querySelector(".modal");



btn.addEventListener("click", () => {
  let isValidEmail = email.value.includes("@");
  let isValidPhone = !isNaN(+phone.value) && phone.value.length > 0;

  if (isValidEmail) {
    emailErrorLog.style.display = "none";
  } else {
    emailErrorLog.style.display = "block";
  }

  if (isValidPhone) {
    phoneErrorLog.style.display = "none";
  } else {
    phoneErrorLog.style.display = "block";
  }

  if (isValidEmail && isValidPhone) {
    modal.style.display = "block";
  }
});

window.addEventListener("click", (event) => {
  if (event.target !== mainModal && event.target !== btn) {
    modal.style.display = "none";
  }
  console.log("clicked target::", event.target);
});
