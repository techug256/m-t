const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  menuBtn.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  });
});

document.getElementById('tripForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const interest = data.get('interest');
  const travelers = data.get('travelers');
  const date = data.get('date') || 'not yet decided';
  const phone = data.get('phone') || 'not provided';

  const message =
    `Hello M&T Tours, I'd like to plan a ${interest.toLowerCase()} in Uganda.%0A%0A` +
    `Travelers: ${travelers}%0A` +
    `Travel date: ${date}%0A` +
    `WhatsApp/Phone: ${phone}`;

  window.open(`https://wa.me/256775527703?text=${message}`, '_blank');
});
