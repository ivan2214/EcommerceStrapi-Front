import axios from 'axios'
import { getAllProducts, orderProducts, filterProducts,searchProduct } from './productsSlice'

export const getAllProductsAsync = () => async (dispatch) => {
  const url = 'http://localhost:1337/api'
  const res = await axios.get(`${url}/products?populate=*`)
  const data = res.data.data

  dispatch(getAllProducts(data))
}

export const orderPriceAsync = (order) => {
  console.log(order)
  return async function (dispatch) {
    const url = `http://localhost:1337/api/products?populate=*&sort=price:${order}`
    const res = await axios.get(url)
    const data = res.data.data
    console.log(data)
    return dispatch(orderProducts(data))
  }
}
export const filterCategoryAsync = (cat) => {
  console.log(cat)
  return async function (dispatch) {
    const url = `http://localhost:1337/api/products?filters[categories][name][$eq]=${cat}&populate=*`
    const res = await axios.get(url)
    const data = res.data.data
    console.log(data)
    return dispatch(filterProducts(data))
  }
}
export const searchProductAsync = (query) => {
  return async function (dispatch) {
    const url = `http://localhost:1337/api/products?filters[title][$contains]=${query}&populate=*`
    const res = await axios.get(url)
    const data = res.data.data
    return dispatch(searchProduct(data))
  }
}
