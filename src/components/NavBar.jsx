import React from 'react'
import img from '@/assets/react.svg'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaStoreAlt } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

const NavBar = () => {
  return (
    <header className='mx-auto flex max-w-7xl gap-5 py-2 px-5 lg:flex-row lg:items-center lg:justify-between'>
      <section>
        <Link to='/'>
          <img
            className='transition-all duration-500 ease-linear hover:origin-top hover:rotate-12'
            src={img}
            alt=''
          />
        </Link>
      </section>
      <section>
        <form action='' className='flex items-center justify-between gap-5'>
          <input type='search' name='' id='' />
        </form>
      </section>
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
