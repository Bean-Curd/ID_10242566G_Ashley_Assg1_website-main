// Cycle product images
window.onload = rotate;

var product = 0;
var productImages = new Array("../Images/IDRawDog-Salmon.png","../Images/IDRawDog-Beef.png","../Images/IDRawDog-Chicken.png");

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("RawDog").src = productImages[product];
    setTimeout(rotate, 2 * 1000)
}