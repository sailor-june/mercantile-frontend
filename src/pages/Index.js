import React from 'react'
import Item from '../components/Item'
function Index(props) {
  console.log(props)
let frontPageItems=[]
for (let item of props.items){

  frontPageItems.push(<Item item={item}/>)
}

  return (
    <div className='container'>
      {frontPageItems}
    </div>
  )
}

export default Index