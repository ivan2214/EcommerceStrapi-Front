import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CardHome = ({ name, logo }) => {
  console.log(name)
  console.log(logo)

  return (
    <article className='  w-56 max-w-xs rounded-lg px-10 shadow-md '>
      <div className='flex  flex-col  items-center  justify-between '>
        <Link to={`/products/${name}`} className=' w-full'>
          <img
            className='h-[100px] max-h-[100px]   w-full rounded-lg object-contain'
            src={logo}
            alt=''
          />
        </Link>
      </div>
    </article>
  )
}

export default CardHome
