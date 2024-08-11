// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 100);
});

// Home Page: Add bounce effect to profile picture
const profilePic = document.querySelector('header .profile-pic');
if (profilePic) {
    profilePic.addEventListener('mouseover', () => {
        profilePic.style.transform = 'scale(1.2)';
    });
    profilePic.addEventListener('mouseout', () => {
        profilePic.style.transform = 'scale(1)';
    });
}

// About Page: Fade in the skills section on scroll
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const observerOptions = {
        threshold: 0.5
    };

    const skillsObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, observerOptions);

    skillsObserver.observe(skillsSection);
}

// Portfolio Page: Animate project cards on hover
const projects = document.querySelectorAll('.project');
if (projects) {
    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.classList.add('active');
        });

        project.addEventListener('mouseout', () => {
            project.classList.remove('active');
        });
    });
}

// Contact Page: Form submission with validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
        } else {
            alert('Thank you for your message, ' + name + '!');
            contactForm.reset();
        }
    });
}
