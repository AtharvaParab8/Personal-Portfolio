let imgContainers = document.querySelector('.image-container');

// Iterate through the NodeList and add the event listener to each image container
imgContainers.forEach(container => {
    container.addEventListener("mouseover", () => {
        container.style.backgroundColor = '#119DA4';
        container.style.borderRadius="2%";
    });

    container.addEventListener("mouseout", () => {
        container.style.backgroundColor = ''; // Reset to default background color
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the form input and textarea elements
    let formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

    // Select the form itself
    let contactForm = document.querySelector('.contact-form');

    // Add event listener to the form to apply focus effect when the cursor enters the form
    contactForm.addEventListener("mouseover", () => {
        // Iterate through the NodeList and apply focus event listener to each form element
        formInputs.forEach(input => {
            input.addEventListener("focus", () => {
                input.style.border = '2px solid #119DA4';  // Example: Change border color on focus
            });

            input.addEventListener("blur", () => {
                input.style.border = '';  // Reset border color on blur
            });
        });
    });

    // Add event listener to the form to remove focus effect when the cursor leaves the form
    contactForm.addEventListener("mouseout", () => {
        // Iterate through the NodeList and remove focus event listener from each form element
        formInputs.forEach(input => {
            input.removeEventListener("focus", () => {
                input.style.border = '2px solid #119DA4';
            });

            input.removeEventListener("blur", () => {
                input.style.border = '';
            });
        });
    });
});

