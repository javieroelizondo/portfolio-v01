document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 20;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Night mode toggle
    const nightModeToggle = document.getElementById('night-mode-toggle');
    const body = document.body;
    const moonIcon = nightModeToggle.querySelector('i');

    nightModeToggle.addEventListener('click', () => {
        body.classList.toggle('night-mode');
        if (body.classList.contains('night-mode')) {
            moonIcon.classList.remove('fa-moon');
            moonIcon.classList.add('fa-sun');
        } else {
            moonIcon.classList.remove('fa-sun');
            moonIcon.classList.add('fa-moon');
        }
    });

    // Project tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const projectContents = document.querySelectorAll('.project-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            projectContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });

    // Form submission (you can add your own logic here)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted! (This is a placeholder action)');
    });

    // Technology icon hover effect
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });

    // Active link highlighting
    const navLinks = document.querySelectorAll('#navbar a');
    const sections = document.querySelectorAll('section');

    function highlightActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    highlightActiveLink();
    window.addEventListener('scroll', highlightActiveLink);
});

