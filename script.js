// Import the Rectangle class
import Rectangle from './Rectangle.js';

// Initialize Dropdowns on Page Load
window.onload = function() {
    let lengthSelect = document.getElementById('length');
    let widthSelect = document.getElementById('width');

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
    let priceSelect = document.getElementById('price');
    for (let price = 5.00; price <= 25.00; price += 0.50) {
        let optionPrice = document.createElement('option');
        optionPrice.value = price;
        optionPrice.text = price.toFixed(2);
        priceSelect.add(optionPrice);
    }
    priceSelect.value = "10.00";
}

// Calculate Cost
function calculateCost() {
    let length = parseInt(document.getElementById('length').value);
    let width = parseInt(document.getElementById('width').value);
    let price = parseFloat(document.getElementById('price').value);

    // Create a Rectangle object
    let deck = new Rectangle(length, width);

    // Get Area using the Rectangle method
    let sqft = deck.GetArea();
    let cost = sqft * price;

    document.getElementById('sqft').innerText = sqft;
    document.getElementById('cost').innerText = `$${cost.toFixed(2)}`;
}

// Clear Output
function clearOutput() {
    document.getElementById('sqft').innerText = "0";
    document.getElementById('cost').innerText = "$0.00";
}

// 📌 Signature  
// ───── ByteShifter ─────  
// Crafted with 💻 & ☕  
// github.com/rmccune85
