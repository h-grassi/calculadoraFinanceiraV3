//Todos os formulários nesse arquivo
const Form1 = (props) => {
  return (
    <div className="m-2">
        <label className="form-label"><strong>{props.label}</strong></label>
        <div class="input-group mx-auto input-group-sm" style={props.style}>
          <input className="form-control form-control-sm"
            type={props.type || "number"}
            id={props.id}
            value={props.value}
          />
          <div className={`input-group-text ${props.className}`}>{props.texto}</div>
        </div>
    </div>
  )
}//utilizado em ConverteJuros, símbolo a direita do input

const Form2 = (props) => {
  const texto = props.texto ? <div className="input-group-text">{props.texto}</div> : null;
  return (
    <div className="m-2">
        <label className="form-label"><strong>{props.label}</strong></label>
        <div class="input-group mx-auto input-group-sm" style={props.style}>
          <>{texto}</>
          <input className="form-control form-control-sm "
            type={props.type || "number"}
            id={props.id}
            value={props.value}
          />
        </div>
    </div>
  )
}// símbolo a esquerda do input

export { Form1, Form2 }