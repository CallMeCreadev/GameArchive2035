window.triggerShake = function() {
    const element = document.querySelector('.login-container');
    if (element) {
        console.log("Shake started");
        element.classList.add('shake');
        setTimeout(() => {
            element.classList.remove('shake');
            console.log("Shake ended");
        }, 1700); // Match this with the animation duration in CSS
    }
};

