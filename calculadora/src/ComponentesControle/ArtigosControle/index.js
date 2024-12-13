import Ibovespa from "../../Componentes/ArtigosMenu/Artigos/Ibovespa"
import { Routes, Route } from "react-router-dom";
import bancoRealista from '../../assets/Artigos/bancoRealista.png'
import bovespa from '../../assets/Artigos/bovespa.png'
import velhoRico from '../../assets/Artigos/velhoRico.png'


const ArtigosControle = [
  {
    titulo: 'Ibovespa', resumo: 'Como funciona o maior índice da bolsa brasileira.',
    src: bovespa, componente: <Ibovespa />, link: "/artigos/ibovespa"
  },
  {
    titulo: 'Tudo sobre CDB', resumo: 'Explicação detalhada e como escolher o melhor indexador.',
    src: bancoRealista, componente: ""
  },
  { titulo: 'Longo Prazo', resumo: 'Seu melhor amigo e sua chance de prosperar financeiramente.', src: velhoRico, componente: '' }
]
const RotasArtigos = () => {
  return (
    <Routes>
      {
        ArtigosControle.map((artigos) => (
          <Route path={artigos.link} element={artigos.componente} />
        ))
      }
    </Routes>
  )
}
export { ArtigosControle, RotasArtigos }