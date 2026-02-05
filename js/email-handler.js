(function () {
    // Initialize EmailJS
    emailjs.init("Z5EB0A8n4IxJqdosw");

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
                    from_contact: this.elements['phone'].value, // Mapped to from_contact
                    title: this.elements['subject'].value,      // Mapped to title
                    message: this.elements['message'].value,
                    to_name: "Adroit Bureau",
                };

                // Send email
                emailjs.send('service_v2vzdoq', 'template_jpojh1n', templateParams)
                    .then(function () {
                        Swal.fire({
                            icon: 'success',
                            title: 'Message Sent!',
                            text: 'We will get back to you shortly.',
                            confirmButtonColor: '#d62400'
                        });
                        contactForm.reset();
                        submitBtn.innerText = originalText;
                        submitBtn.disabled = false;
                    }, function (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong. Please try again.',
                            confirmButtonColor: '#d62400'
                        });
                        console.error('EmailJS Error:', error);
                        submitBtn.innerText = originalText;
                        submitBtn.disabled = false;
                    });
            });
        }
    });
})();
