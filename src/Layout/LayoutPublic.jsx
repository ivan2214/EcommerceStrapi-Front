import { Outlet } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import { useDispatch } from 'react-redux'
import { getAllProductsAsync } from '@/redux/slices/products/thunk'
import { useEffect } from 'react'
import { getAllCategoriesAsync } from '@/redux/slices/categories/thunk'
import { getAllBrandsAsync } from '@/redux/slices/brands/thunk'

const LayoutPublic = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsAsync())
    dispatch(getAllCategoriesAsync())
    dispatch(getAllBrandsAsync())
  }, [dispatch])
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}
export default LayoutPublic
