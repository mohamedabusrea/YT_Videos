const menuIconElem = document.querySelector('.menuIcon');

menuIconElem.onclick = function() {
  const isActive = menuIconElem.classList.contains('menuIcon--isActive');

  if (isActive) {
    menuIconElem.classList.remove('menuIcon--isActive');
  }
  else {
    menuIconElem.classList.add('menuIcon--isActive');
  }
};
