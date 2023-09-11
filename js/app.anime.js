const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
function animeScroll() {
  const windowTop = document.documentElement.scrollTop + window.innerHeight * 0;
  target.forEach(function (element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
     element.classList.remove(animationClass);
     windowTop = document.documentElement.scrollTop + window.innerHeight * 0.100;
    }
    console.log(element.offsetTop);
  })
}
window.addEventListener('scroll', function() {
  animeScroll();
})