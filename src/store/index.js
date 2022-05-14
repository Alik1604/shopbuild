import { configureStore } from "@reduxjs/toolkit"
import addProductSlice from "../features/addProductSlice";


export const store = configureStore({
    reducer:{
        Product:addProductSlice,
    },
});
