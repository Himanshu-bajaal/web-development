document.addEventListener('DOMContentLoaded', () => {
  const greeting = document.createElement('div');
  greeting.textContent = 'こんにちは, Himanshu! Welcome to my tech space 🌟';
  greeting.style.background = '#fffae5';
  greeting.style.padding = '1rem';
  greeting.style.textAlign = 'center';
  greeting.style.fontWeight = 'bold';
  greeting.style.color = '#444';
  document.body.insertBefore(greeting, document.body.firstChild);
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('📬 Message sent successfully. I’ll get back to you soon!');
});
document.getElementById('themeSwitch').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});