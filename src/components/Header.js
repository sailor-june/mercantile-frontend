import React from 'react'
import { login, logout } from "../firebase"
import { Link } from 'react-router-dom'

function Header() {
    return (
    
  <div className='header'>
       <Link className="header-title" to="/" key="home"><h1>MERCANTILE</h1></Link>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button> 
       <Link className="header-link" to='/wanted'key="wanted">Wanted</Link>
       <Link className="header-link" to ='/items'key="listings">Listings</Link>
       <Link className="header-link" to="/items/new" key="add">Add Listing</Link>

    </div>
    
  )
}

export default Header