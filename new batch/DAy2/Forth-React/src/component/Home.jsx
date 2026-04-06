import React from 'react'
import Nav from './Nav'

function Home(props) {
  return (
    <div>
        <Nav/>
        Home
        Object value: <br />
        Name: {props.obj.name}
         <br />
        Age: {props.obj.age}
        {props.func()}
    </div>
  )
}

export default Home