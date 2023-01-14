import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';

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
            element={<itemShow />}/> 
          </Routes>
        </main>
      );
    }
    
    export default Main;