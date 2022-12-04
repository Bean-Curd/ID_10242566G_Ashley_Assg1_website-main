// Cycle product images
window.onload = rotate;

var product = 0;
var productImages = new Array("../Images/IDWetCat-Tuna.png","../Images/IDWetCat-Salmon.png");

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("WetCat").src = productImages[product];
    setTimeout(rotate, 2 * 1000)
}