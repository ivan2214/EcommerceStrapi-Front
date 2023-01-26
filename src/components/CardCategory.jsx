import React from 'react'

import Svg from '@/assets/Svg'
import { Link, useParams } from 'react-router-dom'

const CardCategory = ({ name = 'category' }) => {
  const id = useParams()
  return (
    <Link to={`/category/${'1' || $id}`}>
      <article className='flex flex-col items-center gap-4 rounded-md bg-gray-200 p-6 shadow-sm'>
        <Svg className='text-blue-900' />
        <h3 className='capitalize text-gray-900'>{name}</h3>
      </article>
    </Link>
  )
}

export default CardCategory