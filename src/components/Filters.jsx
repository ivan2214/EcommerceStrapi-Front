import { orderPriceAsync, filterCategoryAsync } from '@/redux/slices/products/thunk'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Filters = () => {
  const { categories } = useSelector((s) => s.categories)
  const [order, setOrder] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()
  const handleOrder = (e) => {
    dispatch(orderPriceAsync(e.value))
  }
  const handleBrand = (e) => {
    setBrand(e.value)
  }
  const handleCategory = (e) => {
    dispatch(filterCategoryAsync(e.value))
  }

  return (
    <section className='flex min-h-screen max-w-sm  flex-col gap-16 overflow-hidden bg-gray-300 p-5'>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Ordenar por:</h2>
        <select
          value={order || 'orden'}
          onChange={({ target }) => handleOrder(target)}
          className='select-none rounded-md bg-blue-400 py-1 px-3 text-gray-100'
          name=''
          id=''
        >
          <option value=''>Orden</option>
          <option value='desc'>mayor+</option>
          <option value='asc'>menor-</option>
        </select>
      </div>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Marca:</h2>
        <select
          value={brand || 'orden'}
          onChange={({ target }) => handleBrand(target)}
          className='select-none rounded-md bg-blue-400 py-1 px-3 text-gray-100'
          name=''
          id=''
        >
          <option value='Marca'>Marca</option>
          <option value='logitech'>logitech</option>
        </select>
      </div>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Categoria:</h2>
        <select
          value={category || 'orden'}
          onChange={({ target }) => handleCategory(target)}
          className='select-none rounded-md bg-blue-400 py-1 px-3 text-gray-100'
          name=''
          id=''
        >
          <option value='Categoria'>Categoria</option>
          {categories.map((c) => {
            return (
              <option key={c.id} value={c?.attributes?.name}>
                {c?.attributes?.name}
              </option>
            )
          })}
        </select>
      </div>
    </section>
  )
}

export default Filters
