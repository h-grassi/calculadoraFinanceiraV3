import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navheader from './Navheader';

function App() {
   const [abaOpcao, setAba] = useState("home");
   let renderizaAba;
   if(abaOpcao === 'home'){
      renderizaAba = '';
   }else if (abaOpcao ==='livros'){

   }else if (abaOpcao ==='calculadora'){
      
   }else if (abaOpcao ==='sobre'){
      
   }
   return (
      <>
         <Navheader />
         <div class="container-sm text-center">
            <h1> Título principal</h1>
            <p>ppp</p>
            <h2>titulo secundário</h2>
            <p>ppp</p>
         </div>
      </>
   )
} export default App