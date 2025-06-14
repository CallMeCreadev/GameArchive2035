window.safeActions = {
    toggleVisibility: function (elementId, displayValue) {
        console.log("toggleVisibility called with:", elementId, displayValue);
        const element = document.getElementById(elementId);
        if (element) {
            console.log("Setting display value:", displayValue);
            element.style.display = displayValue;  // Use the actual display value
            console.log(`Simulated action: Element ${elementId} display set to "${displayValue}".`);
        } else {
            console.log(`Element ${elementId} not found.`);
        }
    },
    
    // Change Element's Background Color
    changeColor: function (elementId, color) {
        console.log("changeColor called with:", elementId, color);
        const element = document.getElementById(elementId);
        if (element) {
            console.log("toggling background color");
            element.style.backgroundColor = color;
            console.log(`Simulated action: Element ${elementId} background color changed to ${color}.`);
        } else {
            console.log(`Element ${elementId} not found.`);
        }
    },

    // Change Element's Text Color
    changeTextColor: function (elementId, color) {
        console.log("changeTextColor called with:", elementId, color);
        const element = document.getElementById(elementId);
        if (element) {
            console.log("toggling text color");
            element.style.color = color;
            console.log(`Simulated action: Element ${elementId} text color changed to ${color}.`);
        } else {
            console.log(`Element ${elementId} not found.`);
        }
    },

    // Change Inner Text of an Element
    changeText: function (elementId, newText) {
        console.log("changeText called with:", elementId, newText);
        const element = document.getElementById(elementId);
        if (element) {
            console.log("toggling text");
            element.innerText = newText;
            console.log(`Simulated action: Text of ${elementId} changed to "${newText}".`);
        } else {
            console.log(`Element ${elementId} not found.`);
        }
    },

    // Parse and simulate XSS-like scripts
    simulateXSS: function (script) {
        console.log("simulateXSS called with script:", script);
        // Removing <script> tags for parsing and normalizing spaces
        script = script.replace(/<\/?script>/gi, '').replace(/\s+/g, ' ').trim();

        // Matching document.getElementById('id').style.display='value';
        const displayMatch = script.match(/document\.getElementById\(['"]([^'"]+)['"]\)\.style\.display\s*=\s*['"]([^'"]+)['"]/);
        if (displayMatch) {
            const elementId = displayMatch[1];
            const displayValue = displayMatch[2];
            console.log("Display match found:", elementId, displayValue);
            this.toggleVisibility(elementId, displayValue);  // Pass the actual display value, not just 'block' or 'none'
            return;
        }

        // Matching other patterns
        const bgColorMatch = script.match(/document\.getElementById\(['"]([^'"]+)['"]\)\.style\.backgroundColor\s*=\s*['"]([^'"]+)['"]/);
        if (bgColorMatch) {
            const elementId = bgColorMatch[1];
            const color = bgColorMatch[2];
            this.changeColor(elementId, color);
            return;
        }

        const textColorMatch = script.match(/document\.getElementById\(['"]([^'"]+)['"]\)\.style\.color\s*=\s*['"]([^'"]+)['"]/);
        if (textColorMatch) {
            const elementId = textColorMatch[1];
            const color = textColorMatch[2];
            this.changeTextColor(elementId, color);
            return;
        }

        const textMatch = script.match(/document\.getElementById\(['"]([^'"]+)['"]\)\.innerText\s*=\s*['"]([^'"]+)['"]/);
        if (textMatch) {
            const elementId = textMatch[1];
            const newText = textMatch[2];
            this.changeText(elementId, newText);
            return;
        }

        // If no patterns match
        console.log(`Unrecognized or unsupported script: ${script}`);
    },

    // Run a specific action or simulate XSS
    run: function (actionName, ...args) {
        console.log(new Date().toISOString() + " run called with:", actionName, args);
        if (this[actionName]) {
            this[actionName](...args);
            console.log(new Date().toISOString() + ` Simulated action: ${actionName} executed with arguments:`, args);
        } else {
            console.log(new Date().toISOString() + ` Simulating XSS with script: ${actionName}`);
            this.simulateXSS(actionName);
        }
    },
};
