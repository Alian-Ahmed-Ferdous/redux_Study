import { store } from '../app/store';
import { sellCake, restockCake } from '../features/cake/cakeSlice';
import { sellIceCream, restockIceCream } from '../features/ice cream/iceCreamSlice';
import { selectMoney } from '../features/money/moneySlice';

// Function to update the display
function updateDisplay() {
    const state = store.getState();

    document.getElementById('money').textContent = selectMoney(state);
    document.getElementById('cakes').textContent = state.cake.cakes;
    document.getElementById('iceCreams').textContent = state.iceCream.iceCreams;
}

// Function to handle the sellCake button click
function handleSellCake() {
    const cakes = store.getState().cake.cakes;
    if (cakes > 0) {
        store.dispatch(sellCake(1));
    } else {
        alert("No more cakes available!");
    }
}

// Function to handle the restockCake button click
function handleRestockCake() {
    const money = selectMoney(store.getState());
    if (money >= 5 * 3) {
        store.dispatch(restockCake(5));
    } else {
        alert("Not enough money available!");
    }
}

// Function to handle the sellIceCream button click
function handleSellIceCream() {
    const iceCreams = store.getState().iceCream.iceCreams;
    if (iceCreams > 0) {
        store.dispatch(sellIceCream(1));
    } else {
        alert("No more ice creams available!");
    }
}

// Function to handle the restockIceCream button click
function handleRestockIceCream() {
    const money = selectMoney(store.getState());
    if (money >= 5 * 2) {
        store.dispatch(restockIceCream(5));
    } else {
        alert("Not enough money available!");
    }
}

// Adding event listeners to the buttons
document.getElementById('sellCakeBtn').addEventListener('click', handleSellCake);
document.getElementById('restockCakeBtn').addEventListener('click', handleRestockCake);
document.getElementById('sellIceCreamBtn').addEventListener('click', handleSellIceCream);
document.getElementById('restockIceCreamBtn').addEventListener('click', handleRestockIceCream);

// Subscribe to store changes and update the initial display
store.subscribe(updateDisplay);
updateDisplay();
