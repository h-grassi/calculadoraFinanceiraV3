import Indice from "../../Elementos/Indice";
const RendaVariavel = () =>{
   const listaProps=[
      {href:"#introducao", label:"Introdução"},
      {href:"#acoes", label:"Ações"},
      {href:"#fii", label:"Fundos Imobiliários"},
      {href:"#etfs", label:"ETFs"},
   ]
   return(
     <>
      <p className="lead"> Preciso de ideias</p>
      <Indice props={listaProps}/>
     </>
   )
}
export default RendaVariavel;