import React from 'react'
import { Link } from 'react-router-dom'


function About(props) {
  return (
    <div className='about'>
      <h2>Welcome to Mercantile!</h2>
      <h3>With Mercantile, you can trade anything. Click <Link to={`/items`}>here
          </Link> to get started.</h3>
    </div>
  )
}

export default About