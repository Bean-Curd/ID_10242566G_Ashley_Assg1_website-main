// Cycle product images
window.onload = rotate;

var product = 0;

if (document.getElementsByName("Images/IDDryDog-Beef.png")) {
    var productImages = new Array("Images/IDDryDog-Salmon.png","Images/IDDryDog-Beef.png","Images/IDDryDog-Chicken.png")
} else if (document.getElementsByName("Images/IDWetDog-Beef.png")) {
    var productImages = new Array("Images/IDWetDog-Beef","Images/IDWetDog-Chicken","IDWetDog-Salmon") 
} else if (document.getElementsByName("Images/IDRawDog-Beef.png")) {
    var productImages = new Array("Images/IDRawDog-Beef","Images/IDRawDog-Chicken","IDRawDog-Salmon") 
}

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("currentProduct").src = productImages[product];
    setTimeout(rotate, 3 * 1000)
}