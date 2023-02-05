import { orderProducts } from '@/redux/slices/products/productsSlice'
import { getAllProductsAsync, filterAsync } from '@/redux/slices/products/thunk'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "./Filters.css"

const Filters = () => {
  const { name, cat } = useParams()

  const { categories } = useSelector((s) => s.categories)
  const { brands } = useSelector((s) => s.brands)
  const [order, setOrder] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [filters, setFilters] = useState({
    brand: '',
    category: [],
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
      [e.name]: e.name == 'category' ? [...filters.category, e.value] : e.value,
    })
  }

  const handleChangeOrder = (e) => {
    setOrder(e.value)
  }

  const clearFilters = () => {
    dispatch(getAllProductsAsync())
    setFilters({
      brand: '',
      category: [],
    })
    setOrder('')
    setCategory('')
    setBrand('')
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

  const condition = filters.brand !== '' || filters.category.length > 0 || order !== ''

  return (
    <section className='flex flex-col gap-5 overflow-hidden p-5   lg:min-h-screen lg:max-w-sm lg:flex-col lg:gap-16 lg:p-10'>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-xl font-bold text-sky-500'>Ordenar por:</h2>
        {condition ? (
          <button
            className={`animationButton rounded-full border  border-sky-400 py-1 px-4 text-gray-500 transition-all duration-500 

             `}
            onClick={clearFilters}
          >
            Borrar Filtros
          </button>
        ) : (
          <></>
        )}
        <select
          value={order || 'order'}
          onChange={({ target }) => handleChangeOrder(target)}
          className='max-w-[150px] select-none rounded-md bg-white py-1 px-3 text-gray-900'
          id=''
        >
          <option value='order'>Orden</option>
          <option value='asc'>mayor+</option>
          <option value='desc'>menor-</option>
        </select>
      </div>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='text-xl font-bold text-sky-500'>Marca:</h2>
        <select
          value={filters.brand || 'brand'}
          onChange={({ target }) => handleChange(target)}
          className='max-w-[150px] select-none rounded-md bg-white py-1 px-3 text-gray-900'
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
        <h2 className='text-xl font-bold text-sky-500'>Categoria:</h2>
        {/* <select
          value={filters.category || 'category'}
          className='max-w-[150px] select-none rounded-md bg-white py-1 px-3 text-gray-900'
          name='category'
          id=''
        ></select> */}
        {categories.map((c) => {
          return (
            <div key={c.id} className='flex items-center gap-5'>
              <input
                onChange={({ target }) => handleChange(target)}
                type='checkbox'
                className='text-gray-800'
                value={c?.attributes?.name}
                id={c?.attributes?.name}
                name='category'
                checked={filters.category.includes(c?.attributes?.name)}
              />
              <label htmlFor={c?.attributes?.name}>{c?.attributes?.name}</label>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Filters
