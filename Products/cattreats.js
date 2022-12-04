// Cycle product images
window.onload = rotate;

var product = 0;
var productImages = new Array("../Images/IDCatTreats-Tuna.png","../Images/IDCatTreats-Chicken.png","../Images/IDCatTreats-Salmon.png");

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("CatTreats").src = productImages[product];
    setTimeout(rotate, 2 * 1000)
}