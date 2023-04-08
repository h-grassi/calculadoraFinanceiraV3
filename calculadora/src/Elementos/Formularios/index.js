const Form1 = (props)=>{
  return(
    <>
      <form className="m-2">
        <label className="form-label">Taxa:</label>
        <div class="input-group input-group-sm">
          <input className="form-control form-control-sm text-right" 
                 type="float" 
                 id={props.id}
                 value = {props.value}
                 />
          <div class="input-group-text">%</div>
        </div>
      </form>
    </>
  )
}//utilizado em ConverteJuros
export default Form1;