import axios from 'axios'
import { getProductDetail } from './productSlice'

export const getAsyncProductDetail = (id) => {
  return async function (dispatch) {
    const url = `http://localhost:1337/api/products/${id}?populate=*`
    const res = await axios.get(url)
    const data = res.data.data
    console.log(data)
    return dispatch(getProductDetail(data))
  }
}

