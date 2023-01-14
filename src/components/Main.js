import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import ItemShow from '../pages/ItemShow';
import Wanted from '../pages/Wanted';

function Main() {
    return (
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<Index />} 
            />

            <Route 
            path="/items/:id"
            element={<ItemShow />}/> 

            <Route path="/wanted" element={<Wanted />}/>
          </Routes>
        </main>
      );
    }
    
    export default Main;