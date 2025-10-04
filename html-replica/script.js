// Gallery Data - matching the original gallery.ts structure
const galleryImages = [
    {
        src: 'gallery/model-01.jpg',
        alt: 'Hyderabad Escort Service - Professional High Profile Model',
        title: 'Elite Escort Model',
        category: 'high-profile'
    },
    {
        src: 'gallery/model-02.jpg',
        alt: 'VIP Escort Service Hyderabad - Beautiful Independent Woman',
        title: 'VIP Independent Escort',
        category: 'vip'
    },
    {
        src: 'gallery/model-03.jpg',
        alt: 'Premium Escort Hyderabad - Sophisticated Companion',
        title: 'Premium Companion',
        category: 'premium'
    },
    {
        src: 'gallery/model-04.jpg',
        alt: 'Hyderabad Call Girls - Professional Escort Service',
        title: 'Professional Escort',
        category: 'high-profile'
    },
    {
        src: 'gallery/model-05.jpg',
        alt: 'Elite Escort Service - Luxury Companion Hyderabad',
        title: 'Luxury Elite Model',
        category: 'elite'
    },
    {
        src: 'gallery/model-06.jpg',
        alt: 'High Class Escort Hyderabad - Beautiful Model',
        title: 'High Class Beauty',
        category: 'high-profile'
    },
    {
        src: 'gallery/model-07.jpg',
        alt: 'VIP Call Girls Hyderabad - Premium Service',
        title: 'VIP Premium Model',
        category: 'vip'
    },
    {
        src: 'gallery/model-08.jpg',
        alt: 'Independent Escort Hyderabad - Professional Companion',
        title: 'Independent Professional',
        category: 'independent'
    },
    {
        src: 'gallery/model-09.jpg',
        alt: 'Hyderabad Escort Girls - Elite Service Provider',
        title: 'Elite Service Model',
        category: 'elite'
    },
    {
        src: 'gallery/model-10.jpg',
        alt: 'Premium Call Girls - High Profile Escort Hyderabad',
        title: 'Premium High Profile',
        category: 'premium'
    },
    {
        src: 'gallery/model-11.jpg',
        alt: 'Luxury Escort Service - Beautiful Companion Hyderabad',
        title: 'Luxury Companion',
        category: 'luxury'
    },
    {
        src: 'gallery/model-12.jpg',
        alt: 'High Profile Escort - VIP Service Hyderabad',
        title: 'VIP High Profile',
        category: 'vip'
    },
    {
        src: 'gallery/model-13.jpg',
        alt: 'Elite Call Girls Hyderabad - Premium Escort Service',
        title: 'Elite Premium Model',
        category: 'elite'
    },
    {
        src: 'gallery/model-14.jpg',
        alt: 'Professional Escort Hyderabad - High Class Service',
        title: 'Professional High Class',
        category: 'professional'
    },
    {
        src: 'gallery/model-15.jpg',
        alt: 'VIP Escort Girls - Luxury Service Hyderabad',
        title: 'VIP Luxury Model',
        category: 'vip'
    },
    {
        src: 'gallery/model-16.jpg',
        alt: 'Independent Call Girls - Premium Escort Hyderabad',
        title: 'Independent Premium',
        category: 'independent'
    },
    {
        src: 'gallery/model-17.jpg',
        alt: 'High Profile Call Girls - Elite Escort Hyderabad',
        title: 'High Profile Elite',
        category: 'high-profile'
    },
    {
        src: 'gallery/model-18.jpg',
        alt: 'Luxury Call Girls - VIP Escort Service Hyderabad',
        title: 'Luxury VIP Model',
        category: 'luxury'
    },
    {
        src: 'gallery/model-19.jpg',
        alt: 'Premium Escort Girls - High Class Service Hyderabad',
        title: 'Premium High Class',
        category: 'premium'
    },
    {
        src: 'gallery/model-20.jpg',
        alt: 'Elite Escort Models - Professional Service Hyderabad',
        title: 'Elite Professional',
        category: 'elite'
    }
];

// Global state
let currentImageIndex = 0;
let isGalleryOpen = false;

// DOM Elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuContent = document.querySelector('.mobile-menu-content');
const galleryContainer = document.querySelector('.gallery');
const galleryModal = document.querySelector('.gallery-modal');
const galleryModalImage = document.querySelector('.gallery-modal-image');
const galleryModalTitle = document.querySelector('.gallery-modal-title');
const galleryModalCounter = document.querySelector('.gallery-modal-counter');
const galleryModalClose = document.querySelector('.gallery-modal-close');
const galleryModalPrev = document.querySelector('.gallery-modal-prev');
const galleryModalNext = document.querySelector('.gallery-modal-next');
const whatsappWidget = document.querySelector('.whatsapp-widget');

// Utility Functions
function getFeaturedImages(count = 8) {
    return galleryImages.slice(0, count);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Theme Management
function initTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', prefersDark);
    } else {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }
}

// Mobile Menu Functions
function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        mobileMenuContent.classList.add('open');
        mobileMenuContent.style.transform = 'translateX(0)';
    });
}

