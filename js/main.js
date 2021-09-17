const openBtn = document.getElementById('openBtn');
const closeBtn = document.querySelector('.closeBtn');
const navlist = document.querySelector('.nav-list');

openBtn.addEventListener('click', (e) => {
  if (!navlist.classList.contains('open-menu')) {
    navlist.classList.add('open-menu');
  } else {
    navlist.classList.remove('open-menu');
  }
});

closeBtn.addEventListener('click', (e) => {
  if (navlist.classList.contains('open-menu')) {
    navlist.classList.remove('open-menu');
  }
});

navlist.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    navlist.classList.remove('open-menu');
  }
});
