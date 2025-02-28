// Import Rectangle Class from Rectangle.js
import Rectangle from './Rectangle.js';

// ================================
// Calculate Cost Function
// ================================
/**
 * Calculates the total cost of the deck based on:
 * - Manually Entered Length
 * - Manually Entered Width
 * - Manually Entered Price per Square Foot
 */
export function calculateCost() {
    // Get values from input fields and convert to numbers
    let length = parseInt(document.getElementById('length').value);
    let width = parseInt(document.getElementById('width').value);
    let price = parseFloat(document.getElementById('price').value);

    // Check if all inputs are valid numbers and greater than 0
    if (isNaN(length) || isNaN(width) || isNaN(price) || length <= 0 || width <= 0 || price <= 0) {
        alert("Please enter valid positive numbers for Length, Width, and Price.");
        return;
    }

    // Create a Rectangle object using the imported class
    let deck = new Rectangle(length, width);

    // Calculate Area and Cost
    let sqft = deck.GetArea();
    let cost = sqft * price;

    // Display Results
    document.getElementById('sqft').innerText = sqft;
    document.getElementById('cost').innerText = `$${cost.toFixed(2)}`;
}

// ================================
// Clear Output Function
// ================================
/**
 * Clears the displayed output for Square Feet and Total Cost
 */
export function clearOutput() {
    document.getElementById('sqft').innerText = "0";
    document.getElementById('cost').innerText = "$0.00";
    document.getElementById('length').value = "";
    document.getElementById('width').value = "";
    document.getElementById('price').value = "";
}

// ================================
// Attach Event Listeners
// ================================
// Listens for Calculate button click
document.getElementById('calculateBtn').addEventListener('click', calculateCost);

// Listens for Clear button click
document.getElementById('clearBtn').addEventListener('click', clearOutput);

/* 📌 Signature  
// ───── ByteShifter ─────  
// Crafted with 💻 & ☕  
// github.com/rmccune85 */
