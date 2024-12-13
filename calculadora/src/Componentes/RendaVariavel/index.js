import Indice from "../../Elementos/Indice";
const RendaVariavel = () => {
   const listaProps = [
      { href: "#introducao", label: "Introdução" },
      { href: "#acoes", label: "Ações" },
      { href: "#fii", label: "Fundos Imobiliários" },
      { href: "#etfs", label: "ETFs" },
   ]
   return (
      <>
         <h1>Guia de Renda Variável</h1>
         <Indice props={listaProps} />
         <h2>*PÁGINA EM CONTRUÇÃO*</h2>
      </>
   )
}
export default RendaVariavel;