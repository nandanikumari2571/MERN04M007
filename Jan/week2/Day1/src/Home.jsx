import React, { useRef } from 'react'

function Home() {

    let nameRef = useRef();
    let ageRef = useRef();
    let phoneRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        let name = nameRef.current.value;
        let age = ageRef.current.value;
        let phone = phoneRef.current.value;

        localStorage.setItem("user", JSON.stringify({name, age, phone}));
        
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" ref={nameRef}/> <br />
        <label htmlFor="">Age</label>
        <input type="number" ref={ageRef} /> <br />
        <label htmlFor="">Phone no.</label>
        <input type="number" ref={phoneRef} /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Home
