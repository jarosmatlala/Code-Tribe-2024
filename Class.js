const menuMenu = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menu.addEventListener('click',show);
menuMenu.addEventListener('click',show);

function show(){
  menuMenu.style.display ='flex';
  menuMenu.style.top = '0';
}




