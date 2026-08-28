const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.project-card');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;

    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');

    cards.forEach((card) => {
      const categories = card.dataset.category.split(' ');
      const shouldShow = filter === 'all' || categories.includes(filter);
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

const contactForm = document.querySelector('#contactForm');
const statusMessage = document.querySelector('.form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const values = Object.fromEntries(formData.entries());
  const hasEmptyField = Object.values(values).some((value) => !value.trim());

  if (hasEmptyField || !contactForm.checkValidity()) {
    statusMessage.textContent = 'Please complete every field with a valid email before sending.';
    statusMessage.style.color = '#9d3838';
    return;
  }

  statusMessage.textContent = `Thanks, ${values.name}. Your ${values.project.toLowerCase()} inquiry is ready for the back-end queue.`;
  statusMessage.style.color = '#38663e';
  contactForm.reset();
});

