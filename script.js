// Smooth scrolling for navigation links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1); // Get the target ID from the href
        const targetElement = document.getElementById(targetId); // Check if the target element exists

        if (targetElement) {
            // If the target element exists (internal link), enable smooth scrolling
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        } else {
            // If the target element does not exist (external link), allow normal navigation
            // Do nothing and let the default behavior occur
        }
    });
});


// Scroll-to-top button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '⬆️';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add styles for the scroll-to-top button
const style = document.createElement('style');
style.innerHTML = `
    .scroll-to-top {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
    }
    .scroll-to-top:hover {
        background-color: #555;
    }
`;
document.head.appendChild(style);


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

function signUp() {
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    console.log(`Sign Up - Name: ${name}, Email: ${email}, Password: ${password}`);
    // Add your sign-up logic here
}

function signIn() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    console.log(`Sign In - Email: ${email}, Password: ${password}`);
    // Add your sign-in logic here
}

