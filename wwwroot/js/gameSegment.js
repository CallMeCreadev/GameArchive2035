// Check if the script has already been initialized to prevent multiple initializations
if (!window.gameSegmentInitialized) {
    window.gameSegmentInitialized = true;

    console.log("gameSegment.js loaded");

    function logAnimationEvents(targetId) {
        const element = document.getElementById(targetId);
        if (element) {
            element.addEventListener('animationstart', (e) => {
                //console.log(`Target ${targetId}: Animation started.`);
            });
            element.addEventListener('animationend', (e) => {
                //console.log(`Target ${targetId}: Animation ended.`);
            });
        } else {
            //console.error(`Element with ID ${targetId} not found.`);
        }
    }

    function updateTimer(remainingTime) {
        const timerElement = document.getElementById("timer");
        if (timerElement) {
            timerElement.textContent = remainingTime;
        }
    }

    function getScreenCenter() {
        console.log("getScreenCenter function called");
        const x = Math.floor(window.innerWidth / 2);
        const y = Math.floor(window.innerHeight / 2);
        console.log("Screen center:", [x, y]);
        return [x, y];
    }
}
