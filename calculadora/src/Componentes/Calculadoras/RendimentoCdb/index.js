import { Form1, Form2 } from "../../../Elementos/Formularios"
import { calculaRendimentoReal } from "../../../Scripts/main";

const rendimentoCdb = () => {
  return (
    <>
      <p className="lead">calculadora que simula rendimentos de real de um CDB pré-fixado.</p>

      <p>
        O diferencial dessa ferramenta é que a partir das datas informadas ela calcula o quanto de imposto de renda será pago
        e desconta essa valor do rendimento final, informando qual o rendimento real em valores e em percentual.
      </p>
      <h5>Preencha os campos e calcule:</h5>
      <div class="bg-light card text-center col-md-6 col-sm-12 mx-auto mb-2" id="card">
        <div class="card-body">
          <Form2 label="Valor do aporte:" texto="R$" id="vlInvestido" style={{ width: '50%' }} />
          <Form1 label="Taxa contratada:" texto="%" id="taxa" style={{ width: '50%' }} />
          <Form2 label="Data da aplicação:" type="date" id="dataInicial" style={{ width: '50%' }} />
          <Form2 label="Data do resgate:" type="date" id="dataFinal" style={{ width: '50%' }} />
          <button
            id='btnCalcular'
            onClick={() => calculaRendimentoReal()}
            class="btn btn-success align-self-end"> Calcular
          </button>
        </div>
      </div>
    </>
  )
}
export default rendimentoCdb;