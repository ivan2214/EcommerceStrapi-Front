import React, { useEffect } from 'react'
import Slider from '@/components/Slider'
import Destacados from '@/components/Destacados'
import Categories from '@/components/Categories'
import Marcas from '@/components/Marcas'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '@/redux/features/products/productsSlice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <main className='min-h-screen w-full bg-slate-100 text-gray-900'>
      <Slider />
      {/*  <Destacados /> */}
      <Categories />
      <Marcas />
    </main>
  )
}

export default Home
