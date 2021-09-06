const trigger = document.querySelector(".btn-trigger");
const login = document.querySelector(".login-body");

trigger.addEventListener("click", () => {
  login.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  login.classList.remove("active");
});
