import axios from 'axios'
import { addToCart } from './cartSlice'

export const addCartProductAsync = (id) => {
  return async function (dispatch) {
    const url = `http://localhost:1337/api/products/${id}?populate=*`
    const res = await axios.get(url)
    const product = res.data.data

    return dispatch(addToCart(product))
  }
}
