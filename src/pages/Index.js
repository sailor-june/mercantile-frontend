import React from 'react'
import Item from '../components/Item'
import { Link } from 'react-router-dom'
import { useState } from "react"
import Distance from '../components/Distance'
import Itemcards from '../components/Itemcards'

const fetch = require('node-fetch');


function Index(props) {
  
    const [newForm, setNewForm] = useState({
    });

    const [newFormZipCode, setNewFormZipCode] = useState({
      formZipCode: 95051
    })
    // let formZipCode = null;

    const [newSubmitTrigger, setNewSubmitTrigger] = useState(0)



    const handleChange = event => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }


    const handleSubmit = event => {
        event.preventDefault();
        // setNewForm(newForm.zipcode1)
        // setNewFormZipCode(newForm.zipcode1)
        // setNewForm({...newForm, [newForm.zipcode1]: newForm.zipcode1})
        setNewFormZipCode (newForm.zipcode1)
        console.log(newForm.zipcode1)
        setNewSubmitTrigger(newSubmitTrigger + 1)
        // setNewFormZipCode(95051)
        // searchZipcodes(newForm.zipcode1, itemZip)
        // return newForm.zipcode1
        // let zipCodeInputTest = newForm.zipcode1;


      // loaded(newForm.zipcode1);
    }

    // const [newDistance, setNewDistance] = useState({
    //     distance: 0
    // });
    

    // function searchZipcodes (zipcode1, zipcode2){

    //     const url = `https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distanceByPostalCodes?postal_code1=${zipcode1}&postal_code2=${zipcode2}`;

    //     const options = {
    //       method: 'GET',
    //       headers: {
    //         'X-RapidAPI-Key': '06053b3196mshcaa2db99ee7ca52p153516jsn7c311fbde1d3',
    //         'X-RapidAPI-Host': 'global-zip-codes-with-lat-and-lng.p.rapidapi.com'
    //       }
    //     };


        
    //     fetch(url, options)
    //         .then(res => res.json())
    //         .then(json => setNewDistance(json.distance))
    //         .catch(err => console.error('error:' + err));

    //     console.log(newDistance)
    //     let distanceInfo = JSON.stringify(newDistance);
    //     return distanceInfo
    // }

    
    // const loaded = (zipCodeInput) => {

    //   let itemList = props.items.map((item) => (
    //     <div className="itemCard" key={item._id}>
    //       <Link to={`/items/${item._id}`}>
    //         <div className="itemImg">
    //           <img src={`${item.image}`} />
    //         </div>
    //       </Link>
    //       <div className="itemData">
    //         <li>{item.name}</li>
    //         {item.condition ? (
    //           <div>
    //             Condition: <li>{item.condition}</li>
    //           </div>
    //         ) : null}
    //         {item.zipcode ? (
    //           <div>
    //             zipcode: <li>{item.zipcode}</li>
    //           </div>
    //         ) : null}
    //         {item.zipcode && zipCodeInput? (
    //           <div>
    //             {searchZipcodes(zipCodeInput, item.zipcode)}
    //             Distance: <li>{newDistance} meters</li>
    //             {console.log(`newDistance: ${newDistance}`)}
    //           </div>
    //         ) : null}
    //       </div>
    //     </div>
    //   ))
      
    //   return (<> 
    //   {itemList}
    //   </>)

    // }


    // const loading = ()=>{
    //   <div>Loading...</div>
    // }


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
    {/* <div className='container'>
      {props.items? loaded(): loading}
    </div> */}
    <Itemcards items={props.items} zipCodeInput={newFormZipCode} submitTrigger={newSubmitTrigger}/>
    </>
  )
}

export default Index