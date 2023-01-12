import { Button, Space } from 'antd'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Info from '../pages/Info'

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Info />} />
      </Route>
    </Routes>
  )
}
export default AllRoutes

function Layout() {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const handleSignOut = () => {
    localStorage.clear()
    navigate('/login')
  }

  const navigateToProfile = () => {
    navigate('/profile')
  }

  return (
    <div>
      <Space wrap>
        <Button onClick={() => navigate('/')}>About us</Button>
        {token ? (
          <>
            <Button onClick={navigateToProfile}>Profile</Button>
            <Button onClick={handleSignOut}>Sign out</Button>
          </>
        ) : (
          <Button onClick={() => navigate('/login')}>Sign in</Button>
        )}
      </Space>
      <Outlet />
    </div>
  )
}
