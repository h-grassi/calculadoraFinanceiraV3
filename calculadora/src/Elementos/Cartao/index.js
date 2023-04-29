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

const CartaoDepoimentos = () => {
  return (
    <>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-md-9 col-lg-7 col-xl-5">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
                  <div className="blockquote-custom-icon bg-success shadow-1-strong">
                    <BsFillChatLeftQuoteFill />
                  </div>
                  <p className="mb-0 mt-2">
                    "Deixa de ser vagabundo e vai estudar"
                  </p>
                  <footer className="blockquote-footer pt-4 mt-4 border-top">
                    <cite title="Source Title">Meu pai</cite>
                  </footer>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
export { CartaoArtigos, CartaoDepoimentos };
