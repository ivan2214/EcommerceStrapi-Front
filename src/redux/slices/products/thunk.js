import axios from 'axios'
import { getAllProducts, filterProducts, searchProduct } from './productsSlice'

export const getAllProductsAsync = () => async (dispatch) => {
  const url = 'http://localhost:1337/api'
  const res = await axios.get(`${url}/products?populate=*`)
  const data = res.data.data

  dispatch(getAllProducts(data))
}

export const filterAsync = (filters) => {
  return async function (dispatch) {
    let url
    if (filters.category && filters.brand) {
      url = `http://localhost:1337/api/products?filters[categories][name][$contains]=${filters.category}&filters[brand][name][$eq]=${filters.brand}&populate=*`
    }
    if (filters.category && filters.brand == '') {
      url = `http://localhost:1337/api/products?filters[categories][name][$contains]=${filters.category}&populate=*`
    }
    if (filters.category == '' && filters.brand) {
      url = `http://localhost:1337/api/products?filters[brand][name][$eq]=${filters.brand}&populate=*`
    }

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
