import React from 'react'
import { login, logout } from "../firebase"
import { Link } from 'react-router-dom'
import NewItem from '../pages/NewItem'
function Header() {
    return (<>
  <div className='header'>
      
    <Link to="/"><h1>MERCANTILE</h1></Link>
    <div className='signin'>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button> </div>
    <div className='links'> <Link to='/wanted'>View wanted ads</Link>  <p>search</p> <p>about</p> <p>post an item</p></div>
    </div>
    </>
  )
}

export default Header