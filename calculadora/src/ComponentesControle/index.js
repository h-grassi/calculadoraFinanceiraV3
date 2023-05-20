//componenteControle
import React from "react";
import { Routes, Route } from "react-router-dom";

import Artigos from "../Componentes/Artigos"
import Home from "../Componentes/Home"
import Livros from "../Componentes/Livros";
import Sobre from "../Componentes/Sobre";
import ConverteJuros from "../Componentes/Calculadoras/ConverteJuros";
import SimuladorJurosCompostos from "../Componentes/Calculadoras/SimuladorJurosCompostos";
import RendimentoCdb from "../Componentes/Calculadoras/RendimentoCdb";
import RendaFixa from "../Componentes/RendaFixa";
import RendaVariavel from "../Componentes/RendaVariavel";
import ComparaRentabilidade from "../Componentes/Calculadoras/ComparaRentabiliade";

const ComponentesControle = [
   { valor: "home", label: "Home", componente: <Home />, link: "/" },
   {
      valor: "calculadoras",
      label: "Calculadoras",
      dropdown: true,
      itens: [
         { valor: "converteJuros", label: "Conversor de Juros", componente: <ConverteJuros />, link: "/converteJuros" },
         { valor: "simuladorJurosCompostos", label: "Simulador de Juros Compostos", componente: <SimuladorJurosCompostos />, link: "/simuladorJurosCompostos" },
         { valor: "rendimentoCdb", label: "Rendimento CDB", componente: <RendimentoCdb />, link: "rendimentoCdb" },
         { valor: "comparaRentabilidade", label: "Comparar Rentabiliades", componente: <ComparaRentabilidade />, link: "/comparaRentabilidade" }
      ]
   },
   { valor: "rendaFixa", label: "Renda Fixa", componente: <RendaFixa />, link: "/rendaFixa" },
   { valor: "rendaVariavel", label: "Renda Variável", componente: <RendaVariavel />, link: "/rendaVariavel" },
   { valor: "artigos", label: "Artigos", componente: <Artigos />, link: "/artigos" },
   { valor: "livros", label: "Livros", componente: <Livros />, link: "/livros" },
   { valor: "sobre", label: "Sobre", componente: <Sobre />, link: "/sobre" }
]



const Rotas = () => {

   return (
      <div className="row m-3 text-center p-0 m-0">
         <div className="col-sm border p-0 m-0">
            <p>coluna</p>
         </div>
         <div className="col-md-9 col-sm-12 p-0 m-0">
            <Routes>
               {ComponentesControle.map((pagina) => (
                  <>
                     <Route path={pagina.link} element={pagina.componente} />
                     {pagina.dropdown && (
                        pagina.itens.map(submenu => (
                           <Route path={submenu.link} element={submenu.componente} />
                        ))
                     )}
                  </>
               ))}
            </Routes>
         </div>
         <div className="col-sm border p-0 m-0">
            <p>coluna</p>
         </div>
      </div>
   )
}

export { Rotas, ComponentesControle }

