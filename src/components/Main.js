import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Index from "../pages/Index";
import About from "../pages/About";
import ItemShow from "../pages/ItemShow";

import NewItem from "../pages/NewItem";

import Update from "../pages/Update";
function Main(props) {
  /////////////set Items state

  const [items, setItems] = useState(null);

  const URL = "https://mercantile.herokuapp.com/";

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
        Authorization: "Bearer " + token,
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

  return (
    <>
    <Routes>
      <Route
        path="/items"
        element={<Index items={items} user={props.user} />}
      />

      <Route
        path="/items/:id"
        element={
          <ItemShow items={items} deleteItem={deleteItem} user={props.user} />
        }
      />

      <Route
        path="/items/update/:id"
        element={
          <Update items={items} updateItem={updateItem} user={props.user} />
        }
      />

      <Route path="/about" element={<About user={props.user} />} />
      <Route
        path="/items/new"
        element={<NewItem createItem={createItem} user={props.user} />}
      />
      <Route path="/" element={<About user={props.user} />} />
    </Routes>
    </>
  );
}

export default Main;
