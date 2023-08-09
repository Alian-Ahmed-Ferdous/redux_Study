// Redux action types
export const CAKE_SOLD = 'CAKE_SOLD';
export const CAKE_RESTOCK = 'CAKE_RESTOCK';
export const ICECREAM_SOLD = 'ICECREAM_SOLD';
export const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK';

// Redux initial state
export const initialMoneyState = {
    money: 50,
};

export const initialCakeState = {
    cakes: 0,
};

export const initialIceCreamState = {
    iceCreams: 0,
};

// Redux reducers
export function moneyReducer(state = initialMoneyState, action) {
    switch (action.type) {
        case CAKE_SOLD:
        case ICECREAM_SOLD:
            return {
                ...state,
                money: state.money + action.quantity * (action.type === CAKE_SOLD ? 5 : 3),
            };
        case CAKE_RESTOCK:
        case ICECREAM_RESTOCK:
            return {
                ...state,
                money: state.money - action.quantity * 3,
            };
        default:
            return state;
    }
}

export function cakeReducer(state = initialCakeState, action) {
    switch (action.type) {
        case CAKE_SOLD:
            return {
                ...state,
                cakes: state.cakes - action.quantity,
            };
        case CAKE_RESTOCK:
            return {
                ...state,
                cakes: state.cakes + action.quantity,
            };
        default:
            return state;
    }
}

export function iceCreamReducer(state = initialIceCreamState, action) {
    switch (action.type) {
        case ICECREAM_SOLD:
            return {
                ...state,
                iceCreams: state.iceCreams - action.quantity,
            };
        case ICECREAM_RESTOCK:
            return {
                ...state,
                iceCreams: state.iceCreams + action.quantity,
            };
        default:
            return state;
    }
}
