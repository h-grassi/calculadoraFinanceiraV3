
const Cartao = (props) => {
  return (
    <div class="col-sm-3 mb-3">
      <div className="card w-100 h-100 bg-light" >
        <img src={props.src} className="card-img-top" alt={props.alt} />
        <h5 className="card-title"><strong>{props.titulo}</strong></h5>
        <div className="card-body p-0">
          <figcaption class="blockquote-footer">
            <p className="card-text">{props.resumo}</p>
          </figcaption >
        </div>
        <div class="footer mb-2">
          <button class="btn btn-success btn-sm align-self-end">Ler</button>
        </div>
      </div>
    </div>
  )
}
export default Cartao;