import { getAllProductsAsync, filterAsync } from '@/redux/slices/products/thunk'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Filters = () => {
  const { categories } = useSelector((s) => s.categories)
  const { brands } = useSelector((s) => s.brands)
  const [order, setOrder] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [filters, setFilters] = useState({
    brand: '',
    category: '',
    order: '',
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.name === 'order') setOrder(e.value)
    if (e.name === 'brand') setBrand(e.value)
    if (e.name === 'category') setCategory(e.value)
    setFilters({
      ...filters,
      [e.name]: e.value,
    })
  }
  /* console.log(filters) */

  useEffect(() => {
    if (filters.brand ||filters.category||filters.order ) return filter()
  }, [filters])

  const filter = () => {
    dispatch(filterAsync(filters))
  }

  return (
    <section className='flex min-h-screen max-w-sm  flex-col gap-16 overflow-hidden bg-gray-300 p-5'>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Ordenar por:</h2>
        <select
          value={order || 'orden'}
          onChange={({ target }) => handleChange(target)}
          className='select-none rounded-md bg-blue-400 py-1 px-3 text-gray-100'
          name='order'
          id=''
        >
          <option value='Orden'>Orden</option>
          <option value='desc'>mayor+</option>
          <option value='asc'>menor-</option>
        </select>
      </div>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Marca:</h2>
        <select
          value={brand || 'orden'}
          onChange={({ target }) => handleChange(target)}
          className='select-none rounded-md bg-blue-400 py-1 px-3 text-gray-100'
          name='brand'
          id=''
        >
          <option value='Marca'>Marca</option>
          {brands.map((b) => {
            return (
              <option key={b.id} value={b?.attributes?.name}>
                {b?.attributes?.name}
              </option>
            )
          })}
        </select>
      </div>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Categoria:</h2>
        <select
          value={category || 'orden'}
          onChange={({ target }) => handleChange(target)}
          className='select-none rounded-md bg-blue-400 py-1 px-3 text-gray-100'
          name='category'
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
