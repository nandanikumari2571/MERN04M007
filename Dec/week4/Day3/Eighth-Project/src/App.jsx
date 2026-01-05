import { useState, useEffect} from 'react'
import './App.css'


function App() {

  // useEffect(() => {
//  first

// return () => {
// second
//  }
// }, [third])



  const [Count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
    //  console.log("it is execute at the first render");
    // })

    // 
    
    // useEffect(() => {
    //   console.log("count update");
    //   return () => {
    //     console.log("count unmounted");
    //   }
    // })


    // useEffect(() => {
    //   console.log("depend on the dependency");
    // }, [total, Count])

    const [data, setData] = useState([]);

    useEffect(() => {
      async function getData(){
        try{
          let res = await fetch("https://jsonplaceholder.typicode.com/posts");
          let dataList = await res.json();
          setData(dataList);
        }
        catch(error)
        {
          console.log("error", error);
        }
      }
      getData();
    }, [])



  return (
    <div>
     Hello
     <br />
     <button
      onClick={() => setCount(Count + 1)}
      className='h-20 w-30 bg-blue-500'
>
  count {Count}
     </button>
     <br />
      <button
      onClick={() => setTotal(total + 1)}
      className='h-30 w-40 bg-blue-600'
      >
  total {total}
      </button>

      <ul>
        {data.map((obj) => (
          <li key={obj.id}>{obj.title}</li>
        ))}
      </ul>
      <div>
        <h1 className='bg-red-900'>hii</h1>
      </div>
    </div>
  )
}

export default App
