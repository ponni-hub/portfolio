document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message sent successfully!');
        this.reset();
    });
});
