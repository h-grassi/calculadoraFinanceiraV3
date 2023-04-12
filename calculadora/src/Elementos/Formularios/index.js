//Todos os formulários nesse arquivo
const Form1 = (props)=>{
   return(
     <>
       <form className="m-2">
         <label className="form-label"><strong>{props.label}</strong></label>
         <div class="input-group mx-auto input-group-sm col-xl-3"
              style = {props.style}>
           <input className="form-control form-control-sm ${props.classe}" 
                  type="number" 
                  id={props.id}
                  value = {props.value}
                  />
           <div class="input-group-text">{props.texto}</div>
         </div>
       </form>
     </>
   )
 }//utilizado em ConverteJuros, div a direita do input
 
 const Form2 = (props)=>{
   return(
     <>
     <form className="m-2 mx-auto">
     <label className="form-label"><strong>{props.label}</strong></label>
         <div class="input-group mx-auto input-group-sm" style={props.style}>
           <div class="input-group-text">{props.texto}</div>
           <input className="form-control form-control-sm ${props.classe}" 
                  type="number" 
                  id={props.id}
                  value = {props.value}
                  />
         </div>
     </form>
     </>
   )
 }//div a esquerda do input
 export {Form1, Form2}