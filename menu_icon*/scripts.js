const menuIcon = document.querySelector('.menuIcon');

menuIcon.onclick = function() {
  const activeClass = 'menuIcon--isActive';
  const isActive = menuIcon.classList.contains(activeClass);

  if (isActive) {
    menuIcon.classList.remove(activeClass);
  }
  else {
    menuIcon.classList.add(activeClass);
  }
};
