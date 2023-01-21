import React from "react";
import Item from "../components/Item";
import { Link } from "react-router-dom";

function Index(props) {
  const loaded = () => {

     const itemList = (props.items.map((item)=>(

      <div className="itemCard" key={item._id}>
          <Link to={`/items/${item._id}`}>
            <img className="itemImg" src={`${item.image}`} />
          </Link>
          <ul>
          <li>{item.name}</li>
          <li>{item.user}</li>
          <li>{item.condition}</li>
          <li>{item.zipcode}</li>
          </ul>
      </div>
   
    )))


    return (
      <div className="container">
        
        {itemList}
      </div>
    );
  };
  const loading = () => {
    <div>Loading...</div>;
  };

  return <div className="container">{props.items ? loaded() : loading}</div>;

}

export default Index;
