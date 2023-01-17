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
            <li>{item.name}</li>
            <li>condition: {item.condition}</li>
            <span><li>description: {item.description}</li></span>

            <li>LINK TO OWNER PROFILE</li>
                </div>        
</div>
  )
}

export default ItemShow