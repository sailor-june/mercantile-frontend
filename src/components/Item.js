import React from 'react'

function Item(props) {
  return (
    <div className='itemCard'>
        <div className='itemImg'>
            IMAGE GOES HERE
        </div>
        <div className='itemData'>
                <li>Item Name</li>
                <li>Item tags</li>
                <li>Items wanted</li>
    
        </div>        
    </div>
  )
}

export default Item