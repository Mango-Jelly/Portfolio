// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Mark section as focused when mostly visible
            if (entry.intersectionRatio > 0.5) {
                entry.target.classList.add('focused');
            }
        } else {
            // Fade out when leaving viewport
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            entry.target.classList.remove('focused');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Special fade-in observer for hero cards with significant fade effect
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Fade in significantly
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        } else {
            // Reset to invisible when leaving
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(40px) scale(0.9)';
        }
    });
}, {
    threshold: 0.01,
    rootMargin: '0px'
});

// Apply fade-in animation to hero cards
const heroCard = document.querySelector('.hero-card');
const currentlyTaking = document.querySelector('.currently-taking');

if (heroCard) {
    heroCard.style.opacity = '0';
    heroCard.style.transform = 'translateY(40px) scale(0.9)';
    heroCard.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
    heroObserver.observe(heroCard);
}

if (currentlyTaking) {
    currentlyTaking.style.opacity = '0';
    currentlyTaking.style.transform = 'translateY(40px) scale(0.9)';
    currentlyTaking.style.transition = 'opacity 1s ease 0.5s, transform 1s ease 0.5s';
    heroObserver.observe(currentlyTaking);
}

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .timeline-item, .skill-category');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.project-card, .timeline-item, .skill-category').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would do something like:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('Message sent successfully!');
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     alert('Error sending message. Please try again.');
        // });
    });
}

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// Rotating classes animation
const classItems = document.querySelectorAll('.class-item');
let currentClassIndex = 0;

function rotateClasses() {
    classItems.forEach(item => item.classList.remove('active'));
    classItems[currentClassIndex].classList.add('active');
    currentClassIndex = (currentClassIndex + 1) % classItems.length;
}

if (classItems.length > 0) {
    rotateClasses();
    setInterval(rotateClasses, 3000);
}

// Add smooth reveal animation to hero content
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease';
    }
});

// Parallax effect disabled to prevent hero scrolling
// window.addEventListener('scroll', () => {
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         const scrolled = window.pageYOffset;
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Loading animation disabled
// window.addEventListener('load', () => {
//     document.body.style.opacity = '0';
//     setTimeout(() => {
//         document.body.style.transition = 'opacity 0.5s ease';
//         document.body.style.opacity = '1';
//     }, 100);
// });

// Mouse movement parallax effect
const hero = document.querySelector('.hero');
if (hero) {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Move hero background based on mouse position
        hero.style.backgroundPosition = `${50 + mouseX * 10}% ${50 + mouseY * 10}%`;
    });
}

// Snowflake effect with physics
let snowflakesEnabled = true;
const snowflakes = [];
const maxSnowflakes = 50;

class Snowflake {
    constructor(x, y) {
        this.element = document.createElement('div');
        this.element.className = 'snowflake';
        this.element.textContent = '❄';
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
        document.body.appendChild(this.element);
        
        this.x = x;
        this.y = y;
        this.velocityY = Math.random() * 2 + 1; // fall speed
        this.velocityX = (Math.random() - 0.5) * 1; // horizontal drift
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 5;
        this.size = Math.random() * 1.0 + 1.5;
        this.element.style.fontSize = this.size + 'rem';
        this.opacity = Math.random() * 0.5 + 0.5;
        this.element.style.opacity = this.opacity;
    }
    
    update() {
        this.y += this.velocityY;
        this.x += this.velocityX;
        this.rotation += this.rotationSpeed;
        
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.element.style.transform = `rotate(${this.rotation}deg)`;
        
        // Remove if off screen
        if (this.y > window.innerHeight + 50) {
            this.remove();
            return false;
        }
        return true;
    }
    
    remove() {
        this.element.remove();
    }
}

document.addEventListener('mousemove', (e) => {
    if (!snowflakesEnabled) return;
    
    // Create snowflake on mouse move
    if (Math.random() < 0.3) { // 30% chance per move
        const snowflake = new Snowflake(e.clientX, e.clientY);
        snowflakes.push(snowflake);
        
        // Limit total snowflakes
        if (snowflakes.length > maxSnowflakes) {
            const oldSnow = snowflakes.shift();
            oldSnow.remove();
        }
    }
});

