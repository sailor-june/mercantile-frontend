import React from 'react'
import { Link } from 'react-router-dom'


function About(props) {
  return (
    <div className='about'>
      <h2>Welcome to Mercantile!</h2>
      <div>
          <h3>With Mercantile, you can trade anything. Click <Link className ="about-link" to={`/items`}>here
          </Link> to get started.</h3>
      </div>
      <div>
        <h4>Built by June James, Reiny Botros, Claude Allen, and Robert Johnson</h4>
        <p><a href="https://github.com/robjawn/mercantile-backend">Link</a> to Mercantile's Backend Repo</p>
        <p><a href="https://github.com/robjawn/mercantile-frontend">Link</a> to Mercantile's Frontend Repo</p>
      </div>
    </div>
  )
}

export default About