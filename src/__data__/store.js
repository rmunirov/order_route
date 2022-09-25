import { configureStore } from "@reduxjs/toolkit";
import { reducer as orderReducer } from "./slices/order";

export const store = configureStore({
    reducer: {
        order: orderReducer,
    },
});
