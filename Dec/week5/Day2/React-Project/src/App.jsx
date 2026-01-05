
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Service from './components/Service'
import Profile from './components/Profile'

function App() {
  
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
         <Route path='/about' element={<About />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/profile' element={<Profile />}></Route>

      </Routes>
    </div>
  )
}

export default App
