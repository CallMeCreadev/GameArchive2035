// Function to set the audio source for the background music
window.setAudioSource = (audioElement, sourceUrl) => {
    if (audioElement) {
        audioElement.src = sourceUrl;
        audioElement.load();
    }
};

// Function to set the volume for the audio element
window.setVolume = (audioElement, volumeLevel) => {
    if (audioElement) {
        audioElement.volume = volumeLevel;
    }
};

// Function to focus the game area
window.focusGameArea = (gameArea) => {
    if (gameArea) {
        gameArea.focus();
    }
};

// Function to log animation events (if needed)
window.logAnimationEvents = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('animationend', () => {
            console.log(`Animation ended for element: ${elementId}`);
        });
    }
};

// Function to set the background image based on the selected background
window.setBackgroundImage = (backgroundName) => {
    let imageUrl;
    switch (backgroundName) {
        case 'Login':
            imageUrl = "url('../images/Loginai.png')";
            break;
        case 'Member':
            imageUrl = "url('../images/memberfilesai.png')";
            break;
        case 'Secure':
            imageUrl = "url('../images/secureai.png')";
            break;
        case 'Mainframe':
            imageUrl = "url('../images/mainframeai.png')";
            break;
        case 'Classified':
            imageUrl = "url('../images/Classifiedai2.png')";
            break;
        case 'Gateway':
            imageUrl = "url('../images/gatewayai.png')";
            break;
        default:
            imageUrl = "url('../images/Loginai.png')";
            break;
    }

    document.body.style.setProperty('--background-image', imageUrl);
};
