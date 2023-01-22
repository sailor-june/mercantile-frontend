import { useState } from "react";

import { useNavigate } from 'react-router-dom';
  import { auth } from "../firebase";
  import { getAuth } from "firebase/auth"; 

function NewItem(props) {
  const [user, setUser]=useState(null)


  const navigate = useNavigate()
  

    const formFields = {

        name: '',
        condition: '',
        description: '',
        image: '',
        uid:'',
        zipcode:'',
        user: '',
        contact: ''
    }

   //state to hold formData
    const [newForm, setNewForm] = useState(formFields);        
    //handleChange function for form    
    const handleChange = (event) => {
            setNewForm({
                ...newForm, [event.target.name]: event.target.value, uid: props.user.uid})    };        
    //handleSubmit function for form    
    const handleSubmit = async(event) => {    
        event.preventDefault();
        props.createItem(newForm).then(i=>(
                navigate('/items')))}
                 ;
    
  return (<>
    <div className="newitem">
      <form onSubmit={handleSubmit}>
        <label for="name">Item name:</label>
        <input
          type="text"
          value={newForm.name}
          name="name"
          onChange={handleChange}
        />


        <label for="condition">Condition:</label>
        <select value={newForm.condition}
        defaultValue="good"
        name="condition"
        onChange={handleChange}>


            <option value="new" >New</option>
            <option selected value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="used">Used</option>

        
        </select>
        <label for="description">Description:</label>
        <textarea
          className="description-input"
          type="text"
          value={newForm.description}
          name="description"
          onChange={handleChange}
        />
        <label for="zipcode">Zipcode:</label>
        <input
          type="text"
          value={newForm.zipcode}
          name="zipcode"
          onChange={handleChange}
        />
        <input 
          type="text"
          value={newForm.user}
          name="user"
          className="hidden" 
          onChange={handleChange}
        />
        <label for="image">Image:</label>
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="Paste URL here"
          onChange={handleChange}
        />


        <input type="submit" value="Create Listing" />

      </form>
    </div>
    </>
  );
}

export default NewItem;
