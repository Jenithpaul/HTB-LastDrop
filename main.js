// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});

// Initialize AOS (Animate on Scroll) library
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Animate header on page load
  const header = document.querySelector('header');
  header.style.opacity = '0';
  header.style.transform = 'translateY(-50px)';
  setTimeout(() => {
    header.style.transition = 'opacity 1s ease, transform 1s ease';
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
  }, 100);

  // Animate text content
  const textElements = document.querySelectorAll('p, h2, h3');
  textElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    setTimeout(() => {
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 * (index + 1));
  });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Animate cards on hover
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-15px) scale(1.05)';
    card.style.boxShadow = '0 12px 20px rgba(0, 255, 255, 0.2)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 4px 8px rgba(0, 255, 255, 0.1)';
  });
});

// Handle subscribe form submission
const subscribeForm = document.getElementById('subscribe-form');
subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  // Here you would typically send the email to your server
  alert(`Thank you for subscribing with email: ${email}`);
  subscribeForm.reset();
});

// Add parallax effect to the background
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Neon text effect for headings
const headings = document.querySelectorAll('h1, h2, h3');
headings.forEach(heading => {
  heading.addEventListener('mouseover', () => {
    heading.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff';
  });

  heading.addEventListener('mouseout', () => {
    heading.style.textShadow = '0 0 10px #00ffff';
  });
});

// Expand project cards on hover
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.height = '500px';
    const image = card.querySelector('.project-image');
    image.style.transform = 'scale(1.1)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.height = '300px';
    const image = card.querySelector('.project-image');
    image.style.transform = 'scale(1)';
  });
});

// Add subtle animation to the water conservation strategies text
const strategiesText = document.querySelector('#home p:last-of-type');
if (strategiesText) {
  const words = strategiesText.textContent.split('•');
  strategiesText.innerHTML = words.map(word => `<span class="strategy">${word.trim()}</span>`).join(' • ');
  
  const strategies = document.querySelectorAll('.strategy');
  strategies.forEach((strategy, index) => {
    strategy.style.opacity = '0';
    strategy.style.transform = 'translateY(20px)';
    setTimeout(() => {
      strategy.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      strategy.style.opacity = '1';
      strategy.style.transform = 'translateY(0)';
    }, 200 * (index + 1));
  });
}