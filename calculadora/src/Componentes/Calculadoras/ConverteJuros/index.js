import Form1 from "../../../Elementos/Formularios";
import efetuarConversao from  "../../../Scripts/main.js"
const ConverteJuros = () =>{
   return (
   <>
      <h3>Conversor de Juros</h3>
      <p className="lead">calculadora que transforma a taxa de juros selecionada de acordo com o período de tempo desejado.</p>
      <div className="text-center">
         <div className="row">
            <div className="col-sm border">
               <p>coluna</p>
            </div>
            <div className="col-md-9 col-sm-12">
               <p>Útil para comparar rentabilidade entre ativos e ter uma noção de real do quão abusivos são os juros de cartão de crédito por exemplo.</p>
               <h5>Preencha os campos e calcule:</h5>
               
               <div class="row m-2 mx-auto justify-content-center">
                  <div class=" col-sm-3 mb-3">
                     <div class="card w-100 h-100">
                        <div class="card-body" id="card1">
                           <h5 class="card-title">Taxa Anual</h5>
                           <Form1 id="tAno"/>
                           <button onClick={()=>efetuarConversao("1")} class="btn btn-success btn-sm align-self-end">Converter</button>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3 mb-3">
                     <div class="card w-100 h-100 ">
                        <div class="card-body" id="card2">
                           <h5 class="card-title">Taxa Mensal</h5>
                           <Form1 id="tMes"/>
                           <button onClick={()=>efetuarConversao("2")} class="btn btn-success btn-sm align-self-end">Converter</button>
                        </div>
                     </div>
                  </div>
                  <div class=" col-sm-3 mb-3">
                     <div class="card w-100 h-100">
                        <div class="card-body" id="card3">
                           <h5 class="card-title">Taxa Diária</h5>
                           <Form1 id="tDia"/>
                           <button onClick={()=>efetuarConversao("3")} class="btn btn-success btn-sm align-self-end">Converter</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-sm border">
               coluna 3
            </div>
         </div>
      </div>
   </>
   )
}
export default ConverteJuros;