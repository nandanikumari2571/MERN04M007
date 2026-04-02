import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Register() {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [password,setPassword] = useState("")

    function handleRegister(e){
        e.preventDefault();
        try {
          let oldData = localStorage.getItem("users");
          let users = oldData? JSON.parse(oldData) : [];
          users.push({name,email,phone, password});
          // or
          // users = [...users,{name,email,phone, password}]
          localStorage.setItem("users",JSON.stringify(users))
          setName("")
          setEmail("")
          setPhone("")
          setPassword("")
          toast.success("Rgistration successful")
          
        } catch (error) {
          toast.error("register failed")
        }
    }
  return (
    <div className='mt-20'>
        <label htmlFor="">Full Name</label>
        <input type="text" name="" value={name} className='border rounded-lg' onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label htmlFor="">Email</label>
        <input type="email" name="" value={email}  className='border rounded-lg' onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label htmlFor="">Phone</label>
        <input type="number" name="" value={phone} className='border rounded-lg' onChange={(e) =>setPhone(e.target.value)}/>
        <br />
        <label htmlFor="">Password</label>
        <input type="password" name="" value={password}  className='border rounded-lg' onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={handleRegister}
        >submit</button>
    </div>
  )
}

export default Register