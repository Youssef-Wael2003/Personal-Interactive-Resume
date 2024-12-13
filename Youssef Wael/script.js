// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your message has been sent!');
  this.reset();
});
