// Import shared functionality from main script
document.addEventListener('DOMContentLoaded', function() {
    // Load shared functionality
    const script = document.createElement('script');
    script.src = 'script.js';
    script.onload = function() {
        // Initialize services page specific functionality
        initServicesPage();
    };
    document.head.appendChild(script);
});

// Services page specific functionality
function initServicesPage() {
    // Tab functionality
    initTabs();
    
    // Populate galleries for all categories
    populateServiceGalleries();
}

function initTabs() {
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetTab = trigger.getAttribute('data-tab');
            
            // Remove active class from all triggers and contents
            tabTriggers.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked trigger and corresponding content
            trigger.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });
}

function populateServiceGalleries() {
    // Get gallery images from the main script
    const images = window.HyderabadEscort?.galleryImages || [];
    
    // All models gallery
    const allGallery = document.querySelector('.gallery-all');
    if (allGallery) {
        populateGallery(allGallery, images);
    }
    
    // Category specific galleries
    const categories = ['vip', 'elite', 'premium', 'independent'];
    categories.forEach(category => {
        const gallery = document.querySelector(`.gallery-${category}`);
        if (gallery) {
            const categoryImages = images.filter(img => img.category === category);
            populateGallery(gallery, categoryImages);
        }
    });
}

function populateGallery(container, images) {
    container.innerHTML = '';
    
    images.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        container.appendChild(galleryItem);
    });
}

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
    
    galleryItem.addEventListener('click', () => {
        if (window.HyderabadEscort?.openGallery) {
            window.HyderabadEscort.openGallery(index);
        }
    });
    
    return galleryItem;
}