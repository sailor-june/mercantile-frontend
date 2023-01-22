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
      <section>
        <form onSubmit={handleZip}>
          <input 
              type='text' 
              value={zipForm.zipcode}
              name="zipcode"
              placeholder="zipcode"
              onChange={handleChange}
          />
          <input type="submit" value="submit zipcode"/>
        </form>
      </section>
    </div>
    <div className='container'>
      {props.items? loaded(): loading}
    </div>
 
    </>
  )
  }
export default Index;
