import { Outlet } from 'react-router-dom'
import NavBar from '@/components/NavBar'
const LayoutPublic = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}
export default LayoutPublic
