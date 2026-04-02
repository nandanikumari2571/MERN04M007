
import About from './About'
import './App.css'
import Home from './Home'

function App() {

  let a = 10;
  
  return (
    <>
    <h1>Hello React</h1>

      <Home value={a} str={"this is string"} arr={[1,2,3,4]}>
         <About />
         <h1>this is direct child</h1>
      </Home>
      
    </>
  )
}

export default App
