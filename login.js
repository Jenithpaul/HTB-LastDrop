document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check credentials
    if ((username === 'admin' && password === 'adminpass') || 
        (username === 'nenita' && password === 'nenitapass')) {
        // Successful login
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'admin.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Prevent access to login page if already logged in
if (localStorage.getItem('loggedIn') === 'true') {
    window.location.href = 'admin.html';
}