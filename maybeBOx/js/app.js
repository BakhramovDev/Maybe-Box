const navIn = document.querySelector('.nav_link_wrapper');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
  navIn.classList.toggle('active');
  burger.classList.toggle('toggle');
});
