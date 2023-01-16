import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Index from '../pages/Index';
import ItemShow from '../pages/ItemShow';
import Wanted from '../pages/Wanted';

function Main() {

  const [items, setItems] = useState(null)
  const URL= "http://mercantile.herokuapp.com/"

  const getItems = async() =>{
    const response = await fetch(URL+"items");
    const data = await response.json()
      setItems(data)
      }
      useEffect(()=>{
      getItems();
      },[])

     
      return (
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<Index items={items}/>} 
            />

            <Route 
            path="/items/:id"
            element={<ItemShow items={items}/>} /> 

            <Route path="/wanted" element={<Wanted />}/>
          </Routes>
        </main>
      );
    }
    
    export default Main;