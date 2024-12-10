import { Routes, Route } from "react-router-dom";
import babilonia from '../../assets/Livros/babilonia.jpg';
import menteMilionaria from '../../assets/Livros/menteMilionaria.jpg';
import paiRico from '../../assets/Livros/paiRico.jpg';
import PaiRico from "../../Componentes/LivrosMenu/PaiRico"



const LivrosControle = [
  {
    src: paiRico, componente: <PaiRico />, link: "/livros/pai_rico"
  },
  {
    titulo: '', resumo: '',
    src: babilonia, componente: "", link: "/livros/babilonia"
  },
  {
    titulo: '', resumo: '',
    src: menteMilionaria, componente: '', link: "/livros/mente_milionaria"
  }
]
const RotasLivros= () => {
  return (
    <Routes>
      {
        LivrosControle.map((livros) => (
          <Route path={livros.link} element={livros.componente} />
        ))
      }
    </Routes>
  )
}
export { LivrosControle, RotasLivros}