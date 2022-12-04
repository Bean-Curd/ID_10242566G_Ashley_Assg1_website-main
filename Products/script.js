// Cycle product images
window.onload = rotate;

var product = 0;

if (document.getElementsById("DryDog")) {
    var productImages = new Array("../Images/IDDryDog-Salmon.png","../Images/IDDryDog-Beef.png","../Images/IDDryDog-Chicken.png")
} else if (document.getElementsById("WetDog")) {
    var productImages = new Array("../Images/IDWetDog-Beef","../Images/IDWetDog-Chicken","../Images/IDWetDog-Salmon") 
} else if (document.getElementsById("RawDog")) {
    var productImages = new Array("../Images/IDRawDog-Beef","../Images/IDRawDog-Chicken","../Images/IDRawDog-Salmon") 
}

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("currentProduct").src = productImages[product];
    setTimeout(rotate, 2 * 1000)
}