import {Form1, Form2} from "../../../Elementos/Formularios"
const SimuladorJurosCompostos = () => {
   return(
      <>
      <h3>SimuladorJurosCompostos</h3>
      <p className="lead">calculadora que simula rendimentos de aplicações a longo prazo</p>
      <div className="text-center">
         <div className="row">
            <div className="col-sm border">
               <p>coluna</p>
            </div>
            <div className="col-md-9 col-sm-12 ">
               <p>Essa ferramenta tem o objetivo de mostrar o poder do longo prazo na ação dos juros compostos e como você pode
                  se beneficiar disso.
               </p>
               <h5>Preencha os campos e calcule:</h5>
               <div class="bg-light card text-center col-md-6 col-sm-12 mx-auto mb-2">
                  <div class="card-body">
                     <Form2 label="Valor Inicial:" texto="R$" id="vlInicial" style={{width:'50%'}}/>
                     <Form2 label="Aporte Mensal:" texto="R$" id="vlmensal" style={{width:'50%'}}/>
                     <Form1 label="Tempo:" texto="Anos" id="tempo" style={{width:'50%'}}/>
                     <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="radiJuros" id="radio1" />
                        <label class="form-check-label" for="radio2">Juros Anual</label>
                     </div>
                     <div class="form-check form-check-inline mx-auto">
                        <input class="form-check-input" type="radio" name="radiJuros" id="radio2"/>
                        <label class="form-check-label" for="radio1">Juros Mensal</label>
                     </div>
                     <Form1 id="juro" texto="%" label="Taxa de Juros:" style={{width:'50%'}}/>
                     <button  class="btn btn-success align-self-end">Calcular</button>
                  </div>
               </div>
            </div>
            <div className="col-sm border">
               coluna 3
            </div>
         </div>
      </div>
      </>
   );
}
export default SimuladorJurosCompostos;