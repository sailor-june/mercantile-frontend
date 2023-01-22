import React from 'react'
import Itemcards from '../components/Item'
import { Link } from 'react-router-dom'
import { useState } from "react"
import Distance from '../components/Distance'
import Item from '../components/Item'


const fetch = require('node-fetch');


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
    <div>Loading...</div>;
  };

  return (
    <>
    <div className='zipcodeForm'>
        <form onSubmit={handleZip}>
          <label for="zipcode">See distance to listings</label>
          <input 
              type='text' 
              value={zipForm.zipcode}
              name="zipcode"
              placeholder="Enter a valid zipcode"
              onChange={handleChange}
          />
          <input className="distance-button" type="submit" value="submit"/>
        </form>
    </div>
    <div className='container'>
      {props.items? loaded(): loading}
    </div>
 
    </>
  )
  }
export default Index;
