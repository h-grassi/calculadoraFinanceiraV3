import React from 'react';
import Navheader from './Navheader';

import './index.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from "react-router-dom";
import { Rotas } from './ComponentesControle';

function App() {

   return (
      <>
         <BrowserRouter>
            <Navheader />
            <Rotas />
         </BrowserRouter>
         <Footer />
         <Analytics />
      </>
   )
} export default App;
