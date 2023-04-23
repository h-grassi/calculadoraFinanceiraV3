import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navheader from './Navheader';
import ComponentesControle from './ComponentesControle';
import Footer from './Footer';

function App() {
   const [abaOpcao, setAba] = useState("home");
   const componenteSelecionado = ComponentesControle.find(
      opcao => opcao.valor === abaOpcao
   )
   const itens = ComponentesControle.flatMap(opcao => opcao.itens || []);
   const componenteDropdown = itens.find(
      item => item.valor === abaOpcao
   )
   return (
      <>
         <Navheader setAba={setAba} />
         <div className="mx-3 text-center">
            <h1 className='mt-3'>
               {componenteSelecionado && componenteSelecionado.label}
               {componenteDropdown && componenteDropdown.label}
            </h1>
            <div className="row">
               <div className="col-sm border">
                  <p>coluna</p>
               </div>
               <div className="col-md-9 col-sm-12 ">
                  {componenteSelecionado && componenteSelecionado.componentes}
                  {componenteDropdown && componenteDropdown.componentes}
               </div>
               <div className="col-sm border">
                  <p>coluna</p>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
} export default App;
