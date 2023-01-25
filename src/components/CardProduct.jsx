import React from 'react'
import { Link } from 'react-router-dom'

const CardProduct = () => {
  let img = 'https://www.fullh4rd.com.ar/adminrgb/img/marcas/2.png'
  return (
    <article className='w-96 max-w-xs rounded-md'>
      <div className='flex flex-col items-center gap-5'>
        <Link to={`/product/${'1' || id}`} className='w-full'>
          <img className='h-full w-full rounded-md object-cover' src={img} alt='' />
        </Link>
        <div className='roundedb-md flex w-full flex-col items-center gap-10 p-5 shadow-lg'>
          <div className='flex flex-col items-start justify-center gap-5'>
            <h3>title del product</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium mollitia
              explicabo velit beatae voluptatum.
            </p>
            <span>$150.45</span>
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
