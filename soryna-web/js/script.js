// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white', 'shadow-md');
        nav.classList.remove('bg-transparent');
    } else {
        nav.classList.remove('bg-white', 'shadow-md');
        nav.classList.add('bg-transparent');
    }
    
    // Show/hide back to top button
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.classList.remove('visible');
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});

// Back to top button
document.getElementById('back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Chatbot functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

let isChatbotOpen = false;

// Toggle chatbot
if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        isChatbotOpen = !isChatbotOpen;
        if (isChatbotOpen) {
            chatbotContainer.classList.add('active');
            chatbotInput.focus();
        } else {
            chatbotContainer.classList.remove('active');
        }
    });
}

// Close chatbot
if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
        isChatbotOpen = false;
        chatbotContainer.classList.remove('active');
    });
}

// Chatbot responses
const chatbotResponses = [
    {
        keywords: ['hello', 'hi', 'hey'],
        responses: [
            "Hello! How can I help you today?",
            "Hi there! How can I assist you?",
            "Hey! What can I do for you today?"
        ]
    },
    {
        keywords: ['service', 'services', 'offer', 'offering'],
        responses: [
            "We offer a variety of services including web development, mobile app development, AI solutions, and more. You can check our Services section for more details.",
            "Our services include web development, mobile apps, AI solutions, and IT consulting. What specifically are you interested in?"
        ]
    },
    {
        keywords: ['portfolio', 'work', 'projects', 'examples'],
        responses: [
            "You can view our portfolio in the Portfolio section of our website. Is there a specific type of project you'd like to see?",
            "We've worked on various projects across different industries. Check out our Portfolio section for some examples."
        ]
    },
    {
        keywords: ['contact', 'email', 'phone', 'address'],
        responses: [
            "You can reach us at info@pantechcorp.com or call us at +1 (555) 123-4567. Our office is located at 123 Tech Street, Silicon Valley, CA 94025.",
            "Feel free to contact us via email at info@pantechcorp.com or give us a call at +1 (555) 123-4567."
        ]
    },
    {
        keywords: ['price', 'cost', 'how much', 'pricing'],
        responses: [
            "Our pricing varies depending on the scope and requirements of your project. Could you tell me more about what you need?",
            "We offer customized solutions with pricing based on your specific needs. Let's discuss your project in more detail."
        ]
    },
    {
        keywords: ['thank', 'thanks', 'thank you'],
        responses: [
            "You're welcome! Is there anything else I can help you with?",
            "My pleasure! Let me know if you have any other questions."
        ]
    },
    {
        keywords: ['bye', 'goodbye', 'see you'],
        responses: [
            "Goodbye! Feel free to come back if you have more questions.",
            "Have a great day! Don't hesitate to reach out if you need anything else."
        ]
    }
];

// Default response if no keywords match
const defaultResponses = [
    "I'm not sure I understand. Could you rephrase that?",
    "I'm still learning. Could you ask me something else?",
    "I don't have an answer for that. Is there something else I can help you with?"
];

// Function to get a random response from an array
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to generate bot response
function generateResponse(message) {
    message = message.toLowerCase();
    
    // Check for matching keywords
    for (const item of chatbotResponses) {
        for (const keyword of item.keywords) {
            if (message.includes(keyword)) {
                return getRandomResponse(item.responses);
            }
        }
    }
    
    // If no keywords match, return a default response
    return getRandomResponse(defaultResponses);
}

// Function to add a message to the chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('flex', 'items-start', 'mb-4');
    
    if (isUser) {
        messageDiv.classList.add('justify-end');
        messageDiv.innerHTML = `
            <div class="flex items-end">
                <div class="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-l-2xl rounded-tr-2xl max-w-xs">
                    <p class="text-sm">${message}</p>
                </div>
                <div class="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm ml-2">
                    <i class="fas fa-user"></i>
                </div>
            </div>
        `;
    } else {
        messageDiv.classList.add('justify-start');
        messageDiv.innerHTML = `
            <div class="flex items-end">
                <div class="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-2">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="bg-gray-100 p-3 rounded-r-2xl rounded-bl-2xl max-w-xs">
                    <p class="text-sm">${message}</p>
                </div>
            </div>
        `;
    }
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Handle send button click
if (chatbotSend) {
    chatbotSend.addEventListener('click', sendMessage);
}

// Handle enter key in input
if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Function to send a message
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, true);
    
    // Clear input
    chatbotInput.value = '';
    
    // Simulate typing delay
    setTimeout(() => {
        // Generate and add bot response
        const response = generateResponse(message);
        addMessage(response, false);
    }, 1000);
}

// Add welcome message when the page loads
window.addEventListener('load', () => {
    // Add a small delay to the welcome message
    setTimeout(() => {
        addMessage("Hello! I'm your soryna assistant. How can I help you today?", false);
    }, 1000);
});

// Catalog filter interaction
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('[data-catalog-filter]');
    const catalogItems = document.querySelectorAll('.catalog-item');

    if (filterButtons.length && catalogItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-catalog-filter');

                filterButtons.forEach(b => {
                    if (b === button) {
                        b.classList.remove('bg-white', 'text-gray-700', 'border', 'border-sky-200');
                        b.classList.add('bg-sky-500', 'text-white');
                    } else {
                        b.classList.remove('bg-sky-500', 'text-white');
                        b.classList.add('bg-white', 'text-gray-700', 'border', 'border-sky-200');
                    }
                });

                catalogItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
window.addEventListener('load', animateOnScroll);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('animate-on-scroll');
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.2}s`;
    });
    
    // Trigger animations
    setTimeout(() => {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (sectionPosition < screenPosition) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }, 500);
});
