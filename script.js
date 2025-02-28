// Import Rectangle Class
import Rectangle from './Rectangle.js';

/**
 * Populates dropdowns for Length, Width, and Price
 * on page load.
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
    priceSelect.value = "10.00";
}

/**
 * Calculates the total cost of the deck based on:
 * - Selected Length
 * - Selected Width
 * - Selected Price per Square Foot
 */
export function calculateCost() {
    let length = parseInt(document.getElementById('length').value);
    let width = parseInt(document.getElementById('width').value);
    let price = parseFloat(document.getElementById('price').value);

    // Check if all dropdowns have valid selections
    if (isNaN(length) || isNaN(width) || isNaN(price)) {
        alert("Please select valid options for Length, Width, and Price.");
        return;
    }

    // Create a Rectangle object
    let deck = new Rectangle(length, width);

    // Calculate Area and Cost
    let sqft = deck.GetArea();
    let cost = sqft * price;

    // Display Results
    document.getElementById('sqft').innerText = sqft;
    document.getElementById('cost').innerText = `$${cost.toFixed(2)}`;
}

/**
 * Clears the displayed output.
 */
export function clearOutput() {
    document.getElementById('sqft').innerText = "0";
    document.getElementById('cost').innerText = "$0.00";
}

// Event Listeners for Buttons
document.getElementById('calculateBtn').addEventListener('click', calculateCost);
document.getElementById('clearBtn').addEventListener('click', clearOutput);

/* 📌 Signature  
// ───── ByteShifter ─────  
// Crafted with 💻 & ☕  
// github.com/rmccune85 */
