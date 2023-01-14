import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
    <h1>Welcome</h1>
    <h2> login /create acct </h2>
    <div className='links'> <p>view wanted ads</p>  <p>search</p> <p>about</p> <p>post an item</p></div>
    </div>
  )
}

export default Header