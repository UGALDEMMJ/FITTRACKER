import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/Auth.jsx'
import  ProtectedRoute  from './Layout.jsx/ProtectedRoute'
import Login from './pages/Login'
import UserInfo from './pages/Userinfo'
import Signup from './pages/Signup'
function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/userinfo' element={
            <ProtectedRoute>
              <UserInfo />
            </ProtectedRoute>
          }/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
