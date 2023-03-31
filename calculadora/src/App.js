import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navheader from './Navheader';
import Componentes from './Componentes';


function App() {
   const [abaOpcao, setAba] = useState("home");
   const componenteSelecionado = Componentes.find(
      opcao => opcao.valor ===abaOpcao
   )

   return (
      <>
         <Navheader setAba = {setAba}/>
         <div class="container-sm text-center">
         {componenteSelecionado && componenteSelecionado.componentes}
         </div>
      </>
   )
} export default App;