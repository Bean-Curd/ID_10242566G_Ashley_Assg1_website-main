// Cycle product images
window.onload = rotate;

var product = 0;
var productImages = new Array("../Images/IDDryCat-Tuna.png","../Images/IDDryCat-Chicken.png","../Images/IDDryCat-Salmon.png");

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("DryCat").src = productImages[product];
    setTimeout(rotate, 2 * 1000)
}