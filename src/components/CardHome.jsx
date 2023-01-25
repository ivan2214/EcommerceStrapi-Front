import React from 'react'
import { Link } from 'react-router-dom'

const CardHome = () => {
  let img = 'https://www.fullh4rd.com.ar/adminrgb/img/marcas/2.png'
  return (
    <article className='w-96 rounded-md'>
      <div className='flex flex-col items-center gap-5'>
        <div>
          <img className='h-full w-full rounded-md object-contain' src={img} alt='' />
        </div>
        <div className='flex w-full flex-col items-center gap-10 shadow-lg p-5 roundedb-md'>
          <div className='mr-auto'>
            <img
              className='h-full w-full rounded-md object-contain'
              src='https://www.fullh4rd.com.ar/adminrgb/img/marcas/2-mob.png'
              alt=''
            />
          </div>
          <Link href='' className='text-center text-xl font-bold text-blue-500'>
            ver mas
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CardHome
