import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
const { id } = useParams();
const item = props.items ? props.items.find((item)=>item._id === id):null;
const navigate = useNavigate()

const [editForm, setEditForm] = useState(item)

useEffect(() => {
  if(item) {
    setEditForm(item)
  }
}, [item])

const handleChange = (event) => {
  setEditForm({...editForm, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
  event.preventDefault();
  props.updateItem(id, editForm)
  navigate(`/items/${item._id}`)
}

const loaded = () => {
    return (
        <section className="itemUpdate">
          

        <form onSubmit={handleSubmit}>
          <label for=""></label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={editForm.name}
          />

          <textarea
            type="text"
            name="description"
            onChange={handleChange}
            value={editForm.description}
          />
          <label for="condition">Condition:</label>
        <select value={editForm.condition}
        defaultValue={item.condition}
        name="condition"
        onChange={handleChange}>

            <option value="new" >new</option>
            <option value="good">good</option>
            <option value="fair">fair</option>
            <option value="used">used</option>
        
        </select>
        <label for="image">Link to image</label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={editForm.image}
          />
          <input type="submit" value="Update Listing" />
        </form>  
      </section>       
    )
}
const loading = () => {
    return <h2>Loading...</h2>
  }
  
  return (
    <section>
      { props.items ? loaded() : loading() }
    </section>
  )

}

export default Update