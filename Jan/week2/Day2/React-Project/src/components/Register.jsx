import React, { useState } from 'react'

function Register() {
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [phone,setPhone]=useState("");
    let [password,setPassword]=useState("");

    function handleRegister(){
        localStorage.setItem("user",JSON.stringify({name,email,phone,password}));
    }



  return (
    <div>
      <label htmlFor="full name">Full Name:</label>
        <input
         type="text" 
         value={name}
         placeholder="Enter your name" 
         className="block border rounded-lg"  
         onChange={(e)=>setName(e.target.value)}


         />
        

         <label htmlFor="Email">Email:</label>
        <input
         type="text"
         value={email}
          placeholder="Enter your email" 
          className="block border rounded-lg"
          onChange={(e)=>setEmail(e.target.value)}
          />
        

        <label htmlFor="Password">Password:</label>
        <input 
        type="password"
        value={password}
         placeholder="Enter your password"
         className="block border rounded-lg"
         onChange={(e)=>setPassword(e.target.value)}


         />
        

        <label htmlFor="Phone Number">Phone Number:</label>
        <input
            type="text"
            value={phone}
            placeholder="Enter your phone number"
            className="block border rounded-lg"
            onChange={(e)=>setPhone(e.target.value)}
            />
        
<br />

        <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={handleRegister}
        
        >Register</button>

    </div>
  )
}

export default Register
