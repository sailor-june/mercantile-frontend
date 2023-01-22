import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Distance from "../components/Distance";

const ItemShow = (props) => {


const { id } = useParams();
const navigate = useNavigate();
const item = props.items ? props.items.find((item)=>item._id === id):null;


const [editForm, setEditForm] = useState(item)

useEffect(() => {
  if(item) {
    setEditForm(item)
  }
}, [item])

  const mailClick = () => {
    const mailtoLink = document.createElement('a');
    mailtoLink.href = `mailto:${item.contact}`;
    mailtoLink.click();
  };

const loaded = () => {

  const adminTools= (
    <>
        <button onClick={handleDelete}>Delete This Listing</button> 
      <Link className="update-button" to={`/items/update/${item._id}`}>Update Listing</Link>
    </>
  )
console.log(item.uid)
  return (
    <div className='itemShow'>
      <div>
        <img src={item.image}/>
      </div>
      <div className="itemData">
            <h2>{item.name}</h2>
            <li>Condition: {item.condition}</li>
            <span><li>{item.description}</li></span>
            <li>Posted by {item.user}</li>
            <button onClick={mailClick}>Contact</button>
            {props.user.uid===item.uid?adminTools:<></>}
      </div>
    </div>
  )
}

const loading = () => {
  return <h2>Loading...</h2>
}

const handleDelete = () => {
  props.deleteItem(id)
  navigate('/items')
}

return (
  <section>
    { props.items ? loaded() : loading() }
  </section>
)
}
export default ItemShow