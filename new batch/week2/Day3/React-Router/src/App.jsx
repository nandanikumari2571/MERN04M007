
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Profile from './components/Profile'
import AdminContacts from './components/AdminContacts'
import UserDashboard from './components/UserDashboard'
import UserProfile from './components/UserProfile'
import UserContacts from './components/UserContacts'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'

function App() {
  

  return (
    <>
    <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/admin'>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='admin-Contact' element={<AdminContacts />} />
        </Route>

        <Route path='/user' element={<UserDashboard />} >
        <Route index element={<UserProfile />} /> 
        <Route path='user-contact' element={<UserContacts />} />
        <Route path='user-details/:UserId' element={<UserDetails />} />
        
        </Route>

      </Routes>
    </>
  )
}

export default App
