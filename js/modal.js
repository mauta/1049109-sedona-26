var button = document.querySelector(".search__button");
var modal = document.querySelector(".modal");
var checkIn = modal.querySelector("[name=data_check_in]");
var checkOut = modal.querySelector("[name=data_check_out]");
var countAdult = modal.querySelector("[name=count_adult]");
// var countChild = modal.querySelector("[name=count_child]");
var form = modal.querySelector("form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal__animation");
  checkIn.focus();
 
});




// закрытие нужно написать


form.addEventListener("submit", function (evt) {
  if(!checkIn.value || !checkOut.value || !countAdult.value){
    evt.preventDefault();
    form.classList.add("modal__input--empty");
  } 
  
    
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal__animation")) {
        modal.classList.remove("modal__animation");
      }
    }
  });


