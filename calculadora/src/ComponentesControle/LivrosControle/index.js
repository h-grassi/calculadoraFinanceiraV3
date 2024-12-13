import babilonia from '../../assets/Livros/babilonia.jpg';
import menteMilionaria from '../../assets/Livros/menteMilionaria.jpg';
import pai_rico from '../../assets/Livros/pai_rico.jpg';
import PaiRico from "../../Componentes/LivrosMenu/PaiRico"
import Babilonia from "../../Componentes/LivrosMenu/Babilonia";
import MenteMilionaria from "../../Componentes/LivrosMenu/MenteMilionaria";
import { Routes, Route } from "react-router-dom";





const LivrosControle = [
  {
    src: pai_rico, componente: <PaiRico/>, link: "/livros/pai_rico"
  },
  {
    src: babilonia, componente: <Babilonia/>, link: "/livros/babilonia"
  },
  {
    src: menteMilionaria, componente: <MenteMilionaria/>, link: "/livros/mente_milionaria"
  }
]
const RotasLivros= () => {
  return (
    <Routes>
      {
        LivrosControle.map((livros) => (
          <Route path={livros.link} element={livros.componente}/>
        ))
      }
    </Routes>
  )
}
export { LivrosControle, RotasLivros}