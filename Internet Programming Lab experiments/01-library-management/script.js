const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));

const searchInput = document.getElementById('searchInput');
const cards = [...document.querySelectorAll('.item-card')];
const emptyState = document.getElementById('emptyState');
searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase().trim();
  let visible = 0;
  cards.forEach(card => {
    const match = card.textContent.toLowerCase().includes(term);
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  emptyState.style.display = visible ? 'none' : 'block';
});

const backdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const formMessage = document.getElementById('formMessage');
function openModal(title) {
  modalTitle.textContent = title;
  formMessage.textContent = '';
  backdrop.classList.add('open');
}
document.querySelectorAll('[data-modal]').forEach(button => {
  button.addEventListener('click', () => openModal(button.dataset.modal));
});
document.querySelectorAll('[data-detail]').forEach(button => {
  button.addEventListener('click', () => openModal(button.dataset.detail));
});
document.querySelector('.modal-close').addEventListener('click', () => backdrop.classList.remove('open'));
backdrop.addEventListener('click', event => {
  if (event.target === backdrop) backdrop.classList.remove('open');
});
document.getElementById('demoForm').addEventListener('submit', event => {
  event.preventDefault();
  formMessage.textContent = 'Thank you! Your demo details were received.';
  event.target.reset();
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});
