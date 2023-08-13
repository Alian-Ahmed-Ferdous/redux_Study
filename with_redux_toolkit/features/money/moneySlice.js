import { createSlice } from '@reduxjs/toolkit';
import { sellIceCream, restockIceCream } from '../ice cream/iceCreamSlice';
import { restockCake, sellCake } from '../cake/cakeSlice';

const moneySlice = createSlice({
    name: 'money',
    initialState: { money: 50 },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sellCake, (state) => {
                state.money += 5;
            })
            .addCase(sellIceCream, (state) => {
                state.money += 3;
            })
            .addCase(restockCake, (state) => {
                state.money -= 5 * 3;
            })
            .addCase(restockIceCream, (state) => {
                state.money -= 5 * 2;
            });
    },
});

export const selectMoney = (state) => state.money.money;

export default moneySlice.reducer;
