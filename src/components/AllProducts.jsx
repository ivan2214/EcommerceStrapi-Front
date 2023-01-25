import React from 'react'
import CardProduct from './CardProduct'

const AllProducts = () => {
  return (
    <section className='min-h-screen flex-1 py-5'>
      <section className='grid h-full w-full grid-cols-3 bg-gray-100 shadow-sm  gap-x-16 gap-y-16 overflow-hidden  px-5'>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </section>
    </section>
  )
}

export default AllProducts
