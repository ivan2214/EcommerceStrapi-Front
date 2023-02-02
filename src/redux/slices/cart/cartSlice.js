import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

export const cartSice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        }
        toast.info('Increased product quantity', {
          position: 'bottom-left',
        })
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProductItem)
        toast.success('Product added to cart', {
          position: 'bottom-left',
        })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1

        toast.info('Decreased product quantity', {
          position: 'bottom-left',
        })
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter((item) => item.id !== action.payload.id)

        state.cartItems = nextCartItems

        toast.error('Product removed from cart', {
          position: 'bottom-left',
        })
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter((item) => item.id !== cartItem.id)

          state.cartItems = nextCartItems

          toast.error('Product removed from cart', {
            position: 'bottom-left',
          })
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        return state
      })
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { attributes, cartQuantity } = cartItem
          const itemTotal = attributes.price * cartQuantity

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        },
      )
      total = parseFloat(total.toFixed(2))
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },
    clearCart(state, action) {
      state.cartItems = []
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      toast.error('Cart cleared', { position: 'bottom-left' })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSice.actions // para las action

export default cartSice.reducer //para la store
