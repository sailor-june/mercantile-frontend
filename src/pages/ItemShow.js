import { useParams, useNavigate, Link } from "react-router-dom";

const ItemShow = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = props.items ? props.items.find((item) => item._id === id) : null;

  const mailClick = () => {
    const mailtoLink = document.createElement("a");
    mailtoLink.href = `mailto:${item.contact}`;
    mailtoLink.click();
  };

  const loaded = () => {
    const adminTools = (
      <div key="admintools">
        <button onClick={handleDelete} key="button">
          Delete This Listing
        </button>
        <Link
          key="link"
          className="update-button"
          to={`/items/update/${item._id}`}
        >
          Update Listing
        </Link>
      </div>
    );


    console.log(item.uid);
    return (
      <div className="itemShow">
        <div>
          <img src={item.image} alt="" />
        </div>
        <div className="itemData">
          <h2>{item.name}</h2>
          <li>Condition: {item.condition}</li>
          <span>
            <li>{item.description}</li>
          </span>
          <li>Posted by {item.user}</li>
          <button onClick={mailClick}>Contact</button>
          {props.user.uid === item.uid ? adminTools : <></>}
        </div>
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

  return <section>{props.items &&props.user ? loaded : loading}</section>;
};
export default ItemShow;
