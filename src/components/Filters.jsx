import { orderProducts } from '@/redux/slices/products/productsSlice'
import { getAllProductsAsync, filterAsync } from '@/redux/slices/products/thunk'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Filters = () => {
  const { name, cat } = useParams()

  const { categories } = useSelector((s) => s.categories)
  const { brands } = useSelector((s) => s.brands)
  const [order, setOrder] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [filters, setFilters] = useState({
    brand: '',
    category: '',
  })
  const dispatch = useDispatch()

  useEffect(() => {
    if (name)
      setFilters({
        ...filters,
        brand: name,
      })
  }, [name])

  useEffect(() => {
    if (cat)
      setFilters({
        ...filters,
        category: cat,
      })
  }, [cat])

  const handleChange = (e) => {
    if (e.name === 'order') setOrder(e.value)
    if (e.name === 'brand') setBrand(e.value)
    if (e.name === 'category') setCategory(e.value)
    setFilters({
      ...filters,
      [e.name]: e.value,
    })
  }
  const handleChangeOrder = (e) => {
    setOrder(e.value)
  }

  useEffect(() => {
    if (filters.brand || filters.category) {
      filter()
    }
  }, [filters])

  useEffect(() => {
    if (order === 'asc' || order == 'desc') dispatch(orderProducts(order))
  }, [order])

  useEffect(() => {
    if (order === 'order' || filters.brand == 'brand' || filters.category === 'category')
      dispatch(getAllProductsAsync())
    if (order === 'order' || filters.brand == 'brand' || filters.category === 'category') {
      setFilters({ brand: '', category: '' })
      setOrder('orden')
    }
  }, [order, filters])

  const filter = () => {
    dispatch(filterAsync(filters))
  }

  return (
    <section className='flex flex-col gap-5 p-5 overflow-hidden bg-gray-300  lg:min-h-screen lg:max-w-sm lg:flex-col lg:gap-16 lg:p-5'>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Ordenar por:</h2>
        <select
          value={order || 'order'}
          onChange={({ target }) => handleChangeOrder(target)}
          className='select-none rounded-md bg-blue-400 py-1 px-3 text-gray-100'
          id=''
        >
          <option value='order'>Orden</option>
          <option value='asc'>mayor+</option>
          <option value='desc'>menor-</option>
        </select>
      </div>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Marca:</h2>
        <select
          value={filters.brand || 'brand'}
          onChange={({ target }) => handleChange(target)}
          className='select-none rounded-md bg-blue-400 py-1 px-3 text-gray-100'
          name='brand'
          id=''
        >
          <option value='brand'>Marca</option>
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
          value={filters.category || 'category'}
          onChange={({ target }) => handleChange(target)}
          className='select-none rounded-md bg-blue-400 py-1 px-3 text-gray-100'
          name='category'
          id=''
        >
          <option value='category'>Categoria</option>
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
