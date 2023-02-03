import React from 'react'
import AllProducts from '@/components/AllProducts'
import Filters from '@/components/Filters'
import { ToastContainer } from 'react-toastify'

const Products = () => {
  return (
    <main className='mx-auto min-h-screen w-full max-w-7xl overflow-hidden bg-slate-100 text-gray-900'>
      <section className='flex flex-col justify-center lg:flex-row'>
        <Filters />
        <AllProducts />
        <ToastContainer theme='light' />
      </section>
    </main>
  )
}

export default Products
