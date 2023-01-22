
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
          <li key="name">{wanted.name}</li>
          <li key="contact">{wanted.contact}</li>
          <li key='desc'>{wanted.description}</li>
          <li key='zip'>{wanted.zipcode}</li>
        </ul>
      </div>
    ));

    return (wantedList)
  };


export default Wanted;

