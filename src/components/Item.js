import { Link } from 'react-router-dom'
import React from 'react'

function Item(props) {
  return (
    <div className='itemCard'>
       <Link to="/items/:id"> <div className='itemImg'>
            IMAGE GOES HERE
        </div>
        </Link>
        <div className='itemData'>
                <li>Item Name</li>
                <li>Item tags</li>
                <li>Items wanted</li>
    
        </div>        
    </div>
  )
}

export default Item