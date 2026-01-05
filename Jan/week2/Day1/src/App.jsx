
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from './Home';

function App() {

  // let nameRef = useRef("Qlith");// nameRef is object

  // console.log(nameRef.current);

  // let user={
  //   name:"nandani",
  //   age:21
  // }

  // console.log(user.age); // 
  // object.freeze(user);
  // user.age=22;
  // console.log(user.age);

  // let nameRef = useRef();

  // useEffect(()=>{
  // console.log(nameRef.current.innerText);
  // },[]);


  // const [Input, setInput] = useState("");



  let inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);

    localStorage.setItem("name", inputRef.current.value);
  }

console.log("render")

  return (
    <div>
      {/* <p ref={nameRef}>Lorem, ipsum dolor sit amet.</p> */}
      <form action="" onSubmit={handleSubmit}>
        {/* <input type="text" value={Input} onChange={(e) => setInput(e.target.value)} /> */}
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
      <Home />
    </div>
    
  )
}

export default App
