import { Form1, Form2 } from "../../../Elementos/Formularios"
import { simularJurosCompostos } from "../../../Scripts/main.js"
const SimuladorJurosCompostos = () => {
   return (
      <>
         <h1>Simulador de Juros Compostos</h1>
         <p className="lead">calculadora que simula rendimentos de aplicações a longo prazo.</p>
         <p>Essa ferramenta tem o objetivo de mostrar o poder do longo prazo na ação dos juros compostos e como você pode
            se beneficiar disso.
         </p>
         <h5>Preencha os campos e calcule:</h5>
         <div class="bg-light card text-center col-md-6 col-sm-12 mx-auto mb-2" id="card">
            <div class="card-body">
               <Form2 label="Valor Inicial:" texto="R$" id="vlInicial" style={{ width: '50%' }} />
               <Form2 label="Aporte Mensal:" texto="R$" id="vlMes" style={{ width: '50%' }} />
               <Form1 label="Tempo:" texto="Anos" id="tAnos" style={{ width: '50%' }} />
               <div class="form-check form-check-inline">
                  <input class="form-check-input" id='juroAnual' type="radio" name="radioJuros" checked />
                  <label class="form-check-label" for="juroAnual">Juros Anual</label>
               </div>
               <div class="form-check form-check-inline mx-auto">
                  <input class="form-check-input" id="juroMensal" type="radio" name="radioJuros" />
                  <label class="form-check-label" for="juroMensal">Juros Mensal</label>
               </div>
               <Form1 id="juro" texto="%" label="Taxa de Juros:" style={{ width: '50%' }} />
               <button
                  id='btnCalcular'
                  onClick={() => simularJurosCompostos()}
                  class="btn btn-success align-self-end"> Calcular</button>
            </div>
         </div>
         <p>Essa simulação mostra que investir R$ 300,00 não vai mudar sua vida, mas que investir esse valor regularmente muda completamente.
            Não só financeiramente, mas na forma de ver a vida, te motiva a trabalhar para ganhar mais para investir mais e mais rápido viver de renda.
         </p>
         <p>
            Mas mais importante que isso, te ensina que as melhores coisas da vida se conquista a longo prazo.
         </p>
      </>
   );
}
export default SimuladorJurosCompostos;