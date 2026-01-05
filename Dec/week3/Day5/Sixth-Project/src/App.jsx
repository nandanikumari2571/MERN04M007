
import { useState } from 'react';
import './App.css'
import Home from './Home';
function App() {

//   const [a , setA] = useState(0);
//   const [ name , setName] = useState("");
// const [obj, setObj] = useState(null);
  // let a = 1;
  // function updateA() {
  // a++;
  // console.log(a);
  // }

  // let handleText = () => {
  //   setName("Nandani")

  // }

  // const [Obj, setObj] = useState(null)


  return (
    <div>
      hello
      <br />

      {/* Direct calling */}
      {/* <button onClick={() => updateA()}>Inc</button> */}


      {/* Indirect calling */}
      {/* value {a}
      <br />
      <button onClick={()=>setA(a+1)}>Increment</button>

      <br />
      Name: {name}
      <button onClick={handleText}>click here to add some text</button>

      <br /> */}
      {/* <button onClick={() => setObj({ name: "Nandani" })}>click here to add some text</button> */}
      <Home />

    </div>  
    )
}

export default App
