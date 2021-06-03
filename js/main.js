const header = document.querySelector('.header');
let scrollTop = 0;

window.addEventListener('scroll', () => {
  let height = pageYOffset;
  if (height > scrollTop) {
    header.classList.add('header--bg')
  }

  else {
    header.classList.remove('header--bg')
  }
  
})