import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import LayoutPublic from '@/Layout/LayoutPublic'
import NotFound from '@/pages/NotFound'
import ProtectedRoute from '@/pages/ProtectedRoute'
import Account from '@/pages/Account'
import Cart from '@/pages/Cart'
import Login from '@/pages/Login'

const user = {
  autenticated: false,
  admin: false,
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/account',
        errorElement: <NotFound />,
        element: (
          <ProtectedRoute isAllowed={user.autenticated} redirectTo={'/login'}>
            <Account />
          </ProtectedRoute>
        ),
      },
      {
        path: '/login',
        errorElement: <NotFound />,
        element: (
          <ProtectedRoute isAllowed={!user.autenticated} redirectTo={'/'}>
            <Login />
          </ProtectedRoute>
        ),
      },
    ],
  },
])
