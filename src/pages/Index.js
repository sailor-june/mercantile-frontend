import React from 'react'
import Item from '../components/Item'
function Index(props) {


  const loaded =() =>{
    let frontPageItems = props.items.map((item)=>(
      <Item item={item} key={item._id}/>))
    
    return(frontPageItems)

    }
    const loading = ()=>{
      <div>Loading...</div>
    }


  return (
    <div className='container'>
      {props.items? loaded(): loading}
    </div>
  )
}

export default Index