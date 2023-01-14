import React from 'react'

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