import { BsFillChatLeftQuoteFill } from "react-icons/bs";

import './index.css'
//para capa artigos
const CartaoArtigos = (props) => {
  return (
    <div className="col-sm-3 mb-3">
      <button className="btn card p-0 w-100 h-100 bg-light ">
        <img src={props.src} className="card-img-top" alt={props.alt} />
        <div className="card-body p-0">
          <h5 className="text-center"><strong>{props.titulo}</strong></h5>
          <figcaption className="blockquote-footer">
            <p className="card-text">{props.resumo}</p>
          </figcaption >
        </div>
      </button>
    </div>
  )
}

//para depoimentos

const CartaoDepoimentos = (props) => {
  return (
    <>
      <div className="col d-flex justify-content-center align-items-center cartao-depoimento">
        <div className=" col-md-9 col-lg-7 col-xl-5 ">
          <div className="card text-bg-light">
            <div className="card-body text-bg-light">
              <blockquote className="blockquote blockquote-custom text-bg-light px-3 pt-4">
                <div className="blockquote-custom-icon bg-success shadow-1-strong">
                  <BsFillChatLeftQuoteFill />
                </div>
                <p className="mb-0 mt-2">
                  <em>
                    {props.texto}
                  </em>
                </p>
                <footer className="blockquote-footer pt-4 mt-4 border-top">
                  <cite title="Source Title">{props.fonte}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// ar cotação de moedas
const CartaoCotacao = (props) => {
  return (
    <div className="col-sm-3 m-4">
      <div className={`card mb-3 border border-2 text-bg-light ${props.className}`} >
        <div className="card-body">
          <div className="blockquote-custom-icon2">
            {props.icone}
          </div>
          <p className="text-center"><strong>{props.titulo}</strong></p>
          <p className="card-text" id={props.id}>{props.texto}</p>
        </div>
        <div className={`card-footer ${props.className}`}>
          <p className="card-text p-0">{props.data}</p>
        </div>
      </div>
    </div>
  )
}

export { CartaoArtigos, CartaoDepoimentos, CartaoCotacao };
