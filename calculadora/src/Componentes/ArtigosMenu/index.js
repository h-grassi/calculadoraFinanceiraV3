import { CartaoArtigos } from "../../Elementos/Cartao";
import { ArtigosControle } from "../../ComponentesControle/ArtigosControle";

const ArtigosMenu = () => {

   return (
      <>
         <h1>Artigos</h1>
         <p>Assuntos diversos relacionados a dinheiro e educação financeira.</p>
         <p>Sugestões de temas ou artigos para compartilhar? Por favor <a href="#rodape">entre em contato</a>.</p>
         <div class="row m-2  justify-content-center">
            {ArtigosControle.map((artigo) => (
               <CartaoArtigos
                  index={artigo.index}
                  titulo={artigo.titulo}
                  resumo={artigo.resumo}
                  src={artigo.src}
                  link={artigo.link}
               />
            ))}
         </div>
      </>
   )
}
export default ArtigosMenu;