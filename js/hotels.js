var sort = document.querySelector(".sort__right-down");
var sortButton = document.querySelector(".sort__button");


sort.classList.add("sort__right-down--active");

sortButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (sort.classList.contains("sort__right-down--active")) {
    sort.classList.remove("sort__right-down--active");
  }

});
