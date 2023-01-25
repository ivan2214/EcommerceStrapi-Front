import React from 'react'
import AllProducts from '@/components/AllProducts'
import Filters from '@/components/Filters'

const Products = () => {
  return (
    <main className='min-h-screen w-full bg-slate-100 text-gray-900'>
      <section className='flex justify-center gap-10'>
        <Filters />
        <AllProducts />
      </section>
    </main>
  )
}

export default Products
