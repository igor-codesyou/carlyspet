/* MENU */

const toggleButton = document.querySelector("[data-menu]");
const navigationBar = document.querySelector("[data-nav]");

toggleButton.addEventListener("click", function () {
  navigationBar.classList.toggle("open");
});

const linkItem = document.querySelectorAll("[data-link]");

function removeNavigation() {
  if (navigationBar.classList.contains("open")) {
    navigationBar.classList.remove("open");
  }
}

linkItem.forEach((e) => {
  e.addEventListener("click", removeNavigation);
});

/* HEADER BLUR EFFECT */

const header = document.querySelector("[data-header]");

function headerBlur() {
  if (window.scrollY > 50) {
    header.classList.add("blur");
  }
}

window.addEventListener("scroll", headerBlur());
