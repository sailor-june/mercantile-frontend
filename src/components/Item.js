import { Link, useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
function Item(props) {
  const [distance, setDistance] = useState({
    distance: 0,
  });

  let userZip = (props.userzip);
  let itemZip = (props.item.zipcode);
  let itemDistance = 0

  const searchZipcodes = async () => {
    const url = `https://redline-redline-zipcode.p.rapidapi.com/rest/distance.json/${userZip}/${itemZip}/mile`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "809da0f4bfmsh0a916cb7d3328c3p181fc8jsn420ae096549d",
        "X-RapidAPI-Host": "redline-redline-zipcode.p.rapidapi.com",
      },
    };
    let foundDistance= {}
    await fetch(url, options)
      .then((res)=> res.json())
      .then(data=>setDistance({...data}))
      .then(alert(`this item is ${distance.distance} miles away`))
      .catch((err) => console.error("error:" + err));
    ;
  };

  const loaded = () => {
    
  

  return (
      <div className="itemCard" key={props.item._id}>
        <Link to={`/items/${props.item._id}`}>
          <img className="itemImg" src={`${props.item.image}`} />
        </Link>

        <ul>
          <Link className="index-name" to={`/items/${props.item._id}`}>
            <li>{props.item.name}</li>
          </Link>

          {props.item.condition ? (
            <>
              Condition:
              <li>{props.item.condition}</li>
            </>
          ) : null}

          <li>{props.item.zipcode}</li>
          {props.userzip && props.item.zipcode ? (
            <><button className="far-button" onClick={searchZipcodes}>How Far?</button>
            <p></p>
            </>
          ) : null}
        </ul>
      </div>
    );}
  const loading = () => {
    <>LOADING</>;
  };

  return <>{props.item ? loaded() : loading}</>;
}
export default Item;
