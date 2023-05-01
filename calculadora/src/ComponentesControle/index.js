//componenteControle
import Artigos from "../Componentes/Artigos"
import Home from "../Componentes/Home"
import Livros from "../Componentes/Livros";
import ConverteJuros from "../Componentes/Calculadoras/ConverteJuros";
import SimuladorJurosCompostos from "../Componentes/Calculadoras/SimuladorJurosCompostos";
import RendimentoCdb from "../Componentes/Calculadoras/RendimentoCdb";
import ValorJusto from "../Componentes/Calculadoras/ValorJusto";
import RendaFixa from "../Componentes/RendaFixa";
import RendaVariavel from "../Componentes/RendaVariavel"



const ComponentesControle = [
   { valor: "home", label: "Home", componentes: <Home /> },
   {
      valor: "calculadoras",
      label: "Calculadoras",
      dropdown: true,
      itens: [
         { valor: "converteJuros", label: "Conversor de Juros", componentes: <ConverteJuros /> },
         { valor: "simuladorJurosCompostos", label: "Simulador de Juros Compostos", componentes: <SimuladorJurosCompostos /> },
         { valor: "rendimentoCdb", label: "Rendimento CDB", componentes: <RendimentoCdb /> },
         { valor: "valorJusto", label: "Cálculo do Valor Justo", componentes: <ValorJusto /> }
      ]
   },
   { valor: "rendaFixa", label: "Renda Fixa", componentes: <RendaFixa /> },
   { valor: "rendaVariavel", label: "Renda Variável", componentes: <RendaVariavel /> },
   { valor: "artigos", label: "Artigos", componentes: <Artigos /> },
   { valor: "livros", label: "Livros", componentes: <Livros /> }
]
export default ComponentesControle;

