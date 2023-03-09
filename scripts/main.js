const burguerIcon = document.querySelector('.burguer');
const menuMobile = document.querySelector('.nav');

burguerIcon.addEventListener('click',()=> {
  menuMobile.classList.toggle('activo')
  console.log('Funciona');
})