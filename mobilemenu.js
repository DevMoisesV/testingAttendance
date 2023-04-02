const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('show');
});

body.addEventListener('click', (event) => {
  const isNavClicked = nav.contains(event.target);
  const isMenuIconClicked = menuIcon.contains(event.target);
  if (!isNavClicked && !isMenuIconClicked) {
    nav.classList.remove('show');
  }
});
