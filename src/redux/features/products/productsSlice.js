import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
}

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const url = 'http://localhost:1337/api/products?populate=*'
  const res = await axios.get(url)

  return res.data.data
})

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        console.log(state)
      })
      .addCase(fetchProducts.rejected, (state, action) => {})
  },
})

// Action creators are generated for each case reducer function
export const { getAllProducts } = productsSlice.actions // para las action

export default productsSlice.reducer //para la store
