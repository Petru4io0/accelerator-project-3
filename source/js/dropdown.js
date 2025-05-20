const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.dropdown__toggle');
const items = dropdown.querySelectorAll('.dropdown__menu-item');

toggle.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown--open');
});

items.forEach((item) => {
  item.addEventListener('click', () => {
    toggle.textContent = item.textContent;
    dropdown.classList.remove('dropdown--open');
  });
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('dropdown--open');
  }
});
