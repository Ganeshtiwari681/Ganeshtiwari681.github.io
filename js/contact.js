// Contact Form Handling with EmailJS
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    // Initialize EmailJS (Replace with your EmailJS Public Key)
    // Get your keys from https://www.emailjs.com/
    // IMPORTANT: Replace "YOUR_PUBLIC_KEY" with your actual EmailJS public key
    emailjs.init("OS7xF7-QjbEDWejRg"); // Replace with your actual EmailJS public key

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable submit button
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        
        // Get form data
        const formData = {
            sender_name: document.getElementById('sender-name').value,
            sender_email: document.getElementById('sender-email').value,
            sender_company: document.getElementById('sender-company').value || 'Not provided',
            subject: document.getElementById('subject')?.value || 'Contact Form Submission',
            message: document.getElementById('message').value,
            to_email: 'mpgiganeshtiwari0409@gmail.com' // Your email address
        };
        
        try {
            // Send email using EmailJS
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
            const response = await emailjs.send(
                'service_66hcxag',  // Replace with your EmailJS Service ID
                'template_qgz4shg', // Replace with your EmailJS Template ID
                {
                    from_name: formData.sender_name,
                    from_email: formData.sender_email,
                    company: formData.sender_company,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: formData.to_email,
                    reply_to: formData.sender_email
                }
            );
            
            // Success message
            formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
            
        } catch (error) {
            console.error('EmailJS Error:', error);
            
            // Error message
            formMessage.textContent = 'Failed to send message. Please try again or contact me directly at mpgiganeshtiwari0409@gmail.com';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            btnText.textContent = 'Send Message';
        }
    });
}
