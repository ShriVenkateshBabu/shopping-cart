import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./index.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import DataProvider from './context/DataProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <DataProvider>
   <Routes>
       <Route path ="*" element= {<App/>}/>
      </Routes> 
   </DataProvider>
    </BrowserRouter>
  </StrictMode>
);

