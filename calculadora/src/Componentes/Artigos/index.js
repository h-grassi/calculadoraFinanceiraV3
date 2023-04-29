import {CartaoArtigos} from "../../Elementos/Cartao";
import bancoRealista from '../../assets/bancoRealista.png'
import piramide from '../../assets/piramide.png'
import bovespa from '../../assets/bovespa.png'
import fgts from '../../assets/fgts.png'
import velhoRico from '../../assets/velhoRico.png'
const Artigos = () => {
   const artigosControle = [
      {
         titulo: 'Tudo sobre CDB', resumo: 'Explicação detalhada e como escolher o melhor indexador.',
         src: bancoRealista, componente: ''
      },
      {
         titulo: 'INSS, uma grande pirâmide', resumo: 'Porque o sistema de previdencia pública é insustentável.',
         src: piramide, componente: ''
      },
      {
         titulo: 'FGTS, dinheiro que não é seu', resumo: 'Como "proteger" seu dinheiro de você mesmo e ganhar com isso.',
         src: fgts, componente: ''
      },
      {
         titulo: 'Ibovespa', resumo: 'Como funciona o maior índice da bolsa brasileira.',
         src: bovespa, componente: ''
      },
      { titulo: 'Longo Prazo', resumo: 'Seu melhor amigo e sua chance de prosperar financeiramente.', src: velhoRico, componente: '' }
   ];
   return (
      <>
         <p>Assuntos diversos relacionados a dinheiro e educação financeira.</p>
         <p>Sugestões de temas ou artigos para compartilhar? Por favor <a href="#rodape">entre em contato</a>.</p>
         <div class="row m-2  justify-content-center">
            {artigosControle.map((artigo, index) => (
               <CartaoArtigos
                  index={artigo.index}
                  titulo={artigo.titulo}
                  resumo={artigo.resumo}
                  src={artigo.src}
               />
            ))}
         </div>
      </>
   )
}
export default Artigos;