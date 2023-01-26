import React from 'react'
import { Link } from 'react-router-dom'

const CardProduct = ({ title, description, price, image }) => {
  let img = 'https://www.fullh4rd.com.ar/adminrgb/img/marcas/2.png'
  return (
    <article className='h-full min-h-[400px] w-96 max-w-xs rounded-md '>
      <div className='flex h-full flex-col  items-center  justify-between '>
        <Link to={`/product/${'1' || id}`} className='h-full max-h-[100px]  min-h-[100px] w-full'>
          <img className='h-full w-full rounded-md object-cover' src={img} alt='' />
        </Link>
        <div className='flex h-full w-full  flex-col items-center justify-between gap-10 rounded-md  p-5 shadow-lg'>
          <div className='flex  h-full w-full flex-col items-start justify-between gap-5'>
            <h3 className='text-lg font-bold capitalize'>{title}</h3>
            <p className='py-5 text-sm font-light'>
              {description.length > 150 ? description.slice(0, 150) + '...' : description}
            </p>
            <span>{price}</span>
            <span className='rounded-full bg-green-500 px-5 text-white'>En stock.</span>
          </div>
          <Link
            href=''
            className='w-full rounded-full bg-blue-600 py-2 text-center text-xl font-bold text-gray-100'
          >
            Comprar
          </Link>
          <Link
            href=''
            className='w-full rounded-full border border-blue-600 py-2 text-center text-xl font-bold text-blue-500'
          >
            Agregar
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CardProduct
