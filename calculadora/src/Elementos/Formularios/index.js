//Todos os formulários nesse arquivo
const Form1 = (props)=>{
  
  return(
    <>
      <form className="m-2">
        <label className="form-label"><strong>{props.label}</strong></label>
          <div class="input-group mx-auto input-group-sm" style = {props.style}>
            <input className="form-control form-control-sm ${props.classe}" 
                  type= {props.type || "number"} 
                  id={props.id}
                  value = {props.value}
                  />
            <div className="input-group-text">{props.texto}</div>
         </div>
       </form>
     </>
   )
 }//utilizado em ConverteJuros, div a direita do input
 
 const Form2 = (props)=>{
   const texto = props.texto ? <div className="input-group-text">{props.texto}</div> :null;
   return(
     <>
     <form className="m-2 mx-auto">
     <label className="form-label"><strong>{props.label}</strong></label>
         <div class="input-group mx-auto input-group-sm" style={props.style}>
          <>{texto}</>
           <input className="form-control form-control-sm ${props.classe}" 
                  type= {props.type || "number"}
                  id={props.id}
                  value = {props.value}
                  />
         </div>
     </form>
     </>
   )
 }//div a esquerda do input
 export {Form1, Form2}