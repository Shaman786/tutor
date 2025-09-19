import './style.css'

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(window.scrollY >= 100) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL TOP ===============*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(window.scrollY >= 560) scrollTop.classList.add('show'); else scrollTop.classList.remove('show')
}
window.addEventListener('scroll', scrollTop)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            if (navLink) navLink.classList.add('active-link')
        }else{
            const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            if (navLink) navLink.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SMOOTH SCROLLING ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/*=============== CONTACT FORM ===============*/
function showSuccessMessage(message) {
    // Remove existing success message
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message show';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Insert before contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.parentNode.insertBefore(successDiv, contactForm);
    
        // Auto remove after 5 seconds
        setTimeout(() => {
            successDiv.classList.remove('show');
            setTimeout(() => {
                successDiv.remove();
            }, 300);
        }, 5000);
    }
}

/*=============== FORM VALIDATION ===============*/
function validateForm() {
    const form = document.getElementById('contact-form');
    if (!form) return false;
    
    const inputs = form.querySelectorAll('.form__input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const errorMessage = input.parentNode.querySelector('.error-message');
        
        // Remove existing error message
        if (errorMessage) {
            errorMessage.remove();
        }
        
        // Remove error styling
        input.style.borderColor = 'var(--border-color)';
        
        // Check if input is empty
        if (!input.value.trim()) {
            showFieldError(input, 'This field is required');
            isValid = false;
        } else {
            // Email validation
            if (input.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    showFieldError(input, 'Please enter a valid email address');
                    isValid = false;
                }
            }
            
            // Phone validation
            if (input.type === 'tel') {
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phoneRegex.test(input.value.replace(/[\s\-\(\)]/g, ''))) {
                    showFieldError(input, 'Please enter a valid phone number');
                    isValid = false;
                }
            }
        }
    });
    
    return isValid;
}

function showFieldError(input, message) {
    input.style.borderColor = 'var(--danger-color)';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        color: var(--danger-color);
        font-size: var(--smaller-font-size);
        margin-top: 0.25rem;
        display: block;
    `;
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
}

/*=============== STATS COUNTER ===============*/
function animateCounters() {
    const counters = document.querySelectorAll('.stat__number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
            }
        };
        
        // Only animate when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

/*=============== SCROLL ANIMATIONS ===============*/
function animateOnScroll() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Add animate-on-scroll class to elements that should animate
    const elementsToAnimate = [
        '.hero__data',
        '.hero__img',
        '.service__card',
        '.about__data',
        '.about__img',
        '.process__step',
        '.testimonial__card',
        '.contact__data',
        '.contact__form'
    ];
    
    elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('animate-on-scroll');
        });
    });
    
    // Initialize counters animation
    animateCounters();
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm()) {
                return;
            }
            
            // Add loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.classList.add('loading');
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Remove loading state
                submitButton.classList.remove('loading');
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Show success message
                showSuccessMessage('Thank you for your message! We\'ll get back to you soon.');
                
                // Reset form
                contactForm.reset();
                
                // Remove any error messages
                const errorMessages = contactForm.querySelectorAll('.error-message');
                errorMessages.forEach(msg => msg.remove());
                
                // Reset input styling
                const inputs = contactForm.querySelectorAll('.form__input');
                inputs.forEach(input => {
                    input.style.borderColor = 'var(--border-color)';
                });
                
            }, 2000);
        });
    }
    
    // Floating labels
    const formInputs = document.querySelectorAll('.form__input');
    
    formInputs.forEach(input => {
        const label = input.nextElementSibling;
        
        // Handle focus
        input.addEventListener('focus', function() {
            if (label && label.classList.contains('form__label')) {
                label.style.transform = 'translateY(-30px)';
                label.style.fontSize = 'var(--smaller-font-size)';
                label.style.color = 'var(--first-color)';
                label.style.backgroundColor = 'var(--white-color)';
                label.style.padding = '0 0.5rem';
            }
        });
        
        // Handle blur
        input.addEventListener('blur', function() {
            if (label && label.classList.contains('form__label') && !input.value) {
                label.style.transform = 'translateY(-50%)';
                label.style.fontSize = 'var(--normal-font-size)';
                label.style.color = 'var(--text-color-light)';
                label.style.backgroundColor = 'transparent';
                label.style.padding = '0';
            }
        });
        
        // Handle input with value on page load
        if (input.value) {
            if (label && label.classList.contains('form__label')) {
                label.style.transform = 'translateY(-30px)';
                label.style.fontSize = 'var(--smaller-font-size)';
                label.style.color = 'var(--first-color)';
                label.style.backgroundColor = 'var(--white-color)';
                label.style.padding = '0 0.5rem';
            }
        }
    });
    
    // Initial animation check
    animateOnScroll();
});

// Run scroll animations
window.addEventListener('scroll', animateOnScroll);
