document.addEventListener('DOMContentLoaded', function () {

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


const swiper = new Swiper('.blog-slider__container', {

  pagination: {
    el: '.blog-slider__dots',
    type: 'bullets',
    clickable: true,
    bulletClass: 'blog-slider__bullet',
    bulletActiveClass: 'blog-slider__bullet--active',
  },

});




}, false)

