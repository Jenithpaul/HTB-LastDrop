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

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.content');
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight * 0.8) {
      element.classList.add('visible');
    }
  });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
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

  // Initial check for elements in view
  animateOnScroll();
});

// Add active class to navigation links based on scroll position
const updateActiveNavLink = () => {
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
};

// Throttle function to limit the rate at which a function can fire
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Add scroll event listeners with throttling
window.addEventListener('scroll', throttle(() => {
  updateActiveNavLink();
  animateOnScroll();
}, 100));

// Handle subscribe form submission
const subscribeForm = document.getElementById('subscribe-form');
subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  // Here you would typically send the email to your server
  alert(`Thank you for subscribing with email: ${email}`);
  subscribeForm.reset();
});

// Improved slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-image');

const showSlides = () => {
  slides.forEach(slide => {
    slide.style.opacity = "0";
    slide.classList.remove('active');
  });
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.opacity = "1";
  slides[slideIndex-1].classList.add('active');
  setTimeout(showSlides, 5000); // Change image every 5 seconds
};

showSlides();

// Smooth header shrink on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', throttle(() => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector('header');
  
  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    header.style.padding = '10px';
  } else {
    // Scrolling up
    header.style.padding = '20px';
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}, 100));