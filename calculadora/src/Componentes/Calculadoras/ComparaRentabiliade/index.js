import { Form1, Form2 } from "../../../Elementos/Formularios"
import { comparaRent } from "../../../Scripts/main";

const ComparaRentabilidade = () => {
  return (
    <>
      <h1>Comparar Rentabilidades</h1>
      <p className="lead">Ferramenta que exibe a diferença de valores ao se investir em diferentes taxas de juros.</p>
      <p>Esse cálculo mostra que no longo prazo, pequenas diferenças percentuais podem resultar em rentabiliades totalmente diefentes.</p>
      <h5>Preencha os campos e calcule:</h5>
      <div class="bg-light card text-center col-md-6 col-sm-12 mx-auto mb-2" id="card">
        <div class="card-body">
          <div className="row mb-1">
            <div className="col m-0">
              <Form2 label="Valor do aporte:" texto="R$" id="vlAporte" />
            </div>
            <div className="col m-0">
              <Form1 label="Tempo:" texto="Anos" id="tAnos" />
            </div>
          </div>
          <Form1
            id="juro1"
            texto={
              <div class="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="taxa1" id="txAnual1" checked />
                <label class="btn btn-outline-success" for="txAnual1">Anual</label>

                <input type="radio" class="btn-check" name="taxa1" id="txMensal1" />
                <label class="btn btn-outline-success" for="txMensal1">Mensal</label>
              </div>
            }
            className='p-0 '
            label="Primeira Taxa: %"
            style={{ width: '70%' }}
          />
          <Form1
            id="juro2"
            texto={
              <div class="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="taxa2" id="txAnual2" checked />
                <label class="btn btn-outline-success" for="txAnual2">Anual</label>

                <input type="radio" class="btn-check" name="taxa2" id="txMensal2" />
                <label class="btn btn-outline-success" for="txMensal2">Mensal</label>
              </div>
            }
            className='p-0 '
            label="Segunda Taxa: %"
            style={{ width: '70%' }}
          />
          <button
            id='btnCalcular'
            class="btn btn-success align-self-end mt-3"
            onClick={() => comparaRent()}
          > Comparar</button>
        </div>
      </div>
      <p>
        As simulações feitas aqui são úteis na hora de investir e julgar se vale a pena ou não comprar um ativo mais arriscado que paga melhor,
        ou se fica com uma aplicação mais estável que paga um prêmio menor.
        A depender do resultado, talves a diferença não seja significativa a ponto de ser vantajoso abrir mão de segurança.
      </p>
      <p>
        Outro utilidade é na hora de parcelar compras, fazer financiamentos, adquirir consórcios, etc..
      </p>
    </>
  )
}
export default ComparaRentabilidade;