import React, { useEffect, useState } from 'react'
import img from '@/assets/marca.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { FaStoreAlt } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { searchProductAsync } from '@/redux/slices/products/thunk'
import { useNavigate } from 'react-router-dom'

const NavMobile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const { cartTotalQuantity } = useSelector((s) => s.cart)

  const handleSearch = (query) => {
    setQuery(query.value)
    dispatch(searchProductAsync(query.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(searchProductAsync(query))
    navigate('/products')
  }

  return (
    <header
      id='navbar'
      className={` $
sticky
top-0 left-0 right-0 z-50  mx-auto flex   w-full max-w-7xl flex-col gap-5 bg-white py-1  px-5 shadow-lg  transition-all duration-700 ease-linear lg:flex-row lg:items-center lg:justify-between`}
    >
      <Link to='/'>
        <img
          className='max-h-12 w-full object-contain  transition-all  duration-500 ease-linear hover:origin-top hover:rotate-12 lg:max-h-[50px]'
          src={img}
          alt=''
        />
      </Link>

      <form onSubmit={handleSubmit} className='flex items-center justify-center gap-5'>
        <input
          type='search'
          onChange={({ target }) => handleSearch(target)}
          className='rounded-lg border border-gray-400 px-5 py-2 text-gray-900 outline-none transition-all duration-500 '
          placeholder='Buscar..'
          name=''
          id=''
        />
        <AiOutlineSearch className='cursor-pointer text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
      </form>

      <nav>
        <ul className='flex justify-between p-3 lg:flex-row lg:items-center lg:justify-center lg:gap-5'>
          <Link to='/favorite'>
            <li className='font-sans text-lg font-semibold'>
              <MdOutlineFavoriteBorder className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
            </li>
          </Link>
          <Link to='/products'>
            <li className='font-sans text-lg font-semibold'>
              <FaStoreAlt className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
            </li>
          </Link>
          <Link to='/account'>
            <li className='font-sans text-lg font-semibold'>
              <AiOutlineUser className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
            </li>
          </Link>
          <Link to='/cart' className=''>
            <li className=' relative select-none font-sans text-lg font-semibold'>
              <AiOutlineShoppingCart className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
              <span className='absolute top-[-15px] right-[-7px] z-20  text-teal-300'>
                {cartTotalQuantity}
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default NavMobile
