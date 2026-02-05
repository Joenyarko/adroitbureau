(function () {
    // Initialize EmailJS
    // REPLACE WITH YOUR PUBLIC KEY
    emailjs.init("YOUR_PUBLIC_KEY");

    document.addEventListener('DOMContentLoaded', function () {
        // Handle Contact Form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function (event) {
                event.preventDefault();

                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;
                submitBtn.innerText = 'Sending...';
                submitBtn.disabled = true;

                // Prepare params
                // These must match your EmailJS template variables
                const templateParams = {
                    from_name: this.elements['name'].value,
                    from_email: this.elements['email'].value,
                    phone: this.elements['phone'].value,
                    subject: this.elements['subject'].value,
                    message: this.elements['message'].value,
                    to_name: "Adroit Bureau", // Optional, if used in template
                };

                // Send email
                // REPLACE WITH YOUR SERVICE ID AND TEMPLATE ID
                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                    .then(function () {
                        alert('Message sent successfully!');
                        contactForm.reset();
                        submitBtn.innerText = originalText;
                        submitBtn.disabled = false;
                    }, function (error) {
                        alert('Failed to send message. Please try again.');
                        console.error('EmailJS Error:', error);
                        submitBtn.innerText = originalText;
                        submitBtn.disabled = false;
                    });
            });
        }
    });
})();
