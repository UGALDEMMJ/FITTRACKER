import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Success from './pages/Success'
import Signup from './pages/Signup'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/success' element={<Success />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
