import { Link, useParams } from "react-router-dom";
import React from "react";

function Item(props) {
  console.log(props);
  // if (props.wanted === "true") {
  return (
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
      <li>{item.zipcode}</li>
    </div>
  </div>
  );
  // } else {
  //   return(
  //     <div className="itemCard">
  //     OFFERED:
  //     <Link to="/items/:id">

  //       <div className="itemImg">IMAGE GOES HERE</div>
  //     </Link>
  //     <div className="itemData">
  //       <li>Item Name</li>
  //       <li>Item tags</li>
  //       <li>Items wanted</li>
  //     </div>
  //   </div>
  //   )
  // }
}

export default Item;
