
/*selecionar o botão */
const btnMobile = document.getElementById('btn-mobile');
/* função do botão */
btnMobile
function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.constains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
   event. currentTarget.setAtrribgute('aria-expanded', 'Fechar Menu');
  } else  {
    event. currentTarget.setAtrribgute('aria-expanded', 'Abrir Menu');
  }
}
/* evento de clicar no botão */
btnMobile.addEventListener( 'click', toggleMenu);
/* animationc */
