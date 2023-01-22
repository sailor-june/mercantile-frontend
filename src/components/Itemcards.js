import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'


const Itemcards = (props) => {


    const [newDistance, setNewDistance] = useState({
        distance: 0
    });

    const [newZipCode, setNewZipCode] = useState(null)

    useEffect(() => {
        // setNewDistance(1)
        if(props.submitTrigger){
            setNewZipCode(props.zipCodeInput)
        }
        // setNewZipCode(props.zipCodeInput)
        // let zipCodeInputSetter = props.zipCodeInput;
        // searchZipcodes(props.zipCodeInput, 95051);
      }, [props.submitTrigger]);
    

    function searchZipcodes (zipcode1, zipcode2){

        const url = `https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distanceByPostalCodes?postal_code1=${zipcode1}&postal_code2=${zipcode2}`;

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '79a9551a40msh14b6e8c1cbf50a3p1716bbjsn946b2a78eb77',
            'X-RapidAPI-Host': 'global-zip-codes-with-lat-and-lng.p.rapidapi.com'
          }
        };


        
        fetch(url, options)
            .then(res => res.json())
            .then(json => setNewDistance(json.distance))
            .catch(err => console.error('error:' + err));

        // console.log(newDistance)
        let distanceInfo = JSON.stringify(newDistance);
        return distanceInfo
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
           {(item.zipcode && newZipCode) ? (
                <div>
                  Distance: <li>{searchZipcodes(newZipCode, item.zipcode)} meters</li>
                  {console.log(`newDistance: ${newDistance}`)}
                  {console.log(`submitTrigger: ${props.submitTrigger}`)}
                  {console.log(`newZipCode: ${newZipCode}`)}
                </div>
              ) : null}
           </ul>
       </div>
    
     )))
      return(itemList)}
 
      const loading = () => {
     <div>Loading...</div>;
   };
        
      
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