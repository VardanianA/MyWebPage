//selectors
const close_btn = document.querySelector("header .navbar .close");
const menu_btn = document.querySelector("header .icons i");
const menu = document.querySelector("header .navbar");

//addeventlistenners
menu_btn.addEventListener("click", openMenu);
close_btn.addEventListener("click", closeModal);

//functions
function openMenu() {
  menu.classList.add("active");
}

function closeModal() {
  menu.classList.remove("active");
}

function openImg(element) {
  document.getElementById("img").src = element.src;
  document.getElementById("modal").style.display = "block";
  let text = document.getElementById("text");
  text.innerHTML = element.alt;
}
