import axios from 'axios'
import { getAllCategories } from './categoriesSlice'

export const getAllCategoriesAsync = () => async (dispatch) => {
  const url = 'http://localhost:1337/api'
  const res = await axios.get(`${url}/categories?populate=*`)
  const data = res.data.data

  dispatch(getAllCategories(data))
}
