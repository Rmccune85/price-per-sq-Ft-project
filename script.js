// ============================
// Import Rectangle Class from Rectangle.js
// ============================
import Rectangle from './Rectangle.js';

// ============================
// Get DOM Elements
// ============================
const lengthInput = document.getElementById('length');   // Input for Length
const widthInput = document.getElementById('width');     // Input for Width
const priceInput = document.getElementById('price');     // Input for Price per Square Foot
const sqftOutput = document.getElementById('sqft');      // Display for Calculated Square Feet
const costOutput = document.getElementById('cost');      // Display for Total Cost
const calculateBtn = document.getElementById('calculateBtn'); // Button for Calculating Total Cost
const clearBtn = document.getElementById('clearBtn');    // Button for Clearing Inputs and Outputs

// ============================
// Function to Calculate Square Feet
// ============================
/**
 * Calculates the square footage by multiplying Length and Width.
 * Displays the result automatically as the user enters values.
 */
const calculateSquareFeet = () => {
    // Get Length and Width values
    const length = parseFloat(lengthInput.value);  // Get the length as a number
    const width = parseFloat(widthInput.value);    // Get the width as a number

    // Validate inputs: must be positive numbers
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        sqftOutput.textContent = "0";  // Display 0 if invalid input
        return 0;
    }

    // Calculate Square Feet
    const sqft = length * width;  // Multiply Length and Width to get Square Feet
    sqftOutput.textContent = sqft; // Display the calculated Square Feet
    return sqft;
};

// ============================
// Function to Calculate Total Cost
// ============================
/**
 * Calculates the total cost of the deck by multiplying:
 * - Calculated Square Feet
 * - Entered Price per Square Foot
 */
const calculateCost = () => {
    const sqft = calculateSquareFeet(); // Get calculated Square Feet
    const price = parseFloat(priceInput.value); // Get Price per Square Foot

    // Validate Price and Square Feet: must be positive numbers
    if (isNaN(price) || price <= 0 || sqft === 0) {
        costOutput.textContent = "$0.00";  // Display $0.00 if invalid input
        return;
    }

    // Calculate Total Cost
    const totalCost = sqft * price;  // Multiply Square Feet by Price per Square Foot

    // Display Total Cost in USD format
    costOutput.textContent = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
};

// ============================
// Function to Clear All Inputs and Outputs
// ============================
/**
 * Clears all input fields and resets displayed outputs.
 */
const clearOutput = () => {
    lengthInput.value = "";   // Clear Length input
    widthInput.value = "";    // Clear Width input
    priceInput.value = "";    // Clear Price input
    sqftOutput.textContent = "0";    // Reset Square Feet display
    costOutput.textContent = "$0.00"; // Reset Total Cost display
};

// ============================
// Event Listeners for Input and Buttons
// ============================
// Automatically Calculate Square Feet when Length or Width changes
lengthInput.addEventListener('input', calculateSquareFeet);
widthInput.addEventListener('input', calculateSquareFeet);

// Calculate Total Cost when Calculate button is clicked
calculateBtn.addEventListener('click', calculateCost);

// Clear all inputs and outputs when Clear button is clicked
clearBtn.addEventListener('click', clearOutput);

/* 📌 Signature  
// ───── ByteShifter ─────  
// Crafted with 💻 & ☕  
// github.com/rmccune85 */
