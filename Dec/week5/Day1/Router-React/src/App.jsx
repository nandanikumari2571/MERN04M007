import { Route, Routes } from 'react-router'
import './App.css'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Dashboard from './component/Dashboard.jsx'
import Service from './component/Service.jsx'
import Login from './component/Login.jsx'
import Profile from './component/Profile.jsx'
import Cart from './component/Cart.jsx'
function App() {
  
  return (
    
      <div>
        <Routes>
          <Route path= '/' element={<Home />}></Route>
          <Route path= '/about' element={<About />}></Route>
          <Route path= '/service' element={<Service />}></Route>
          <Route path= '/login' element={<Login />}></Route>
          <Route path= '/dash' element={<Dashboard />}>
            <Route path= 'profile/:userid' element={<Profile/>}></Route>
            <Route index element={<Cart/>}></Route>

          </Route>
        </Routes>
      </div>

    
  )
}

export default App
