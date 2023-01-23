import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
    
  <div className='header'>
       <Link className="header-title" to="/" key="home"><h1>MERCANTILE</h1></Link>
      <button onClick={props.login}>Login</button>
      <button onClick={props.logout}>Logout</button> 

       <Link className="header-link" to='/wanted'key="wanted">Wanted</Link>
       <Link className="header-link" to ='/items'key="listings">Listings</Link>
       <Link className="header-link" to="/items/new" key="add">Add Listing</Link>

    </div>
    
  )
}

export default Header