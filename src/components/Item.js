import { Link, useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
function Item(props) {
  const [distance, setDistance] = useState({
    distance: 0,
  });

  let userZip = props.userzip;
  let itemZip = props.item.zipcode;

  const searchZipcodes = async () => {
    const url = `https://redline-redline-zipcode.p.rapidapi.com/rest/distance.json/${userZip}/${itemZip}/mile`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "809da0f4bfmsh0a916cb7d3328c3p181fc8jsn420ae096549d",
        "X-RapidAPI-Host": "redline-redline-zipcode.p.rapidapi.com",
      },
    };

    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => setDistance({ ...data }))
      .then(alert(`this item is ${distance.distance} miles away`))
      .catch((err) => console.error("error:" + err));
  };

  const loaded = () => {
    return (
      <div className="itemCard" key="item">
        <Link to={`/items/${props.item._id}`}>
          <img className="itemImg" src={`${props.item.image}`} />
        </Link>

        <ul>
          <Link className="index-name" to={`/items/${props.item._id}`}>
            <li key="name">{props.item.name}</li>
          </Link>

          {props.item.condition ? (
            <>
              Condition:
              <li key="condition">{props.item.condition}</li>
            </>
          ) : null}

          <li key='zip'>{props.item.zipcode}</li>
          {props.userzip && props.item.zipcode ? (
            <>
              <button key='zipbutton' onClick={searchZipcodes}>how far?</button>
              <p></p>
            </>
          ) : null}
        </ul>
      </div>
    );
  };
  const loading = () => {
    <>LOADING</>;
  };

  return <div>{props.item ? loaded() : loading}</div>;
}
export default Item;
