import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from './CardProduct'

const AllProducts = () => {
  const { products } = useSelector((s) => s.products)

  const productos = products?.map((p) => p.attributes)
  console.log(productos)

  return (
    <section className='min-h-screen flex-1 py-5'>
      <section className='grid h-full w-full grid-cols-3 gap-x-16 gap-y-16  overflow-hidden bg-gray-100 px-5  shadow-sm'>
        {productos.map((p) => {
          return (
            <CardProduct
              title={p?.title}
              description={p?.description}
              price={p?.price}
              image={p?.images?.data[0]?.attributes?.url}
            />
          )
        })}
      </section>
    </section>
  )
}

export default AllProducts
