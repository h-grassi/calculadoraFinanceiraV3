import graficoazul from '../../../../assets/graficoazul.jpg'
import Indice from '../../../../Elementos/Indice';
//import './index.css'

const Ibovespa = () => {
  const listaProps = [
    { href: "#vs", label: "Bovespa Vs Ibovespa" },
    { href: "#bovespa", label: "Bovespa" },
    { href: "#ibovespa", label: "Ibovespa" },
    { href: "#formIndice", label: "Como o Índice é formado" }
  ]
  return (
    <>
      <div className="container-fluid p-5 m-0 text-white text-center"
        style={{ backgroundImage: `url(${graficoazul})`, backgroundSize: '100%', backgroundPosition: 'center' }}>
        <h1>IBOVESPA <strong>[B]³</strong></h1>
        <h3>O que é, o que representa e como funciona o maior indice da bolsa brasileira.</h3>
      </div>
      <Indice props={listaProps} />
      <h5 id="vs">Bovespa Vs Ibovespa</h5>
      <p>Para começar é importante difenciar o significado de Bovespa para Ibovespa. o primeiro é o nome da empresa que controla pela qual
        todos os brasileiros negociam ações, o segundo é o indice que representa uma carteira teórica de ativos usada para resumir o cenário atual do mercado..</p>
      <h5 id="bovespa">Bovespa</h5>
      <h5 id="ibovespa">Ibovespa</h5>
      <h5 id="formIndice">Como o índice é formado</h5>
      <p>[B]³</p>
      <p>aaaah</p>
      <p>aaaah</p>
      <p>aaaah</p>
      <p>aaaah</p>
    </>
  )
}
export default Ibovespa;