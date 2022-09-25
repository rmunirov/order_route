import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    destinations: [
        { id: 1, title: "Москва#1", position: [51.115, 0.19] },
        { id: 2, title: "Москва#2", position: [51.125, 0.29] },
        { id: 3, title: "Москва#3", position: [51.135, 0.39] },
        { id: 4, title: "Москва#4", position: [51.145, 0.49] },
        { id: 5, title: "Москва#5", position: [51.155, 0.59] },
        { id: 6, title: "Москва#6", position: [51.165, 0.69] },
        { id: 7, title: "Москва#7", position: [51.175, 0.79] },
        { id: 8, title: "Москва#8", position: [51.185, 0.89] },
        { id: 9, title: "Уфа#1", position: [52.215, 0.19] },
        { id: 10, title: "Уфа#2", position: [52.225, 0.29] },
        { id: 11, title: "Уфа#3", position: [52.235, 0.39] },
        { id: 12, title: "Уфа#4", position: [52.245, 0.49] },
        { id: 13, title: "Уфа#5", position: [52.255, 0.59] },
        { id: 14, title: "Уфа#6", position: [52.265, 0.69] },
        { id: 15, title: "Уфа#7", position: [52.275, 0.79] },
        { id: 16, title: "Уфа#8", position: [52.285, 0.89] },
    ],

    orders: [
        { id: 1, title: "Заявка#1", from: 1, to: 9 },
        { id: 2, title: "Заявка#2", from: 2, to: 10 },
        { id: 3, title: "Заявка#3", from: 3, to: 11 },
        { id: 4, title: "Заявка#4", from: 4, to: 12 },
        { id: 5, title: "Заявка#5", from: 5, to: 13 },
        { id: 6, title: "Заявка#6", from: 6, to: 14 },
        { id: 7, title: "Заявка#7", from: 7, to: 15 },
        { id: 8, title: "Заявка#8", from: 8, to: 16 },
    ],
    activeOrderId: 0,
};

const slice = createSlice({
    name: "order",
    initialState,
    reducers: {
        changeActiveOrderId: (state, action) => {
            state.activeOrderId = action.payload;
        },
        updateOrderFrom: (state, action) => {
            const index = state.orders.findIndex((item) => item.id === action.payload.order);
            if (index > -1) {
                state.orders[index].from = action.payload.destination;
            }
        },
        updateOrderTo: (state, action) => {
            const index = state.orders.findIndex((item) => item.id === action.payload.order);
            if (index > -1) {
                state.orders[index].to = action.payload.destination;
            }
        },
    },
});

export const { reducer, actions } = slice;
