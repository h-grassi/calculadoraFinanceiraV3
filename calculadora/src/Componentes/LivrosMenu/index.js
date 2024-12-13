import { CartaoImagens } from "../../Elementos/Cartao";
import { LivrosControle } from "../../ComponentesControle/LivrosControle";

const LivrosMenu = () => {
   return (
      <>
         <h1>Livros</h1>
         <p>Algum dos livros mais famosos e leituras essenciais relacionadas ao mundo das finanças.</p>
         <p>Sugestões de livros para compartilhar? Por favor <a href="#rodape">entre em contato</a>.</p>
         <div class="row m-2  justify-content-center">
            {LivrosControle.map((livros) => (
               <CartaoImagens
                  index={livros.index}
                  src={livros.src}
                  link={livros.link}
               />
            ))}
         </div>
         <h2>*PÁGINA EM CONTRUÇÃO*</h2>
         <p>Links para os livros não disponíveis no momento</p>
      </>

   )
}
export default LivrosMenu;


