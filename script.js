// Import Rectangle Class from Rectangle.js
import Rectangle from './Rectangle.js';

// ================================
// Function to Populate Dropdowns
// ================================
/**
 * Populates Length, Width, and Price dropdowns when the page loads
 */
window.onload = function() {
    let lengthSelect = document.getElementById('length');
    let widthSelect = document.getElementById('width');
    let priceSelect = document.getElementById('price');

    // Populate Length and Width Dropdowns (12 to 36, Step 2)
    for (let i = 12; i <= 36; i += 2) {
        let optionLen = document.createElement('option');
        optionLen.value = i;
        optionLen.text = i;
        lengthSelect.add(optionLen);

        let optionWid = document.createElement('option');
        optionWid.value = i;
        optionWid.text = i;
        widthSelect.add(optionWid);
    }

    // Populate Price Dropdown ($5.00 to $25.00, Step 0.50)
    for (let price = 5.00; price <= 25.00; price += 0.50) {
        let optionPrice = document.createElement('option');
        optionPrice.value = price;
        optionPrice.text = price.toFixed(2);
        priceSelect.add(optionPrice);
    }
    // Set default price to 10.00
    priceSelect.value = "10.00";
}

// ================================
// Calculate Cost Function
// ================================
/**
 * Calculates the total cost of the deck based on:
 * - Selected Length
 * - Selected Width
 * - Selected Price per Square Foot
 */
export function calculateCost() {
    // Get selected values
    let length = parseInt(document.getElementById('length').value);
    let width = parseInt(document.getElementById('width').value);
    let price = parseFloat(document.getElementById('price').value);

    // Check if all dropdowns have valid selections
    if (isNaN(length) || isNaN(width) || isNaN(price)) {
        alert("Please select valid options for Length, Width, and Price.");
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
