import { CartaoDepoimentos } from "../../Elementos/Cartao";
import Cotacoes from "../../Elementos/Cotacoes";

const Home = () => {

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
      <div className="row">
          <div className="col">
            <CartaoDepoimentos/>
          </div>
        </div>
      
        <div className="row">
          <div className="col">5-Quem sou eu</div>
        </div>
      <Cotacoes />
    </>
  )
}
export default Home;