import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Distance from "../components/Distance";

const ItemShow = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = props.items ? props.items.find((item) => item._id === id) : null;
  
  const [editForm, setEditForm] = useState(item);
  
  useEffect(() => {
    if (item) {
      setEditForm(item);
    }
  }, [item]);

  const loaded = () => {
    let adminTools = (
      <>
        <button onClick={handleDelete}>Delete This Listing</button>
        <Link to={`/items/update/${item._id}`}>Update Listing</Link>
      </>
    );

    console.log("item id:" + item.uid)
    return (
      <div className="itemShow">
        <div className="itemImg">
          <img src={item.image} />
        </div>

        <div className="itemData">
          <li>{item.name}</li>
          <li>condition: {item.condition}</li>
          <span>
            <li>description: {item.description}</li>
          </span>

          <li>LINK TO OWNER PROFILE</li>
        </div>
        {adminTools}
        {/* {props.user.uid==item.uid? {adminTools}:null} */}
        </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  const handleDelete = () => {
    props.deleteItem(id);
    navigate("/items");
  };

  return <section>{props.items ? loaded() : loading()}</section>;
};
export default ItemShow;
