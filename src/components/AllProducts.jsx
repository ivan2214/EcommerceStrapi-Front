import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from './CardProduct'

const AllProducts = () => {
  const { products } = useSelector((s) => s.products)
  return (
    <section className='max-w-5 xl  mx-auto min-h-screen  py-5'>
      <section className='grid h-full w-full grid-cols-3 gap-x-4 gap-y-16 overflow-hidden  bg-gray-100 px-5  shadow-sm'>
        {products.length ? (
          <>
            {products.map((p) => {
              return (
                <CardProduct
                  key={p.id}
                  title={p?.attributes?.title}
                  description={p?.attributes?.description}
                  price={p?.attributes?.price}
                  /* image={`http://localhost:1337${p?.attributes?.images?.data[0]?.attributes?.url} `} */
                  image={`https://ecommercestrapi-back-production.up.railway.app${p?.attributes?.images?.data[0]?.attributes?.url} `}
                  id={p.id}
                />
              )
            })}
          </>
        ) : (
          <p>No hay products</p>
        )}
      </section>
    </section>
  )
}

export default AllProducts
