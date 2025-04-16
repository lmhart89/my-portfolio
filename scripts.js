// Smooth Scrolling Navigation 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#00bcd4';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Contact Form Validation
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you for your message!');
  contactForm.reset();
});

// Hover Effects on Project Cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  });
});