// Animate snowflakes
function animateSnowflakes() {
    for (let i = snowflakes.length - 1; i >= 0; i--) {
        if (!snowflakes[i].update()) {
            snowflakes.splice(i, 1);
        }
    }
    requestAnimationFrame(animateSnowflakes);
}

animateSnowflakes();

// Cursor glow effect
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

let glowEnabled = true;

document.addEventListener('mousemove', (e) => {
    if (glowEnabled) {
        cursorGlow.style.left = e.pageX + 'px';
        cursorGlow.style.top = e.pageY + 'px';
    }
});

// Snow toggle button
const snowToggle = document.getElementById('snow-toggle');
if (snowToggle) {
    snowToggle.classList.add('active'); // start enabled
    
    snowToggle.addEventListener('click', () => {
        snowflakesEnabled = !snowflakesEnabled;
        glowEnabled = !glowEnabled;
        snowToggle.classList.toggle('active');
        
        // Clear existing snowflakes when disabled
        if (!snowflakesEnabled) {
            snowflakes.forEach(s => s.remove());
            snowflakes.length = 0;
        }
        
        // Hide/show cursor glow
        cursorGlow.style.opacity = glowEnabled ? '1' : '0';
    });
}

// ===== Fun detail hover logic =====
const funItems = document.querySelectorAll('.fun-item');
const funDetail = document.getElementById('fun-detail');
const funArtwork = document.getElementById('fun-artwork');
const funDetailTitle = document.getElementById('fun-detail-title');
const funDetailSub = document.getElementById('fun-detail-sub');
const funDetailLink = document.getElementById('fun-detail-link');

const funContentMap = {
    about: {
        title: 'Hello, this is Jun...',
        sub: 'I am interested in applying mathematical modeling and programming to solve dynamical-systems related problems, I am currently working on a research project in genetics and biology.',
        artwork: 'images/about.png'
    },
    music: {
        title: 'Now Playing...',
        sub: 'Sunsets and Cigarettes - Mark Tuan',
        artwork: 'images/music.png'
    },
    interests: {
        title: 'The For-Fun Interests',
        sub: 'I am a huge fan of deception tabletop games such as Avalon and Secret Hitler, as well as silly games like Exploding Kittens. I also enjoy playing instruments (violin and piano) and playing badminton with friends.',
    },
    drinks: {
        title: 'Recent Favorite Drinks',
        sub: 'Caramel Macchiato, Iced Americano, Milk Green Tea Boba',
        artwork: 'images/drinks.png'
    }
};

let hideDetailTimer;

function showFunDetail(key) {
    const data = funContentMap[key];
    if (!data || !funDetail) return;

    funDetailTitle.textContent = data.title || 'Details';
    funDetailSub.textContent = data.sub || '';
    
    // Hide the link element
    funDetailLink.style.display = 'none';

    // Show/hide artwork based on whether it exists
    if (data.artwork) {
        funArtwork.style.display = 'block';
        funArtwork.style.backgroundImage = `url(${data.artwork})`;
        funArtwork.style.backgroundSize = 'cover';
        funArtwork.style.backgroundPosition = 'center';
        funDetail.style.gridTemplateColumns = '140px 1fr';
    } else {
        funArtwork.style.display = 'none';
        funDetail.style.gridTemplateColumns = '1fr';
    }

    funDetail.classList.add('visible');
}

function scheduleHideFunDetail() {
    hideDetailTimer = setTimeout(() => funDetail && funDetail.classList.remove('visible'), 1000);
}

if (funItems.length && funDetail) {
    funItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            clearTimeout(hideDetailTimer);
            const key = item.getAttribute('data-key');
            showFunDetail(key);
        });
        item.addEventListener('mouseleave', () => {
            scheduleHideFunDetail();
        });
    });

    funDetail.addEventListener('mouseenter', () => clearTimeout(hideDetailTimer));
    funDetail.addEventListener('mouseleave', scheduleHideFunDetail);
}
