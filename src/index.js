import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import ContextContainer from './context/ContextContainer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
   <ContextContainer>
      <RouterProvider router={routes} />
    </ContextContainer>
 </>   
);
