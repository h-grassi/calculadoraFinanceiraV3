import Artigos from "../Artigos"
import Home from "../Home"
import Livros from "../Livros";
import Conceitos from "../Conceitos"

const Componentes = [
   {valor:"home", label:"Home", componentes:<Home/>},
   {valor: "calculadoras", label:"Calculadoras"},
   {valor:"artigos", label:"Artigos", componentes:<Artigos/>},
   {valor:"livros", label:"Livros", componentes: <Livros/>},
   {valor:"conceitos", label:"Conceitos", componentes: <Conceitos/>}
]
export default Componentes;