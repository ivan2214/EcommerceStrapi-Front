import { formatAsARS } from '@/utils/formatNumber'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '@/redux/slices/cart/cartSlice'

import { Link } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product))
  }
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const purchaseCart = async (cart) => {
    console.log(cart)
    const url = 'http://localhost:1337/api/payments'
    const data = await axios.post(url, { cart })
    const { body } = data?.data
    console.log(body?.init_point)
    window.open(body?.init_point)
  }

  return (
    <div className=' flex flex-col gap-10 px-8 py-16'>
      <h2 className='text-center text-4xl  font-bold text-blue-400'>Carrito de Compras</h2>
      {cart.cartItems.length === 0 ? (
        <div className='cart-empty'>
          <p>Your cart is currently empty</p>
          <div className='start-shopping'>
            <Link to='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-arrow-left'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className=' flex flex-col gap-5'>
          <div className='flex w-full  items-center justify-between gap-x-2'>
            <h3 className='text-lg font-bold  uppercase text-blue-400'>Productos</h3>
          </div>

          <div className='flex flex-col  gap-10'>
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div
                  className='flex items-center justify-between border-b-2 border-gray-400 py-5 '
                  key={cartItem?.id}
                >
                  <div className='flex'>
                    <img
                      className='
                      m-auto mr-5 w-[100px] max-w-full object-cover'
                      src={`http://localhost:1337${cartItem?.attributes?.images.data[0].attributes.url}`}
                      alt={cartItem?.attributes?.title}
                    />
                    <div className='flex w-fit flex-col items-start  gap-5'>
                      <h3 className='max-w-[200px] text-base '>{cartItem?.attributes?.title}</h3>
                      <button
                        className='rounded-full bg-gray-200 px-2 py-1'
                        onClick={() => handleRemoveFromCart(cartItem)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  {/* price */}
                  <div className='flex flex-col items-center gap-3'>
                    <h3 className='text-base font-bold  uppercase '>Precio</h3>
                    <p className='text-base font-light'>
                      {formatAsARS(cartItem?.attributes?.price)}
                    </p>
                  </div>
                  {/* quantity */}
                  <div className='flex flex-col items-center gap-3'>
                    <h3 className='text-base font-bold  uppercase '>Cantidad</h3>
                    <div className='flex w-[130px] max-w-full items-start justify-center gap-10 rounded-md bg-white px-5 py-1 shadow-lg'>
                      <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                      <div className=''>{cartItem?.cartQuantity}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>+</button>
                    </div>
                  </div>
                  {/* total */}
                  <div className='flex flex-col items-center gap-3'>
                    <h3 className='text-base font-bold  uppercase '>Total</h3>
                    <p>{formatAsARS(cartItem?.attributes?.price * cartItem?.cartQuantity)}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className='flex justify-between gap-10 bg-gray-100'>
            <div className='p-5'>
              <button
                className='w-full rounded-md bg-blue-400 py-2 px-8 text-white transition-all duration-300 ease-linear hover:bg-blue-700'
                onClick={() => handleClearCart()}
              >
                Vaciar Carrito
              </button>
            </div>
            <div className='flex max-w-full flex-col gap-3 p-5'>
              <div className='flex justify-between gap-5'>
                <span className='text-2xl font-bold text-blue-400'>Total a pagar</span>
                <span className='text-xl font-bold'>{formatAsARS(cart.cartTotalAmount)}</span>
              </div>

              <p className='text-base font-light'>
                Impuestos y gastos de envío calculados al finalizar la compra
              </p>
              <button
                onClick={() => purchaseCart(cart)}
                className='rounded-md bg-blue-400 px-8 py-2 text-white transition-all duration-300 ease-linear hover:bg-blue-700'
              >
                Comprar Ahora
              </button>
              <div className='flex text-gray-400'>
                <Link
                  to='/'
                  className='flex gap-5 text-gray-400 transition-all duration-300 ease-linear hover:text-gray-800'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='bi bi-arrow-left'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
                    />
                  </svg>
                  <span>Seguir comprando</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
