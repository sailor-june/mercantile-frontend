
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

import Index from "../pages/Index";
import About from "../pages/About";
import ItemShow from "../pages/ItemShow";
import Wanted from "../pages/Wanted";
import NewItem from "../pages/NewItem";
import Distance from "./Distance";
import Update from "../pages/Update";
function Main(props) {
  /////////////set Items state
 

  const [items, setItems] = useState(null);
  const [user, setUser] = useState();


  const URL = "https://mercantile.herokuapp.com/";


  // const getUser= async()=>{
  //   const token= await props.user.getIdToken()
  //   const response = await fetch(URL+"users",{
  //     method: 'GET',
  //     headers: {
  //       'Authorization' : 'Bearer ' + token 
  //     }
  //   })
  //   const data= await response.json();
   
  //   setUser(data)
  // }

  const getItems = async () => {
    const response = await fetch(URL + "items");
    const data = await response.json();
    setItems(data);
  };

  const createItem = async (item) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();

    //make post request to create item
    await fetch(URL + "items/new", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        "Authorization": "Bearer "+token
      },
      body: JSON.stringify(item),
    });
    //update list of items
    getItems();
    console.log(item);
  };

  const updateItem = async (id, updatedItem) => {
    await fetch(URL + "items/update/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    getItems();
  };

  const deleteItem = async (id) => {
    await fetch(URL + "items/" + id, {
      method: "DELETE",
    });
    getItems();
  };

  useEffect(() => {
    getItems();
  }, []);
  
  // useEffect(()=>{
  //   if (props.user){
  //     getUser()

  //   }
  // },[props.user])


  return (
    <main>
      <Routes>
        <Route path="/items" element={<Index items={items} />} />

        <Route
          path="/items/:id"
          element={<ItemShow items={items} deleteItem={deleteItem} user={props.user} />}

        />

        <Route
          path="/items/update/:id"
          element={<Update items={items} updateItem={updateItem} user={props.user}/>}
        />

        <Route path="/wanted" element={<Wanted user={props.user}/>} />
        <Route path="/about" element={<About user={props.user}/>} />
        <Route
          path="/items/new"
          element={<NewItem createItem={createItem} user={props.user}/>}
        />
        <Route path="/" element={<About user={props.user}/>} />
      </Routes>
    </main>
  );
}

export default Main;
