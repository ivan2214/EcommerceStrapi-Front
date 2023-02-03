import React from 'react'
import ProductsCart from '@/components/ProductsCart'

import { useSelector } from 'react-redux'

import { ToastContainer } from 'react-toastify'

const Cart = () => {
  return (
    <main className='mx-auto min-h-screen w-full max-w-7xl bg-slate-100 text-gray-900'>
      <section className='lg:flex lg:flex-col lg:justify-center lg:gap-10'>
        <ProductsCart />
        <ToastContainer theme='light' />
      </section>
    </main>
  )
}

export default Cart
