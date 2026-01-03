// script.js

// Hotel Data
const hotels = [
    {
        id: 1,
        name: "Grand Plaza Hotel",
        location: "Paris, France",
        price: 299,
        rating: 4.5,
        category: "luxury",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        lat: 48.8566,
        lng: 2.3522,
        description: "Luxury hotel with panoramic city views, spa, and fine dining.",
        history: "Established in 1928, the Grand Plaza Hotel has been a landmark of luxury hospitality in Paris for nearly a century. Originally built as a palace for visiting dignitaries, it was converted into a hotel in 1935 and quickly became known for its opulent Art Deco interiors and exceptional service.",
        amenities: ["Spa", "Pool", "Restaurant", "Gym", "Concierge"],
        reviews: [
            { name: "John Smith", rating: 5, date: "May 2023", comment: "Absolutely stunning hotel with exceptional service!" },
            { name: "Emma Wilson", rating: 4, date: "April 2023", comment: "Great location and amazing views from our room." }
        ]
    },
    {
        id: 2,
        name: "Coastal Retreat Resort",
        location: "Santorini, Greece",
        price: 459,
        rating: 5.0,
        category: "resort",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        lat: 36.3932,
        lng: 25.4615,
        description: "Beachfront resort with private pools and sunset views.",
        history: "Opened in 1998, Coastal Retreat Resort was designed by renowned architect Eleni Papadopoulos to blend seamlessly with Santorini's iconic landscape. Built on the site of a former vineyard, the resort preserves the original stone walls and terraces.",
        amenities: ["Private Pool", "Beach Access", "Spa", "Restaurant", "Bar"],
        reviews: [
            { name: "Maria Rodriguez", rating: 5, date: "April 2023", comment: "Perfect romantic getaway with amazing service!" },
            { name: "David Chen", rating: 5, date: "March 2023", comment: "Best sunset views I've ever seen!" }
        ]
    },
    {
        id: 3,
        name: "Urban Loft Hotel",
        location: "New York, USA",
        price: 189,
        rating: 4.8,
        category: "boutique",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        lat: 40.7128,
        lng: -74.0060,
        description: "Designer boutique hotel in the heart of downtown.",
        history: "Housed in a former textile factory built in 1903, Urban Loft Hotel represents New York's industrial past meeting contemporary design. The building was saved from demolition in 2001 by preservationists.",
        amenities: ["City Views", "Gym", "Bar", "Free WiFi", "Concierge"],
        reviews: [
            { name: "Sarah Johnson", rating: 4, date: "June 2023", comment: "Great design and perfect location for exploring NYC." },
            { name: "Michael Brown", rating: 5, date: "May 2023", comment: "Excellent service and comfortable rooms." }
        ]
    },
    {
        id: 4,
        name: "Mountain View Lodge",
        location: "Swiss Alps, Switzerland",
        price: 329,
        rating: 4.6,
        category: "resort",
        image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        lat: 46.8182,
        lng: 8.2275,
        description: "Alpine retreat with ski-in/ski-out access and fireplace suites.",
        history: "Founded in 1889 as a simple mountain inn for Alpine explorers, Mountain View Lodge has evolved into a world-class resort while maintaining its rustic charm.",
        amenities: ["Ski Access", "Fireplace", "Spa", "Restaurant", "Hot Tub"],
        reviews: [
            { name: "Robert Taylor", rating: 5, date: "February 2023", comment: "Perfect ski vacation with amazing mountain views!" },
            { name: "Lisa Wang", rating: 4, date: "January 2023", comment: "Cozy rooms and great ski facilities." }
        ]
    },
    {
        id: 5,
        name: "Ocean Breeze Hotel",
        location: "Bali, Indonesia",
        price: 199,
        rating: 4.3,
        category: "budget",
        image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        lat: -8.4095,
        lng: 115.1889,
        description: "Tropical paradise with beachfront bungalows and spa.",
        history: "Opened in 2005 as a small family-run guesthouse, Ocean Breeze has grown into a beloved beachfront property while maintaining its intimate atmosphere.",
        amenities: ["Beachfront", "Spa", "Pool", "Restaurant", "Yoga Classes"],
        reviews: [
            { name: "Jessica Lee", rating: 4, date: "March 2023", comment: "Beautiful location and friendly staff!" },
            { name: "Kevin Patel", rating: 5, date: "April 2023", comment: "Amazing value for money in a perfect location." }
        ]
    },
    {
        id: 6,
        name: "Royal Heritage Palace",
        location: "Jaipur, India",
        price: 549,
        rating: 4.9,
        category: "luxury",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        lat: 26.9124,
        lng: 75.7873,
        description: "Heritage palace converted into a luxury hotel with royal treatment.",
        history: "Built in 1727 as a royal palace, this property was converted into a luxury hotel in 1956, preserving its original architecture and royal heritage.",
        amenities: ["Palace Gardens", "Spa", "Pool", "Fine Dining", "Butler Service"],
        reviews: [
            { name: "Raj Singh", rating: 5, date: "May 2023", comment: "Truly royal experience with impeccable service!" },
            { name: "Sophia Martinez", rating: 5, date: "April 2023", comment: "Like stepping back in time with modern luxury." }
        ]
    }
];

