import React from 'react'

import { useState } from "react"

import Item from '../components/Item'

function Index(props) {
  
  

  const [newZip, setNewZip] = useState({
      zipcode: 95051
    })

const [zipForm, setZipForm] = useState({newZip})
    
  


    const handleChange = (event) => {
        setZipForm((prevState)=>({
          ...prevState,
          [event.target.name]: event.target.value}))
    }


    const handleZip = event => {
        event.preventDefault();
        setNewZip(()=>({...zipForm}))
        console.log(newZip.zipcode)
        


    }
const loaded = () => {

     const itemList = (props.items.map((item)=>(

<>
      <Item item={item} key={item._id} userzip={newZip.zipcode} />
  </> 

    )))
     return(itemList)}

     const loading = () => {
    <div key="loading">Loading...</div>;
  };

  return (
    
    
    <>
      <div className='zipcodeForm' key="zipform">
     <form onSubmit={handleZip}key='handlezip'>
     <label>See distance to listings</label>    

          <input 
              type='text' 
              value={zipForm.zipcode}
              name="zipcode"
              key='input'
              placeholder="Enter a valid zipcode"
              onChange={handleChange}
          />
          <input className="distance-button" key='handlesubmit' type="submit" value="submit zipcode"/>
        </form>
      
    </div><div className='container' key='container'>
      {props.items? loaded(): loading}
    </div>
 </>
    
  )
  }
export default Index;
