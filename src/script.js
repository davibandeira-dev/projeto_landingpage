const menuBtn = window.document.getElementById('botao_menu')
const navMenu = window.document.getElementById('menu')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
})