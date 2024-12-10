import Ibovespa from "../../Componentes/ArtigosMenu/Artigos/Ibovespa"
import { Routes, Route } from "react-router-dom";
import bancoRealista from '../../assets/Artigos/bancoRealista.png'
import piramide from '../../assets/Artigos/piramide.png'
import bovespa from '../../assets/Artigos/bovespa.png'
import fgts from '../../assets/Artigos/fgts.png'
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
  {
    titulo: 'INSS, uma grande pirâmide', resumo: 'Porque o sistema de previdencia pública é insustentável.',
    src: piramide, componente: ''
  },
  {
    titulo: 'FGTS, dinheiro que não é seu', resumo: 'Como "proteger" seu dinheiro de você mesmo e ganhar com isso.',
    src: fgts, componente: ''
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