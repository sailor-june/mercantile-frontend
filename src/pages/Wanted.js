import React from 'react'
import Item from '../components/Item'
function Wanted() {
    return (
        <div className='container'>
        <Item wanted='true'/>
        <Item wanted='true'/>
        <Item wanted='true'/>
        <Item wanted='true'/>
        </div>
      )
    }

export default Wanted