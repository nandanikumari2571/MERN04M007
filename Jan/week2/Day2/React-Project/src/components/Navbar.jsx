import React from 'react'
import { NavLink, useNavigate } from 'react-router'

function Navbar() {
    let navigate = useNavigate()
  return (
    <div className='w-screen p-4 shadow-lg '>
        <div className='max-w-7xl mx-auto   flex justify-between'>
            <p className='text-3xl font-bold text-blue-800 cursor-pointer'
                onClick={()=>navigate("/")}           
            >Food <span className='text-[#ff6b6b]'>Hotel</span></p>
            <ul className='w-lg flex justify-between text-xl '>
              <li>Home</li>
              <li>Menu</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
            {/* <NavLink to="/foods" className=' bg-red-500 text-white px-6 py-2 shadow rounded-lg'>Foods</NavLink> */}
        </div>
    </div>
  )
}

export default Navbar