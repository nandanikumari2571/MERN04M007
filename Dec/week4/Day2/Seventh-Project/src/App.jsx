
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [count,setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const [dat, setData] = useState([])

// parts of useEffect
  // useEffect(() => {
  //   first // Effect Code what you want to execute

  //   second
    // return () => {    //*it is execute when your variable is unmounted.
    
    // }
  // }, [third])  //[dependencies]  //* if we want to execute effect code based on dependency


  // conditions for useEffect
  // 1. Execute at all rendering
  // 2. useEffect(() => {
  // 3. alert("it is execute at the first render")
  // 4. }, [])  //  empty dependency array


  //  return statement in useEffect
  // useEffect(() => {
  //   alert("it is execute at the first render")
  // })


  //  return statement in useEffect
  // useEffect(() => {
  //   alert("data updated");

  //   return () =>
  //     alert("data unmounted")
    
  // })


  // based on dependency
  //  useEffect(() => {
  // alert("based on dep");
  //  }
  //   , [total, count])


  useEffect(() => {
    async function getData() {
      try {
      let res = await fetch ('https://jsonplaceholder.typicode.com/posts');
      let totaldata = await res.json();
      setData(totaldata);
      } catch (error) {
        console.log("error", error);    
      }
    }

    getData()
  }, [])
  
console.log("totaldata");




  return (
    <>
      <div className='h-screen w-screen flex '>
      {/* <div className='h-30 w-50 bg-amber-400 rounded '> */}
        {/* <button
         onClick={() => setCount (count + 1)}
         className='border p-2 rounded'
         >
          Count {count}
          </button>
          <button
          onClick={() => setTotal (total + 1)}
          classname='border p-2 rounded'
        >
          Total {total}
          </button>  */}
      </div>  
      {/* </div> */}
    </>
  )
}

export default App