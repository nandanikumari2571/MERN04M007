
import { createContext } from 'react'
import './App.css'
import Child from './Child';

let nameContext = createContext(); // context object creation
let themeContext = createContext();
let nandaniContext = 
function App() {
  let a = 1;

  let handleA = () => {
    a++;
    console.log(a);
  }

  return (
    <>
      Today we are going to learn the useContext
      {/* 

      The steps to crteate the context object:-

      =>1. use the createContext method to create the context object
      =>2. use the context provider in the component
      =>3. export the context object

      
      

      How to access the context object in the other component


      => use the useContext() hook and pass the context object to get the context data


      
      */}

      <nameContext.Provider value={"Qlith"}>
        <themeContext.Provider value={"red"}>
        <Child />
        </themeContext.Provider>
      </nameContext.Provider>
    </>
  )
}
export {themeContext}
export {nameContext}
export default App
