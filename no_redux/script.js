// Initial values
let money = 50;
let cakes = 0;
let iceCreams = 0;

// Function to update the display
function updateDisplay() {
    document.getElementById('money').textContent = money;
    document.getElementById('cakes').textContent = cakes;
    document.getElementById('iceCreams').textContent = iceCreams;
}

// Function to sell a cake
function sellCake() {
    if (cakes > 0) {
        money += 5;
        cakes--;
        updateDisplay();
    } else {
        alert("No more cakes available!");
    }
}

// Function to restock cakes
function restockCake() {
    if(money > 5*3){
        cakes += 5;
        money -=5*3;
        updateDisplay();
    } else {
        alert("No enough money available!");
    }
}

// Function to sell an ice cream
function sellIceCream() {
    if (iceCreams > 0) {
        money += 3;
        iceCreams--;
        updateDisplay();
    } else {
        alert("No more ice creams available!");
    }
}

// Function to restock ice creams
function restockIceCream() {
    if(money > 5*2){
        iceCreams += 5;
        money -=5*2;
        updateDisplay();
    } else {
        alert("No enough money available!");
    }
}

// Initial display update
updateDisplay();