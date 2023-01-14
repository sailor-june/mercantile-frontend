import { Link, useParams } from "react-router-dom";
import React from "react";

function Item(props) {
  if (props.wanted == "true") {
    return (
      <div className="itemCard">
        WANTED:
        <Link to="/items/:id">
        
          <div className="itemImg">IMAGE GOES HERE</div>
        </Link>
        <div className="itemData">
          <li>Item Name</li>
          <li>Item tags</li>
          <li>Items offered</li>
        </div>
      </div>
    );
  } else {
    return(
      <div className="itemCard">
      OFFERED: 
      <Link to="/items/:id">
      
        <div className="itemImg">IMAGE GOES HERE</div>
      </Link>
      <div className="itemData">
        <li>Item Name</li>
        <li>Item tags</li>
        <li>Items wanted</li>
      </div>
    </div>
    )
  }
}

export default Item;
