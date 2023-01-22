import { useState } from "react";
import { Link } from "react-router-dom";

function Wanted(props) {
    const wantedList = props.wanted.map((wanted) => (
      <div className="wantedCard" key={wanted._id}>
        <Link to={`/wanted/${wanted._id}`}>
          <div className="wantedImg">
            <p>{`${wanted.name}`} </p>
          </div>
        </Link>
        <ul>
          <li>{wanted.name}</li>
          <li>{wanted.contact}</li>
          <li>{wanted.description}</li>
          <li>{wanted.zipcode}</li>
        </ul>
      </div>
    ));

    return (wantedList)
  };


export default Wanted;