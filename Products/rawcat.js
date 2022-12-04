// Cycle product images
window.onload = rotate;

var product = 0;
var productImages = new Array("../Images/IDRawCat-Chicken.png","../Images/IDRawCat-Beef.png");

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("RawCat").src = productImages[product];
    setTimeout(rotate, 2 * 1000)
}