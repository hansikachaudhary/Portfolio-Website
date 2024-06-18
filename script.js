// script.js

// Add form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Here you can add code to actually send the form data to your email or a server
});
