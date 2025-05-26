// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Form submission handling
const supportForm = document.getElementById('supportForm');
if (supportForm) {
    supportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            issue: document.getElementById('issue').value
        };

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        successMessage.style.cssText = `
            background-color: #2ecc71;
            color: white;
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
            text-align: center;
        `;

        // Clear form
        supportForm.reset();

        // Add success message to form
        supportForm.appendChild(successMessage);

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
            const icon = faqItem.querySelector('.fa-chevron-down');
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            const icon = item.querySelector('.fa-chevron-down');
            if (icon) {
                icon.style.transform = 'rotate(180deg)';
            }
        }
    });
});

// Add animation to cards on scroll
const cards = document.querySelectorAll('.card');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Testimonial slider
let currentTestimonial = 0;
const testimonials = [
    {
        text: "Amazing support team! They resolved my issue within minutes and were extremely professional.",
        author: "Sarah Johnson",
        role: "Premium Member"
    },
    {
        text: "The best customer service I've ever experienced. Quick, efficient, and friendly!",
        author: "Michael Chen",
        role: "Business Owner"
    },
    {
        text: "Outstanding support that goes above and beyond. Highly recommended!",
        author: "Emily Rodriguez",
        role: "Enterprise Client"
    }
];

function updateTestimonial() {
    const testimonial = document.querySelector('.testimonial-content');
    if (testimonial) {
        testimonial.style.opacity = '0';
        setTimeout(() => {
            testimonial.querySelector('p').textContent = testimonials[currentTestimonial].text;
            testimonial.querySelector('h4').textContent = testimonials[currentTestimonial].author;
            testimonial.querySelector('p:last-child').textContent = testimonials[currentTestimonial].role;
            testimonial.style.opacity = '1';
        }, 500);
    }
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Change testimonial every 5 seconds
setInterval(updateTestimonial, 5000);

// Add hover effect to social media icons
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.2)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
}); 