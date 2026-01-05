import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import Home from './Home';

function App() {
  
let [data, setData] = useState([])

let getData =  async () => {
  try {
// let res = await fetch("https://jsonplaceholder.typicode.com/posts")
// let dataList = await res.json()
// setData(dataList)

// let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
// setData(res.data);


// let res = await axios.get("https://jsonplaceholder.typicode.com/posts/3");
// console.log(res.data);


// let res = await axios.post("https://jsonplaceholder.typicode.com/posts",{tittle: "hii tittle", age:20 });
// console.log(res.data);


// let res = await axios.delete("https://jsonplaceholder.typicode.com/posts/3");
// console.log(res.data);


// let res= axios.get();
// console.log(res.data);










  } catch (error) {
    console.log("error", error)
  }
}

useEffect(() => {
getData();
}, [])

console.log(data)


  return (
    <div>
      <h1 className='bg-red-900'>hello</h1>

      <ul>
        {
          data.map((obj) => (
            <li key={obj.id}>{obj.title}</li>
          ))
        }
      </ul>

      <Home/>
    </div>
  )
}

export default App
