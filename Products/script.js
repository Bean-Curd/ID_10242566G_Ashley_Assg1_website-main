// Cycle product images
window.onload = rotate;

var product = 0;
var id = document.getElementById()

if (id == "DryDog") {
    var productImages = new Array("../Images/IDDryDog-Salmon.png","../Images/IDDryDog-Beef.png","../Images/IDDryDog-Chicken.png");
} else if (id == "WetDog") {
    var productImages = new Array("../Images/IDWetDog-Salmon.png","../Images/IDWetDog-Beef.png","../Images/IDWetDog-Chicken.png");
} else if (id == "RawDog") {
    var productImages = new Array("../Images/IDRawDog-Salmon.png","../Images/IDRawDog-Beef.png","../Images/IDRawDog-Chicken.png");
}

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("currentProduct").src = productImages[product];
    setTimeout(rotate, 2 * 1000)
}