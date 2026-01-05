import { Route, Routes} from 'react-router'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'


function App() {

  //  give me the browserRouter to the parent
  //  create routes
  //  create route
  // => inside the route declare the path and declare the element which follow the path
  

  return (
   <div>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>

</Routes>
   </div>
  )
}

export default App
