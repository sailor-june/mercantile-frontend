import { useState } from "react";
import { useNavigate } from 'react-router-dom';
  import { auth } from "../firebase";
  import { getAuth } from "firebase/auth"; 

function NewItem(props) {

  const navigate = useNavigate()
  

    const formFields = {

        name: '',
        condition: '',
        description: '',
        image: '',
        uid:'',
        zipcode:'',
        user: '',
        contact: '' };

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
          placeholder="name"
          onChange={handleChange}
        />


        <label for="condition">Condition:</label>
        <select value={newForm.condition}
        name="condition"
        onChange={handleChange}>

            <option value="new" >new</option>
            <option selected value="good">good</option>
            <option value="fair">fair</option>
            <option value="used">used</option>
        
        </select>
        <label for="description">Description </label>
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />

        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="link to image"
          onChange={handleChange}
        />


        <input type="submit" value="Create Listing" />
      </form>
    </div>
    </>
  );
}

export default NewItem;
