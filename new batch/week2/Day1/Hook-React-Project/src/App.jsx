
import { createContext } from 'react';
import './App.css'
import Child from './Child';
import Home from './Home';

const stdContext = createContext();
const emplContext = createContext({});

function App() {

  // create the context object
  // add the provider to a particular component
  // add the value to the provider
  // export the context object
  

  // How to access the context object in the child component
  // use the hook (useContext) and get the value


  

  return (
    <>
      <h1>Hello, React !</h1>

      <stdContext.Provider value={20}>
        <emplContext.Provider value={{ name: "John", age: 30,email:"john123@gmail.com" }}>

      <Child />

       </emplContext.Provider>
      </stdContext.Provider>

      <Home></Home>

    </>
  )
}

export { stdContext,emplContext };
export default App
