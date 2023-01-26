import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice'
import storage from 'redux-persist/lib/storage'
import {  persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const persisConfig = {
  key: 'root',
  storage,
  whitelist: ['products'],
}

const rootReducer = combineReducers({
  products: productsReducer,
})

const persistedReducer = persistReducer(persisConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})
