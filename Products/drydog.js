// Cycle product images
window.onload = rotate;

var product = 0;
var productImages = new Array("../Images/IDDryDog-Salmon.png","../Images/IDDryDog-Beef.png","../Images/IDDryDog-Chicken.png");

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("DryDog").src = productImages[product];
    setTimeout(rotate, 2 * 1000)
}