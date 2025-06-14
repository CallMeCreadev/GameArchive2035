// Function to simulate opening a file
window.openFile = function (fileName) {
    alert(`File ${fileName} would be opened here.`);
    // You can extend this to actually open files, or perform other actions
};

window.focusAndClickInput = function (elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.focus();
        element.click();
    }
};
