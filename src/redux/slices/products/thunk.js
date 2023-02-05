import axios from 'axios'
import { getAllProducts, filterProducts, searchProduct } from './productsSlice'

export const getAllProductsAsync = () => async (dispatch) => {
  const url = 'https://ecommercestrapi-back-production.up.railway.app/api'
  /* const url = 'http://localhost:1337/api' */
  const res = await axios.get(`${url}/products?populate=*`)
  const data = res.data.data

  dispatch(getAllProducts(data))
}

export const filterAsync = (filters) => {
  return async function (dispatch) {
    // production
    const baseUrl = 'https://ecommercestrapi-back-production.up.railway.app/api'
    /* const baseUrl = 'http://localhost:1337/api' */
    let url = `${baseUrl}/products?`;
    let categoryFilter = '';
    let brandFilter = '';

    if (filters.category && Array.isArray(filters.category) && filters.category.length > 0) {
      filters.category.forEach((category, index) => {
        categoryFilter += `filters[categories][name][$contains]=${category}`;
        if (index < filters.category.length - 1) {
          categoryFilter += '&';
        }
      });
    }

    if (filters.brand && Array.isArray(filters.brand) && filters.brand.length > 0) {
      filters.brand.forEach((brand, index) => {
        brandFilter += `filters[brand][name][$eq]=${brand}`;
        if (index < filters.brand.length - 1) {
          brandFilter += '&';
        }
      });
    }

    if (categoryFilter !== '' && brandFilter !== '') {
      url += `${categoryFilter}&${brandFilter}&populate=*`;
    } else if (categoryFilter !== '') {
      url += `${categoryFilter}&populate=*`;
    } else if (brandFilter !== '') {
      url += `${brandFilter}&populate=*`;
    } else {
      url += `populate=*`;
    }

    const res = await axios.get(url)
    const data = res.data.data
    console.log(data)
    return dispatch(filterProducts(data))
  }
}



export const searchProductAsync = (query) => {
  return async function (dispatch) {
    const url = 'https://ecommercestrapi-back-production.up.railway.app/api'
    /* const url = 'http://localhost:1337/api' */
    const res = await axios.get(`${url}/products?filters[title][$contains]=${query}&populate=*`)
    const data = res.data.data
    return dispatch(searchProduct(data))
  }
}
