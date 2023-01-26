import React from 'react'
import { Link } from 'react-router-dom'

const CardHome = () => {
  let img = 'https://www.fullh4rd.com.ar/adminrgb/img/marcas/2.png'
  return (
    <article className='h-full min-h-[400px] w-96 max-w-xs rounded-md '>
      <div className='flex h-full flex-col  items-center  justify-between '>
        <Link to={`/product/${'1' || id}`} className=' w-full'>
          <img
            className='h-[150px] max-h-[150px]  min-h-[100px] w-full rounded-md object-cover'
            src={img}
            alt=''
          />
        </Link>
        <div className='flex h-full w-full  flex-col items-center justify-between gap-10 rounded-md  p-5 shadow-lg'>
          <div className='flex  h-full w-full flex-col items-start justify-between gap-5'>
            <h3 className='text-lg font-bold capitalize text-blue-600'>"sadasdsa"</h3>
            <span>$140. 55</span>
            <span className='rounded-full bg-green-500 px-5 text-white'>En stock.</span>
          </div>

          <Link
            to="/products"
            className='w-full rounded-full border border-blue-600 py-2 text-center text-xl font-bold text-blue-500'
          >
            Ver mas
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CardHome
