//My JavaScript
let a, b;
a = 20;
b = 5;
const c = a + b;
console.log(a, b);
console.log(c);

var s = 18;
const p = s / 3;
console.log(p);

//Open Mobile Menu On Click
const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("open-mobile-menu");
  overlay.classList.add("overlay-open");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open-mobile-menu");
  overlay.classList.remove("overlay-open");
});

//Switch Statement
const color = "Purple";

switch (color) {
  case "Yellow":
    console.log("Color is Yellow");
  case "Red":
    console.log("Color is Red");
  case "Purple":
    console.log("Color is Green");
    break;
  default:
    console.log("Color is not found");
}

var i;
i = i / 2;

switch (i) {
  case 1:
    console.log("You can divide 1 with i");

  case 2:
    console.log("You can divide 2 with i");

  case 3:
    console.log("You can divide 3 with i");

  case 4:
    console.log("You can divide 4 with i");
    break;
  default:
    console.log("You can't devide this number with i");
}

//Filters Open and Close
const filterTitle = document.querySelectorAll(".filter-section-title");
const filtersContainer = document.querySelectorAll(".filters-container");

for (const [i, heading] of filterTitle.entries()) {
  filterTitle[i].addEventListener("click", (e) => {
    filterTitle[i].classList.toggle("icon-expand");
    filtersContainer[i].classList.toggle("open-filters");
    e.stopPropagation();
  });
}

//Function for Header
function BackgroundHeader() {
  const nav = document.querySelector(".nav");
  var scrollPostion = window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener("scroll", function () {
    var currenScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currenScrollPosition > scrollPostion) {
      nav.style.background = "#D6CCC2";
    } else {
      nav.style.background = "transparent";
    }
  });
}
BackgroundHeader();
