import React from 'react'
import Itemcards from '../components/Item'
import { Link } from 'react-router-dom'
import { useState } from "react"
import Distance from '../components/Distance'
import Item from '../components/Item'


const fetch = require('node-fetch');


function Index(props) {
  
    const [newForm, setNewForm] = useState({
    });

    const [newFormZipCode, setNewFormZipCode] = useState({
      formZipCode: 95051
    })

    const [newSubmitTrigger, setNewSubmitTrigger] = useState(0)



    const handleChange = event => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }


    const handleSubmit = event => {
        event.preventDefault();
   
        setNewFormZipCode (newForm.zipcode1)
        console.log(newForm.zipcode1)
        setNewSubmitTrigger(newSubmitTrigger + 1)
        


    }
const loaded = () => {

     const itemList = (props.items.map((item)=>(

      <div className="itemCard" key={item._id}>
          <Link to={`/items/${item._id}`}>
            <img className="itemImg" src={`${item.image}`} />
          </Link>
          <ul>
          <Link className="index-name" to={`/items/${item._id}`}>
          <li>{item.name}</li>
          </Link>
          <li>{item.condition}</li>
          <li>{item.zipcode}</li>
          </ul>
      </div>
   
    )))
     return(itemList)}

     const loading = () => {
    <div>Loading...</div>;
  };

  return (
    <>
    <div className='zipcodeForm'>
      <section>
        <form onSubmit={handleSubmit}>
          <input 
              type='text' 
              value={newForm.zipcode1}
              name="zipcode1"
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
