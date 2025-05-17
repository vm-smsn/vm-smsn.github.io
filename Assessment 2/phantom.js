// Mobile Navigation
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Toggle body scroll
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Image Modal Functionality
function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
    caption.textContent = img.alt;
    document.body.style.overflow = 'hidden';
    
    // Close modal when clicking outside image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize modal for all card images
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', function() {
        openModal(this);
    });
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('imageModal').style.display === 'block') {
        closeModal();
    }
});