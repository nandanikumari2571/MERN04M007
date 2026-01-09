import React from 'react'

function Login() {
  return (
    <div >
      <label htmlFor="Login"></label>
        <input type="text" placeholder='Enter your name' />
        <input type="text" placeholder='Enter your email' />
        <input type="password" placeholder='Enter your password' />
        <button>Login</button>
        
    </div>
  )
}

export default Login
