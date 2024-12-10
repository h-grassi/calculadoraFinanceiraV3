import { CartaoImagens } from "../../Elementos/Cartao";
import { LivrosControle} from "../../ComponentesControle/LivrosControle";
const LivrosMenu = () => {
   return (
      <>
         <h1>Livros</h1>
         <p>Assuntos diversos relacionados a dinheiro e educação financeira.</p>
         <p>Sugestões de temas ou artigos para compartilhar? Por favor <a href="#rodape">entre em contato</a>.</p>
         <div class="row m-2  justify-content-center">
            {LivrosControle.map((livros) => (
               <CartaoImagens
                  index={livros.index}
                  src={livros.src}
                  link={livros.link}
               />
            ))}
         </div>
      </>

   )
}
export default LivrosMenu;


