import { configureStore, createSlice } from "@reduxjs/toolkit";
import All_products from '../assets/All_products';

const addSlice = createSlice({
  name: "lister",
  initialState: {
    shoplister: {All_products},
    cart: [],
  },

  reducers: {
    handleAdd(state, action) {
      let itemtoAdd = action.payload;
      state.cart.push({
        id: itemtoAdd.id,
        name: itemtoAdd.name,
        image:itemtoAdd.image,
      });
    },
    handleDelete(state, action) {
      let id = action.payload;
      if (id > -1) {
      state.cart=[...state.cart.slice(1, id),...state.cart.slice(id+0)];
      }
    },

  },
  
});
export const actions = addSlice.actions;
const store = configureStore({
  reducer: { lister: addSlice.reducer },
});

export default store;