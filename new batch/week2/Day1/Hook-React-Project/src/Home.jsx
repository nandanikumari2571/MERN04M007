import React, { useState } from 'react'

function Home() {

    // useState() --- Hook
    // it is used to maintain the state

    // syntax of usestate
    // const [variable,function (this is fun used to update the variable)] = useState(initialization value)

    let [a, setA] = useState(0);
    const [obj, setObj] = useState({});
    const [users, setUsers] = useState([]);


    const [boolean, setBoolean] = useState(true);
    console.log(boolean);

        

    let b = 10;

    // let a = 6;

    const handleClick = () => {
    // console.log("Hii click");
    //     a = a + 1;
    //     console.log("a value ", a);

        setA(a + 1);
        b = b + 1;
        console.log(b); 
    }

    console.log("hello")



  return (
    <div>
      Home
      <br />
      value : {a}
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={handleClick}>Inc</button>
    </div>
  )
}

export default Home
