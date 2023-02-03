import { getAsyncProductDetail } from '@/redux/slices/product/thunk'
import { addCartProductAsync } from '@/redux/slices/cart/thunk'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatAsARS } from '@/utils/formatNumber'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CardProduct = ({ title, description, price, image, id }) => {
  const dispatch = useDispatch()

  const addCart = (productId) => {
    console.log('añadido')
    dispatch(addCartProductAsync(id))
  }

  const getDetail = (id) => {
    dispatch(getAsyncProductDetail(id))
  }

  return (
    <article className='h-full min-h-[400px] w-96 max-w-xs rounded-md '>
      <div className='flex h-full flex-col  items-center  justify-between '>
        <Link to={`/product/${id}`} onClick={() => getDetail(id)} className=' w-full'>
          <img
            className='h-[150px] max-h-[150px]  min-h-[100px] w-full rounded-md object-contain'
            src={image}
            alt={description}
          />
        </Link>
        <div className='flex h-full w-full  flex-col items-center justify-between gap-10 rounded-md  p-5 shadow-lg'>
          <div className='flex  h-full w-full flex-col items-start justify-between gap-5'>
            <h3 className='text-lg font-bold capitalize text-blue-600'>{title}</h3>
            <p className='py-5 text-left text-base font-light'>
              {description.length > 150 ? description.slice(0, 150) + '...' : description}
            </p>
            <span>{formatAsARS(price)}</span>
            <span className='rounded-full bg-green-500 px-5 text-white'>En stock.</span>
          </div>
          <Link
            href=''
            className='w-full rounded-full bg-blue-600 py-2 text-center text-xl font-bold text-gray-100'
          >
            Comprar
          </Link>
          <button
            onClick={() => addCart(id)}
            className='w-full rounded-full border border-blue-600 py-2 text-center text-xl font-bold text-blue-500'
          >
            Agregar
          </button>
        </div>
      </div>
      <ToastContainer theme='light' />
    </article>
  )
}

export default CardProduct
