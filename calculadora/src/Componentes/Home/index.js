import Carrosel from "../../Elementos/Carrosel";
import { CartaoCotacao, CartaoDepoimentos } from "../../Elementos/Cartao";
import { GrBitcoin } from "react-icons/gr";
import { HiCurrencyDollar, HiCurrencyEuro } from "react-icons/hi"
import { Cotacoes } from "../../Scripts/main.js"


const Home = () => {
  const carroselDepoimentos = [
    { item: <CartaoDepoimentos texto='"Deixa de ser vagabundo e vai estudar"' fonte="Meu pai" /> },
    { item: <CartaoDepoimentos texto='"Legal, mas que tal fazer um concurso público?"' fonte="Tia Lúcia" /> },
    { item: <CartaoDepoimentos texto='"Para de fazer barulho seu chinelão!"' fonte="Meu vizinho" /> },
    { item: <CartaoDepoimentos texto='"Tu não vale nada!"' fonte="Minha ex" /> }
  ];
  const cotacoes = Cotacoes();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">1-Apresentação</div>
        </div>
        <div className="row">
          <div className="col">2-Cotações</div>
        </div>
        <div className="row">
          <div className="col">3-sugestões (links para outras páginas)</div>
        </div>
      </div>
      <div className="row ">
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