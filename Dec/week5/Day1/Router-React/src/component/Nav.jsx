import React from 'react'
import { Link } from 'react-router'

function Nav() {
  return (
    <div>
        {/* <Link to="/dash">Dashboard</Link>
        <Link to="/service">Service</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link> */}

        <NavLink to="/dash" style={({ isActive }) => (isActive ? { color: 'red' } : { color: "" })}>Dashboard</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Home</NavLink>

    </div>
  )
}

export default Nav
