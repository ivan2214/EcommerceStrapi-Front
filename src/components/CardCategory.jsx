import React from 'react'

import Svg from '@/assets/Svg'
import { Link, useParams } from 'react-router-dom'

const CardCategory = ({ name = 'category', logo, id }) => {
  return (
    <Link to={`/products/category/${name}`}>
      <article className='flex w-56 max-w-xs flex-col items-center gap-4 rounded-lg  p-6 shadow-md'>
        <Svg className='text-blue-900' />
        <h3 className='capitalize text-gray-900'>{name}</h3>
      </article>
    </Link>
  )
}

export default CardCategory
