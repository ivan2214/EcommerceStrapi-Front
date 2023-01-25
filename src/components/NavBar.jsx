import React from 'react'
import img from '@/assets/marca.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { FaStoreAlt } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

const NavBar = () => {
  return (
    <header className=' mx-auto flex max-w-7xl gap-5 py-1 bg-gray-100 shadow-lg px-5 lg:flex-row lg:items-center lg:justify-between'>
      <Link to='/'>
        <img
          className='max-h-[50px]  w-full  transition-all duration-500 ease-linear hover:origin-top hover:rotate-12'
          src={img}
          alt=''
        />
      </Link>

      <form action='' className='flex items-center justify-center gap-5'>
        <input
          type='search'
          className='rounded-lg border border-gray-400 px-5 py-2 text-gray-900 outline-none transition-all duration-500 '
          placeholder='Buscar..'
          name=''
          id=''
        />
        <AiOutlineSearch className='cursor-pointer text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
      </form>

      <nav>
        <ul className='flex lg:flex-row lg:items-center lg:justify-center lg:gap-5'>
          <li className='font-sans text-lg font-semibold'>
            <Link to='/favorite'>
              <MdOutlineFavoriteBorder className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
            </Link>
          </li>
          <li className='font-sans text-lg font-semibold'>
            <Link to='/products'>
              <FaStoreAlt className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
            </Link>
          </li>
          <li className='font-sans text-lg font-semibold'>
            <Link to='/account'>
              <AiOutlineUser className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
            </Link>
          </li>
          <li className='font-sans text-lg font-semibold'>
            <Link to='/cart'>
              <AiOutlineShoppingCart className='text-2xl transition-all duration-500 ease-linear hover:origin-top hover:rotate-12 hover:text-gray-500' />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
