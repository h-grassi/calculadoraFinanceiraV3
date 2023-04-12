import {Form1, Form2} from "../../../Elementos/Formularios"
import {simularJurosCompostos} from  "../../../Scripts/main.js"
const SimuladorJurosCompostos = () => {
   return(
      <>
      <h3>Simulador de Juros Compostos</h3>
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
               <div class="bg-light card text-center col-md-6 col-sm-12 mx-auto mb-2" id="card"> 
                  <div class="card-body">
                     <Form2 label="Valor Inicial:" texto="R$" id="vlInicial" style={{width:'50%'}}/>
                     <Form2 label="Aporte Mensal:" texto="R$" id="vlMes" style={{width:'50%'}}/>
                     <Form1 label="Tempo:" texto="Anos" id="tAnos" style={{width:'50%'}}/>
                     <div class="form-check form-check-inline">
                        <input class="form-check-input" id='juroAnual' type="radio" name="radioJuros" checked/>
                        <label class="form-check-label" for="juroAnual">Juros Anual</label>
                     </div>
                     <div class="form-check form-check-inline mx-auto">
                        <input class="form-check-input" id="juroMensal" type="radio" name="radioJuros"/>
                        <label class="form-check-label" for="juroMensal">Juros Mensal</label>
                     </div>
                     <Form1 id="juro" texto="%" label="Taxa de Juros:" style={{width:'50%'}}/>
                     <button onClick ={() => simularJurosCompostos()} class="btn btn-success align-self-end">Calcular</button>
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