import React, { useState } from 'react'

function Home() {

    // Keyword [variable,The function used for updating the variable] = useState(initial value).

    const [obj , setObj] = useState({});
    function addData(){
        setObj({
            name: "Hello",
            age: 25
        })
    }

    
    const [count, setCount] = useState(0);
    let a = 0;
    function updateA(){
        a = a + 1;
        console.log(a);
    }




  return (
    <div>
         Home
        <br />
        {/* Value {a}
        <button onClick={updateA}>Click</button> */}
        {/* value of obj   
        <br />
        name : {obj?.name}
        <br />
        age : {obj?.age}
        <br />
        <button onClick={addData}>Add Data</button> */}

        count {count}
        <br />
        <button onClick={() => {

         setCount(count + 1)
         updateA();
         }}>Increment</button>
    </div>


  )
}

export default Home