function closeMobileMenu() {
    mobileMenuContent.style.transform = 'translateX(100%)';
    mobileMenuContent.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
}

// Gallery Functions
function createGalleryItem(image, index) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group';
    
    galleryItem.innerHTML = `
        <img 
            src="${image.src}" 
            alt="${image.alt}" 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
        >
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <p class="text-sm font-medium">${image.title}</p>
            </div>
        </div>
    `;
    
    galleryItem.addEventListener('click', () => openGallery(index));
    return galleryItem;
}

function populateGallery() {
    if (!galleryContainer) return;
    
    const featuredImages = getFeaturedImages(8);
    galleryContainer.innerHTML = '';
    
    featuredImages.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryContainer.appendChild(galleryItem);
    });
}

function openGallery(index) {
    currentImageIndex = index;
    isGalleryOpen = true;
    updateGalleryModal();
    galleryModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    isGalleryOpen = false;
    galleryModal.classList.add('hidden');
    document.body.style.overflow = '';
}

function updateGalleryModal() {
    const featuredImages = getFeaturedImages(8);
    const currentImage = featuredImages[currentImageIndex];
    
    if (currentImage) {
        galleryModalImage.src = currentImage.src;
        galleryModalImage.alt = currentImage.alt;
        galleryModalTitle.textContent = currentImage.title;
        galleryModalCounter.textContent = `${currentImageIndex + 1} / ${featuredImages.length}`;
    }
}

function nextImage() {
    const featuredImages = getFeaturedImages(8);
    currentImageIndex = (currentImageIndex + 1) % featuredImages.length;
    updateGalleryModal();
}

function prevImage() {
    const featuredImages = getFeaturedImages(8);
    currentImageIndex = (currentImageIndex - 1 + featuredImages.length) % featuredImages.length;
    updateGalleryModal();
}

// WhatsApp Functions
function handleWhatsAppClick() {
    const phoneNumber = "+919876543210";
    const message = encodeURIComponent("Hi, I'm interested in your escort services. Please provide more details.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
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
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements that should animate in
    document.querySelectorAll('.card, .gallery > div').forEach(el => {
        observer.observe(el);
    });
}

// Handle keyboard events
function handleKeydown(event) {
    if (isGalleryOpen) {
        switch (event.key) {
            case 'Escape':
                closeGallery();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    }

    // Close mobile menu with Escape
    if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
}

// Handle window resize
const handleResize = debounce(() => {
    // Close mobile menu on desktop
    if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
}, 250);

// Form handling (if forms are present)
function initForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission here
            console.log('Form submitted');
        });
    });
}

// Button click handlers
function initButtonHandlers() {
    // WhatsApp buttons
    document.querySelectorAll('button').forEach(button => {
        const text = button.textContent.toLowerCase();
        if (text.includes('whatsapp')) {
            button.addEventListener('click', handleWhatsAppClick);
        }
    });

    // Call buttons
    document.querySelectorAll('button').forEach(button => {
        const text = button.textContent.toLowerCase();
        if (text.includes('call')) {
            button.addEventListener('click', function() {
                window.location.href = 'tel:+919876543210';
            });
        }
    });
}

// Error handling for images
function handleImageErrors() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+';
            this.alt = 'Image not found';
        });
    });
}

// Loading state management
function showLoadingState() {
    const loadingHTML = `
        <div class="flex items-center justify-center p-8">
            <div class="animate-pulse">Loading...</div>
        </div>
    `;
    if (galleryContainer) {
        galleryContainer.innerHTML = loadingHTML;
    }
}

// Initialize lazy loading for images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Populate gallery
    populateGallery();
    
    // Initialize other features
    initSmoothScrolling();
    initScrollAnimations();
    initForms();
    initButtonHandlers();
    initLazyLoading();
    handleImageErrors();
    
    // Mobile Menu Events
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Mobile menu link clicks
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Gallery Modal Events
    if (galleryModalClose) {
        galleryModalClose.addEventListener('click', closeGallery);
    }
    
    if (galleryModalPrev) {
        galleryModalPrev.addEventListener('click', prevImage);
    }
    
    if (galleryModalNext) {
        galleryModalNext.addEventListener('click', nextImage);
    }
    
    // Close gallery on overlay click
    if (galleryModal) {
        galleryModal.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                closeGallery();
            }
        });
    }
    
    // WhatsApp Widget
    if (whatsappWidget) {
        whatsappWidget.addEventListener('click', handleWhatsAppClick);
    }
    
    // Global event listeners
    document.addEventListener('keydown', handleKeydown);
    window.addEventListener('resize', handleResize);
    
    // Theme change listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const theme = localStorage.getItem('theme');
        if (theme === 'system' || !theme) {
            document.documentElement.classList.toggle('dark', e.matches);
        }
    });
    
    console.log('Website initialized successfully');
});

// Export functions for global access (if needed)
window.HyderabadEscort = {
    openGallery,
    closeGallery,
    nextImage,
    prevImage,
    handleWhatsAppClick,
    getFeaturedImages,
    galleryImages
};

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log(`Page load time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
    });
}

// Service Worker registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}