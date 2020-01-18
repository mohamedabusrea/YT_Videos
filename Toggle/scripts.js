const element = document.querySelector('.toggle');

element.onclick = function() {
  element.classList.toggle('toggle--isActive');
};
