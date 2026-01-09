import React from 'react'
import {  useNavigate } from 'react-router'

function Home() {
    let navigate= useNavigate()
  return (
    // <div className='px-6 py-20 bg-gray-100 border-b border-gray-200'>
    //     <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center  gap-10'>
    //         <div className='md:w-1/2 space-y-6'>
    //             <h1 className='text-4xl md:text-5xl font-bold leading-tight'>Welcome to <span className='text-red-600'>Food Bazar</span></h1>
    //             <p>Here you can get your food . search, explore , enjoy........</p>
    //             <button 
    //             onClick={() => navigate("/Foods")}
    //             className='bg-red-600 hover: bg-red-500 text-white px-6 py-3 shadow rounded-lg'>Explore foods</button>
    //         </div>
    //         <div className='md:w-1/2'>
    //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZylLZLdEOnpA7xCFv_tEqFvcThCY70wK7Q&s" alt="" className='rounded-lg shadow-md w-900'/>
    //         </div>
    //     </div>
    // </div>
    <div className='overflow-y-hidden overflow-x-hidden'>
        <div className='h-165 bg-[url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg")] bg-center bg-no-repeat bg-cover bg-[#f5f5f5] flex justify-center items-center relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/20'>
            <div className='max-w-200 mx-auto relative z-10 text-white'>
                <h1 className="font-['Playfair_Display'] text-[4rem] mb-5 text-white leading-[1.2] font-bold">Best food for <span className=" ">your taste</span></h1> 
                <p className="font-['Poppins'] text-[1.2rem] mb-10 leading-[1.6] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">Experience exquisite flavors and create unforgettable memories <span className='block'>in a place that feels like home</span> </p>
                    <div className='flex gap-5 justify-center'>
                        <button className='bg-[#ff6b6b]  inline-block px-5 py-3 text-white font-bold rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-[#ff8e8e] hover:-translate-y-1'>Book a table</button>
                        <button className='bg-white border-2 border-[#ff6b6b]  text-[#ff6b6b] inline-block px-5 py-2.5 hover:text-white font-bold rounded-full cursor-pointer transition-all duration-300 ease hover:bg-[#ff8e8e] hover:-translate-y-1 ' onClick={() => navigate("/Foods")}>Explore Menu</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Home