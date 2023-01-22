import React from 'react'
import { login, logout } from "../firebase"
import { Link } from 'react-router-dom'
import NewItem from '../pages/NewItem'
import Distance from "../components/Distance";

function Header() {
    return (<>
  <div className='header'>
      <Link className="header-title" to="/"><h1>MERCANTILE</h1></Link>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button> 
       <Link className="header-link" to='/wanted'>Wanted</Link>
       <Link className="header-link" to ='/items'>Listings</Link>
       <Link className="header-link" to="/items/new">Add Listing</Link>
    <Distance />
    </div>
    </>
  )
}

export default Header