import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/Auth.jsx'
import  ProtectedRoute  from './Layout.jsx/ProtectedRoute'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserInfo from './pages/UserInfo'
import MainLayout from './Layout.jsx/MainLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/*Rutas fuera del Layout*/}
          <Route  index path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/*Rutas dentro del Layout*/}
          <Route element={<ProtectedRoute/>}>
          <Route element={<MainLayout/>}>
          <Route index path='app' element={<Dashboard/>}/>
          <Route path='/dashboard' element={ <Dashboard /> }/>
          <Route path='/userinfo' element={ <UserInfo /> }/>
          </Route>
          </Route>

          {/*Fuera del Layout*/}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
