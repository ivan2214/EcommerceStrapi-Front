import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../slices/products/productsSlice'
import detailReducer from '../slices/product/productSlice'
import cartReducer from '../slices/cart/cartSlice'
import categoriesReducer from '../slices/categories/categoriesSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const persisConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['products', 'cart', 'productDetail', 'categories'],
}

const rootReducer = combineReducers({
  products: productsReducer,
  productDetail: detailReducer,
  cart: cartReducer,
  categories: categoriesReducer,
})

const persistedReducer = persistReducer(persisConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})