// Global Variables
let map;
let markers = [];
let currentUser = null;
let selectedHotel = null;

// DOM Elements
const navLinks = document.querySelectorAll('.nav-links a');
const contentSections = document.querySelectorAll('.content-section');
const hamburger = document.getElementById('hamburger');
const navContainer = document.getElementById('navContainer');
const hotelGrid = document.getElementById('hotelGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hotelModal = document.getElementById('hotelModal');
const closeModal = document.querySelector('.close-modal');
const modalBody = document.getElementById('modalBody');
const paymentForm = document.getElementById('paymentForm');
const userNameElement = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    // Check if user is logged in
    checkAuth();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize hotel listings
    loadHotels();
    
    // Initialize map
    initMap();
    
    // Initialize event listeners
    initEventListeners();
    
    // Show home section by default
    showSection('home');
}

// Authentication Functions
function checkAuth() {
    const storedUser = localStorage.getItem('hotelUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        updateUserUI();
    } else {
        // Redirect to auth page if not logged in
        window.location.href = 'auth.html';
    }
}

function updateUserUI() {
    if (currentUser) {
        userNameElement.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
    }
}

// Navigation Functions
function initNavigation() {
    // Navigation click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show the selected section
            showSection(section);
            
            // Close mobile menu if open
            navContainer.classList.remove('active');
        });
    });
    
    // Hamburger menu for mobile
    hamburger.addEventListener('click', function() {
        navContainer.classList.toggle('active');
    });
}

function showSection(sectionId) {
    // Hide all sections
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
        
        // Special handling for specific sections
        if (sectionId === 'map') {
            setTimeout(() => {
                map.invalidateSize();
            }, 300);
        }
    }
}

// Hotel Functions
function loadHotels(filter = 'all') {
    hotelGrid.innerHTML = '';
    
    const filteredHotels = filter === 'all' 
        ? hotels 
        : hotels.filter(hotel => hotel.category === filter);
    
    filteredHotels.forEach(hotel => {
        const hotelCard = createHotelCard(hotel);
        hotelGrid.appendChild(hotelCard);
    });
}

function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'hotel-card glass-card';
    card.dataset.id = hotel.id;
    
    // Create star rating HTML
    const stars = Array(5).fill(0).map((_, i) => 
        i < Math.floor(hotel.rating) 
            ? '<i class="fas fa-star"></i>'
            : i < hotel.rating
                ? '<i class="fas fa-star-half-alt"></i>'
                : '<i class="far fa-star"></i>'
    ).join('');
    
    card.innerHTML = `
        <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
        <div class="hotel-info">
            <h3>${hotel.name}</h3>
            <div class="hotel-location">
                <i class="fas fa-map-marker-alt"></i> ${hotel.location}
            </div>
            <div class="hotel-price">$${hotel.price} <span class="price-badge">Per Night</span></div>
            <div class="rating">
                ${stars}
                <span style="color:#666; margin-left:5px;">${hotel.rating} (${hotel.reviews.length} reviews)</span>
            </div>
            <p>${hotel.description}</p>
            <button class="btn-primary view-details-btn" data-id="${hotel.id}">View Details & Book</button>
        </div>
    `;
    
    // Add click event to view details button
    card.querySelector('.view-details-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        const hotelId = parseInt(this.dataset.id);
        showHotelDetails(hotelId);
    });
    
    // Add click event to entire card
    card.addEventListener('click', function() {
        const hotelId = parseInt(this.dataset.id);
        showHotelDetails(hotelId);
    });
    
    return card;
}

