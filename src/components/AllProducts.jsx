import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from './CardProduct'

const AllProducts = () => {
  const { products } = useSelector((s) => s.products)
  return (
    <section className='mx-auto min-h-screen  max-w-5 xl  py-5'>
      <section className='grid h-full w-full grid-cols-3 gap-x-4 gap-y-16 overflow-hidden  bg-gray-100 px-5  shadow-sm'>
        {products.map((p) => {
          return (
            <CardProduct
              key={p.id}
              title={p?.attributes?.title}
              description={p?.attributes?.description}
              price={p?.attributes?.price}
              image={`http://localhost:1337${p?.attributes?.images?.data[0]?.attributes?.url} `}
              id={p.id}
            />
          )
        })}
      </section>
    </section>
  )
}

export default AllProducts
