import { Form1, Form2 } from "../../../Elementos/Formularios"
import { calculaRendimentoReal } from "../../../Scripts/main";

const rendimentoCdb = () => {
  return (
    <>
      <h1>CDB Rendimento Real</h1>
      <p className="lead">calculadora que simula rendimentos de real de um CDB pré-fixado.</p>

      <p>
        O diferencial dessa ferramenta é que a partir das datas informadas ela calcula o quanto de imposto de renda será pago no vencimento
        desconta esse valor do rendimento final, informando qual o rendimento real em valores e em percentual.
      </p>
      <h5>Preencha os campos e calcule:</h5>
      <div class="bg-light card text-center col-md-6 col-sm-12 mx-auto mb-2" id="card">
        <div class="card-body">
          <Form2 label="Valor do aporte:" texto="R$" id="vlInvestido" style={{ width: '50%' }} disable='true' />
          <Form1 label="Taxa contratada:" texto="%" id="taxa" style={{ width: '50%' }} />
          <Form2 label="Data da aplicação:" type="date" id="dataInicial" style={{ width: '50%' }} />
          <Form2 label="Data do resgate:" type="date" id="dataFinal" style={{ width: '50%' }} />
          <button
            id='btnCalcular'
            onClick={() => calculaRendimentoReal()}
            class="btn  btn-secondary align-self-end"
            disabled
          > Calcular
          </button><br></br>
          Página em manutenção
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <h5> Tabela Regressiva do IR</h5>
          <table className="table table-striped table-bordered mx-auto table-sm" >
            <thead>
              <tr>
                <th >Tempo aplicado</th>
                <th>Alíquota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Até 180 dias</th>
                <th>22,5%</th>
              </tr>
              <tr>
                <th>de 180 até 360 dias</th>
                <th>20%</th>
              </tr>
              <tr>
                <th>de 361 até 720 dias</th>
                <th>17,5%</th>
              </tr>
              <tr>
                <th>721 dias ou mais</th>
                <th>15%</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default rendimentoCdb;