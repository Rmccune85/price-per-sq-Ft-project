// Rectangle Class in JavaScript
class Rectangle {
    constructor(length = 0, width = 0) {
        this.length = length > 0 ? length : 0;
        this.width = width > 0 ? width : 0;
    }

    // Getter and Setter for Length
    get Length() {
        return this.length;
    }

    set Length(value) {
        this.length = value > 0 ? value : 0;
    }

    // Getter and Setter for Width
    get Width() {
        return this.width;
    }

    set Width(value) {
        this.width = value > 0 ? value : 0;
    }

    // Method to Calculate Area
    GetArea() {
        return this.length * this.width;
    }
}

// Export the class for use in other files
export default Rectangle;

// 📌 Signature  
// ───── ByteShifter ─────  
// Crafted with 💻 & ☕  
// github.com/rmccune85
