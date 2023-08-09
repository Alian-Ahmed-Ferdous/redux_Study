import { CAKE_SOLD, CAKE_RESTOCK, ICECREAM_SOLD, ICECREAM_RESTOCK } from "./reducer";

// Redux action creators
export function sellCake() {
    return {
        type: CAKE_SOLD,
        quantity: 1
    };
}

export function restockCake() {
    return {
        type: CAKE_RESTOCK,
        quantity: 5
    };
}

export function sellIceCream() {
    return {
        type: ICECREAM_SOLD,
        quantity: 1
    };
}

export function restockIceCream() {
    return {
        type: ICECREAM_RESTOCK,
        quantity: 5
    };
}
