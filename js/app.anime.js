
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
function animeScroll() {
  const windowTop = document.documentElement.scrollTop + window.innerHeight * 0.1;
  target.forEach((element) => {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
     element.classList.remove(animationClass);
     
    }
    console.log(element.offsetTop);
  })
}

window.addEventListener('scroll', function() {
  animeScroll();
})