import React from 'react'
import Item from '../components/Item'
import { Link } from 'react-router-dom'
import { useState } from "react"
import Distance from '../components/Distance'

const fetch = require('node-fetch');


function Index(props) {
  
    const [newForm, setNewForm] = useState({
        zipcode1: ''
    });


    const handleChange = event => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    let itemZip = '';

    const handleSubmit = event => {
        event.preventDefault();
        searchZipcodes(newForm.zipcode1, itemZip)
    }

    const [newDistance, setNewDistance] = useState({
        distance: 0
    });

    function searchZipcodes (zipcode1, zipcode2){

        const url = `https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distanceByPostalCodes?postal_code1=${zipcode1}&postal_code2=${zipcode2}`;

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '9dfd4daa07msh3c9fc8dad1f90d8p1927eajsnef873037c9d7',
            'X-RapidAPI-Host': 'global-zip-codes-with-lat-and-lng.p.rapidapi.com'
          }
        };


        
        fetch(url, options)
            .then(res => res.json())
            .then(json => setNewDistance(json.distance))
            .catch(err => console.error('error:' + err));

        console.log(newDistance)
        let distanceInfo = JSON.stringify(newDistance);
        return distanceInfo
    }


    const loaded = () => {

      let itemList = props.items.map((item) => (
        <div className="itemCard" key={item._id}>
          <Link to={`/items/${item._id}`}>
            <div className="itemImg">
              <img src={`${item.image}`} />
            </div>
          </Link>
          <div className="itemData">
            <li>{item.name}</li>
            {item.condition ? (
              <div>
                Condition: <li>{item.condition}</li>
              </div>
            ) : null}
            {item.zipcode ? (
              <div>
                zipcode: <li>{item.zipcode}</li>
              </div>
            ) : null}
            {item.zipcode ? (
              <div>
                Distance: <li>{searchZipcodes(67206, item.zipcode)} meters</li>
                {console.log(`newDistance: ${searchZipcodes(67206, item.zipcode)}`)}
              </div>
            ) : null}
          </div>
        </div>
      ))
      
      return (<> 
      {itemList}
      </>)

    }

      




    const loading = ()=>{
      <div>Loading...</div>
    }


  return (
    <div className='container'>
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
            <br></br>
        </section>
      {props.items? loaded(): loading}
    </div>
  )
}

export default Index