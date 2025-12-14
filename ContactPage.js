
//Contact Form JavaScript Code
//Form Submission Handling
const contactForm = document.querySelector('.ContactForm form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    alert('Thank you for reaching out! Please check your email client to send the message.');
    contactForm.submit(); // Proceed with form submission
});