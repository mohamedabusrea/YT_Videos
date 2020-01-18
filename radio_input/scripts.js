const elem = document.querySelectorAll('.radioInput__circle');
const elem2 = document.querySelector('.radioInput__select');

elem.forEach(el => {
  el.onclick = function() {
    const posLeft = el.offsetLeft;

    elem2.style.left = `${posLeft + 4}px`;
  };
});
