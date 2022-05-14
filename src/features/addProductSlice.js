import { createSlice } from "@reduxjs/toolkit";

function  ret() {
    let rArr = [];

    for(let i = 0; i < localStorage.length; i++){
        rArr.push(JSON.parse(localStorage.getItem(i)));
    }

    return rArr
}

const initialState = {
    products: ret(),
    currenItem :"",
}

export const AddSlice = createSlice({
    name:"AddProduct",
    initialState,
    reducers:{
        AddProduct: (state,action) => {
            state.products =  [...state.products,action.payload]
            for(let i = 0; i < state.products.length; i++){
                localStorage.setItem(i,JSON.stringify(state.products[i]));
            }
        },
        DProduct: (state, action) => {
            state.products = state.products.filter(s => s.id !== action.payload.id);
            localStorage.clear();
            for(let i = 0; i < state.products.length; i++){
                localStorage.setItem(i,JSON.stringify(state.products[i]));
            }
        },
        AlphabeticallySort: (state, action) => {
            state.products = state.products.sort((a,b) => a.name.localeCompare(b.name))
        },
        CounSort: (state,action) => {
            state.products = state.products.sort((a,b) => a.count.localeCompare(b.count))
        },
        WeightSort: (state,action) => {
            state.products = state.products.sort((a,b) => a.weight.localeCompare(b.weight))
        },
        SetCurrentItem: (state, action) =>{
            state.currenItem = action.payload
        },
        EdditCurrent: (state, action) => {
            for (let i = 0; i < state.products.length; i++) {
              if(state.products[i].id === action.payload.id){
                state.products[i] = action.payload
              }
            }
        }

    }
})

export const {AddProduct,DProduct,AlphabeticallySort,CounSort,SetCurrentItem,WeightSort,EdditCurrent} = AddSlice.actions
export default AddSlice.reducer