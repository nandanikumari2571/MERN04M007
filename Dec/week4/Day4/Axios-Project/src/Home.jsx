import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
function Home() {

    let [data, SetData] = useState([])
    let getData = async () => {
        try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    SetData(res.data);
    console.log(res.data);
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
      Home
    </div>
  )
}

export default Home
