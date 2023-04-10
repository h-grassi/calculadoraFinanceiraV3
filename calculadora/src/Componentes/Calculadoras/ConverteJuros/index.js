import {Form1} from "../../../Elementos/Formularios";
import {efetuarConversao} from  "../../../Scripts/main.js"
const ConverteJuros = () =>{
   return (
   <>
      <h3>Conversor de Juros</h3>
      <p className="lead">calculadora que transforma a taxa de juros com o período de tempo desejado.</p>
      <div className="text-center">
         <div className="row">
            <div className="col-sm border">
               <p>coluna</p>
            </div>
            <div className="col-md-9 col-sm-12">
               <p>Útil para comparar rentabilidade entre ativos e ter uma noção real do quão abusivos são os juros de cartão de crédito por exemplo.</p>
               <h5>Preencha os campos e calcule:</h5>
               
               <div class="row m-2 mx-auto justify-content-center">
                  <div class="col-sm-3 mb-3">
                     <div class="card w-100 h-100 bg-light">
                        <div class="card-body" id="card1">
                           <h5 class="card-title">Taxa Anual</h5>
                           <Form1 id="tAno" texto="%" label="Juros de:"/>
                           <button onClick={()=>efetuarConversao("1")} class="btn btn-success btn-sm align-self-end">Converter</button>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3 mb-3">
                     <div class="card w-100 h-100 bg-light">
                        <div class="card-body" id="card2">
                           <h5 class="card-title">Taxa Mensal</h5>
                           <Form1 id="tMes" texto="%" label="Juros de:"/>
                           <button onClick={()=>efetuarConversao("2")} class="btn btn-success btn-sm align-self-end">Converter</button>
                        </div>
                     </div>
                  </div>
                  <div class=" col-sm-3 mb-3">
                     <div class="card w-100 h-100 bg-light">
                        <div class="card-body" id="card3">
                           <h5 class="card-title">Taxa Diária</h5>
                           <Form1 id="tDia" texto="%" label="Juros de:"/>
                           <button onClick={()=>efetuarConversao("3")} class="btn btn-success btn-sm align-self-end">Converter</button>
                        </div>
                     </div>
                  </div>
               </div>
               <p>Dica para quando for converter a partir de juros diários é utilizar mais de duas casas decimais para a conversão fazer sentido e ficar mais próxima da realidade.</p>
               <h3>Como este cálculo é realizado:</h3>
               <p>(((1+ taxa/100) ^ tempo)- 1)X 100</p>
               <p>Onde a taxa é valor digitado por você e o tempo é a equivalencia de mês para ano.
                  Neste caso temos que um ano é 12 vezes maior que um mês, portando o expoente será 1/12 
                  para transformar a taxa anual para mensal.
               </p>
               <p>Para ver o poder dos juros compostos aplicado sobre valores acesse nossas outras calculadoras</p>
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