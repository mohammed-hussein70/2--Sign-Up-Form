function showModel() {
  let sign = document.querySelector(".btn");
  let model = document.querySelector(".model");
  let close = document.querySelector(".model .close");
  let cancel = document.querySelector(".model .container .cont .cancel");

  sign.addEventListener("click", function () {
    model.style.display = "block";
  });

  close.addEventListener("click", function () {
    model.style.display = "none";
  });

  cancel.addEventListener("click", function () {
    model.style.display = "none";
  });
}
window.onload = showModel;
