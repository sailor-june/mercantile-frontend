import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'


const Itemcards = (props) => {


    const [newDistance, setNewDistance] = useState({
        distance: 0
    });

    const [newZipCode, setNewZipCode] = useState({
        zipcode: null
    })

    useEffect(() => {
        setNewDistance(1)
        setNewZipCode(props.zipCodeInput)
        // let zipCodeInputSetter = props.zipCodeInput;
        // searchZipcodes(props.zipCodeInput, 95051);
      }, [props.submitTrigger]);
    

    function searchZipcodes (zipcode1, zipcode2){

        const url = `https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distanceByPostalCodes?postal_code1=${zipcode1}&postal_code2=${zipcode2}`;

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '46b01823dcmsha61ea792f71951bp1f5826jsn9992225378e9',
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
              {(item.zipcode && newZipCode && (props.submitTrigger > 9)) ? (
                <div>
                  Distance: <li>{searchZipcodes(newZipCode, item.zipcode)} meters</li>
                  {console.log(`newDistance: ${newDistance}`)}
                  {console.log(`submitTrigger: ${props.submitTrigger}`)}
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
      {props.items? loaded(): loading}
    </div>
    )
}

export default Itemcards