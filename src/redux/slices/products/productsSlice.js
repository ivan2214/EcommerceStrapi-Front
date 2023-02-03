import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload
    },
    filterProducts: (state, action) => {
      state.products = action.payload
    },
    searchProduct: (state, action) => {
      state.products = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getAllProducts, filterProducts, searchProduct } = productsSlice.actions // para las action

export default productsSlice.reducer //para la store
