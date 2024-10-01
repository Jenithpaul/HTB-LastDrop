document.addEventListener('DOMContentLoaded', function() {
  // Check if user is logged in
  if (localStorage.getItem('loggedIn') !== 'true') {
      window.location.href = 'login.html';
      return;
  }

  const logoutLink = document.getElementById('logout-link');
  const logoutModal = document.getElementById('logout-modal');
  const closeModal = document.querySelector('.close');
  const confirmLogout = document.getElementById('confirm-logout');
  const cancelLogout = document.getElementById('cancel-logout');

  // Show logout modal
  logoutLink.addEventListener('click', function(e) {
      e.preventDefault();
      logoutModal.style.display = 'block';
  });

  // Close modal when clicking on X
  closeModal.addEventListener('click', function() {
      logoutModal.style.display = 'none';
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', function(e) {
      if (e.target == logoutModal) {
          logoutModal.style.display = 'none';
      }
  });

  // Confirm logout
  confirmLogout.addEventListener('click', function() {
      localStorage.removeItem('loggedIn');
      window.location.href = 'login.html';
  });

  // Cancel logout
  cancelLogout.addEventListener('click', function() {
      logoutModal.style.display = 'none';
  });

  // Add active class to current nav item
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
      });
  });

  // Animate elements on scroll
  function animateOnScroll() {
      const elements = document.querySelectorAll('.section');
      elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (elementTop < windowHeight * 0.8) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  }

  // Initial animation on page load
  animateOnScroll();

  // Animate on scroll
  window.addEventListener('scroll', animateOnScroll);
});