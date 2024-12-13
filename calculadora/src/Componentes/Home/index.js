import Carrosel from "../../Elementos/Carrosel";
import { CartaoCotacao, CartaoDepoimentos } from "../../Elementos/Cartao";
import { GrBitcoin } from "react-icons/gr";
import { HiCurrencyDollar } from "react-icons/hi"
import { HiCurrencyEuro } from "react-icons/hi2"
import { Cotacoes } from "../../Scripts/main.js"


const Home = () => {
  const carroselDepoimentos = [
    { item: <CartaoDepoimentos texto='"Promissor, me intressei"' fonte="Colega de trabalho" /> },
    { item: <CartaoDepoimentos texto='"Super esclarecedor."' fonte="Meu vizinho" /> },
    { item: <CartaoDepoimentos texto='"Muito educativo e fácil de compreender"' fonte="Primo Carlos." /> }
  ];
  const cotacoes = Cotacoes();
  return (
    <>
      <h1>Investidor do Zero</h1>
      <div className="row ">
        <p>Site para sem fins lucrativos, apenas com propósito educativo e para testar meus conhecimentos na área de programação.</p>
        <div className="col">
          <h3 className="mt-5">Depoimentos:</h3>
          <Carrosel item={carroselDepoimentos.map(itens => (
            <div className="carousel-item active p-5 ">
              {itens.item}
            </div>
          ))} />
        </div>
        <div className="row justify-content-center">
          <h2>Cotações</h2>
          <CartaoCotacao
            icone={<GrBitcoin size={30} style={{ color: 'gold' }} />}
            className="border-warning"
            titulo="Bitcoin (BTC)"
            texto={cotacoes.bitcoin}
            data={cotacoes.dataBTCUSD} />
          <CartaoCotacao
            icone={<HiCurrencyDollar size={30} style={{ color: 'green' }} />}
            className="border-success"
            titulo="Dólar (USD)"
            texto={cotacoes.dolar}
            data={cotacoes.dataUSDBRL} />
          <CartaoCotacao
            icone={<HiCurrencyEuro size={30} style={{ color: 'blue' }} />}
            className="border-info"
            titulo="Euro (EUR)"
            texto={cotacoes.euro}
            data={cotacoes.dataEURBRL} />
        </div>
      </div>
    </>
  )
}
export default Home;