import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import ItemShow from '../pages/ItemShow';

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
          </Routes>
        </main>
      );
    }
    
    export default Main;