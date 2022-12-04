// Cycle product images
window.onload = rotate;

var product = 0;
var productImages = new Array("../Images/IDDogTreats-Salmon.png","../Images/IDDogTreats-Beef.png","../Images/IDDogTreats-Chicken.png");

function rotate() {
    product++;
    if (product == productImages.length) {
        product = 0;
    }
    document.getElementById("DogTreats").src = productImages[product];
    setTimeout(rotate, 2 * 1000)
}