function showHotelDetails(hotelId) {
    const hotel = hotels.find(h => h.id === hotelId);
    if (!hotel) return;
    
    selectedHotel = hotel;
    
    // Create star rating HTML
    const stars = Array(5).fill(0).map((_, i) => 
        i < Math.floor(hotel.rating) 
            ? '<i class="fas fa-star"></i>'
            : i < hotel.rating
                ? '<i class="fas fa-star-half-alt"></i>'
                : '<i class="far fa-star"></i>'
    ).join('');
    
    // Create reviews HTML
    const reviewsHTML = hotel.reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <h4>${review.name}</h4>
                <div class="review-rating">
                    ${Array(5).fill(0).map((_, i) => 
                        i < review.rating 
                            ? '<i class="fas fa-star"></i>' 
                            : '<i class="far fa-star"></i>'
                    ).join('')}
                </div>
            </div>
            <div class="review-date">${review.date}</div>
            <p>${review.comment}</p>
        </div>
    `).join('');
    
    modalBody.innerHTML = `
        <div class="hotel-details">
            <div>
                <img src="${hotel.image}" alt="${hotel.name}">
                <div class="hotel-info">
                    <h2>${hotel.name}</h2>
                    <div class="hotel-location">
                        <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                    </div>
                    <div class="hotel-price">$${hotel.price} <span class="price-badge">Per Night</span></div>
                    <div class="rating">
                        ${stars}
                        <span>${hotel.rating} (${hotel.reviews.length} reviews)</span>
                    </div>
                    <p>${hotel.description}</p>
                    
                    <h3 style="margin-top: 20px;">Amenities</h3>
                    <div class="amenities">
                        ${hotel.amenities.map(amenity => 
                            `<span class="amenity-badge">${amenity}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
            
            <div>
                <div class="history-section">
                    <h3>Hotel History</h3>
                    <p>${hotel.history}</p>
                </div>
                
                <div class="reviews-section">
                    <h3>Guest Reviews</h3>
                    ${reviewsHTML}
                </div>
                
                <button class="btn-primary btn-book" style="width: 100%; margin-top: 20px;">
                    Book Now for $${hotel.price}/night
                </button>
            </div>
        </div>
    `;
    
    // Add event listener to book button
    modalBody.querySelector('.btn-book').addEventListener('click', function() {
        updateBookingSummary(hotel);
        showSection('payment');
        hotelModal.classList.remove('active');
    });
    
    hotelModal.classList.add('active');
}

// Map Functions
function initMap() {
    // Initialize map
    map = L.map('hotelMap').setView([20, 0], 2);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);
    
    // Add hotel markers
    hotels.forEach(hotel => {
        const marker = L.marker([hotel.lat, hotel.lng])
            .addTo(map)
            .bindPopup(`
                <b>${hotel.name}</b><br>
                ${hotel.location}<br>
                <b>$${hotel.price} per night</b><br>
                <button class="map-popup-btn" data-id="${hotel.id}">View Details</button>
            `);
        
        markers.push(marker);
        
        // Add click event to popup button
        marker.on('popupopen', function() {
            const popupBtn = document.querySelector('.map-popup-btn');
            if (popupBtn) {
                popupBtn.addEventListener('click', function() {
                    const hotelId = parseInt(this.dataset.id);
                    showHotelDetails(hotelId);
                });
            }
        });
    });
}

// Event Listeners
function initEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            loadHotels(filter);
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        hotelModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === hotelModal) {
            hotelModal.classList.remove('active');
        }
    });
    
    // Payment form submission
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        processPayment();
    });
    
    // Logout
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('hotelUser');
        window.location.href = 'auth.html';
    });
    
    // Update booking dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    document.getElementById('checkinDate').textContent = formatDate(today);
    document.getElementById('checkoutDate').textContent = formatDate(tomorrow);
}

// Utility Functions
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function updateBookingSummary(hotel) {
    document.getElementById('selectedHotel').textContent = hotel.name;
    document.getElementById('totalAmount').textContent = `$${hotel.price}.00`;
}

function processPayment() {
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    
    if (!cardName || !cardNumber) {
        alert('Please fill in all payment details.');
        return;
    }
    
    // Simulate payment processing
    alert(`Payment successful! Thank you for booking ${selectedHotel.name}. A confirmation has been sent to your email.`);
    
    // Reset form
    paymentForm.reset();
    showSection('home');
}

// Auto-format card number
document.getElementById('cardNumber')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = value.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];
    
    for (let i = 0; i < match.length; i += 4) {
        parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
        e.target.value = parts.join(' ');
    } else {
        e.target.value = value;
    }
});

// Auto-format expiry date
document.getElementById('expiryDate')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (value.length >= 2) {
        e.target.value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
});