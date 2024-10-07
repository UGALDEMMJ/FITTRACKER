import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import UserInfo from './pages/Userinfo'
import Signup from './pages/Signup'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/userinfo' element={<UserInfo />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
