// Function to initialize modal events and input event listeners
function initializeModalEvents() {
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('password-error');
    const submitButton = document.querySelector('.modal-button-submit'); // Use a class selector

    if (passwordInput) {
        console.log('Password input found');
        passwordInput.addEventListener('keydown', (event) => {
            console.log('Key pressed:', event.key);
            if (event.key === 'Enter') {
                event.preventDefault();
                console.log('Enter key pressed');
                if (submitButton) {
                    submitButton.click(); // Trigger the click event on the Submit button
                } else {
                    console.error('Submit button not found.');
                }
            }
        });

        // Add an event listener to clear the error message when input changes
        passwordInput.addEventListener('input', () => {
            if (errorElement) {
                errorElement.style.display = 'none'; // Hide error message when input is modified
            }
        });
    } else {
        console.error('Password input field not found.');
    }
}

// Function to show temporary error message
function showTemporaryError(message) {
    const errorElement = document.getElementById('password-error');
    if (errorElement) {
        errorElement.textContent = message; // Set the error message
        errorElement.style.display = 'block'; // Show the error message
        setTimeout(() => {
            errorElement.style.display = 'none'; // Hide the error message after 3 seconds
        }, 3000);
    } else {
        console.error('Error element not found.');
    }
}

// Ensure these functions are correctly defined and available globally
function showModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.style.display = 'flex'; // Show the modal
        initializeModalEvents(); // Initialize event listeners
    } else {
        console.error('Modal overlay element not found.');
    }
}

function hideModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.style.display = 'none'; // Hide the modal
    } else {
        console.error('Modal overlay element not found.');
    }
}
