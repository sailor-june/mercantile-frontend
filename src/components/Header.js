import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
    <Link to="/"><h1>MERCANTILE</h1></Link>
    <h2> login /create acct </h2>
    <div className='links'> <Link to='/wanted'>View wanted ads</Link>  <p>search</p> <p>about</p> <p>post an item</p></div>
    </div>
  )
}

export default Header