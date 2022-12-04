// Cycle product images
window.onload = rotate;

var product = 0;
var productImages = new Array("../Images/IDWetDog-Salmon.png","../Images/IDWetDog-Beef.png","../Images/IDWetDog-Chicken.png");

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("WetDog").src = productImages[product];
    setTimeout(rotate, 2 * 1000)
}