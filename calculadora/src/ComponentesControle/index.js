import Artigos from "../Componentes/Artigos"
import Home from "../Componentes/Home"
import Livros from "../Componentes/Livros";
import Conceitos from "../Componentes/Conceitos"
import ConverteJuros from "../Componentes/Calculadoras/ConverteJuros";
import SimuladorJurosCompostos from "../Componentes/Calculadoras/SimuladorJurosCompostos";
import ValorJusto from "../Componentes/Calculadoras/ValorJusto";

const ComponentesControle = [
   {valor:"home", label:"Home", componentes:<Home/>},
   {valor: "calculadoras", 
    label:"Calculadoras", 
    dropdown:{
      itens:[
         {valor: "converteJuros", label:"Conversor de Juros", componentes:<ConverteJuros/>},
         {valor: "simuladorJurosCompostos", label: "Simulador de Juros Compostos", componentes:<SimuladorJurosCompostos/>},
         {valor: "valorJusto", label:"Cálculo do Valor Justo", componentes: <ValorJusto/>}
      ]
    }
   },
   {valor:"artigos", label:"Artigos", componentes:<Artigos/>},
   {valor:"livros", label:"Livros", componentes: <Livros/>},
   {valor:"conceitos", label:"Conceitos", componentes: <Conceitos/>}
]
export default ComponentesControle;