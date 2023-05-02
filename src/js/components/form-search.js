const buttonSearch = document.querySelector(".header__search-btn");
const buttonSearchClose = document.querySelector(".header__form-button");
const formSearch = document.querySelector(".header__form-bottom");


buttonSearch.addEventListener('click', () => {
  formSearch.classList.toggle('search--active');
  buttonSearch.style.display = "none";
});

buttonSearchClose.addEventListener('click', () => {
  formSearch.classList.toggle('search--active');
  buttonSearch.style.display = "block";
});
