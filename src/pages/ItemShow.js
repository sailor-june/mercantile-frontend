import React from 'react'
import { useParams } from 'react-router-dom'

function ItemShow(props) {

  const { id } = useParams();
const item= props.items? props.items.find((item)=>item._id === id):null;



  return (
    <div className='itemShow'>
    <div className='itemImg'>
        <img src={item.image}/>
    </div>

    <div className='itemData'>
            <li>Item Name</li>
            <li>Item description</li>
            <li>Items wanted</li>
            <li>Item tags</li>
    </div>        
</div>
  )
}

export default ItemShow