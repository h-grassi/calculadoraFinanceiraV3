import LinkLista from "../../Elementos/LinkLista";

const RendaFixa = () => {
   const listaProps=[
      {href:"#introducao", label:"Introdução"},
      {href:"#fgc", label:"FGC"},
      {href:"#irIof", label:"IR e IOF"},
      {href:"#tesouro", label:"Tesouro Direto"},
      {href:"#cdb", label:"CDB"},
      {href:"#lci", label:"LCI"},
      {href:"#lca", label:"LCA"},
      {href:"#cri", label:"CRI"},
      {href:"#cra", label:"CRA"},
      {href:"#comparativo", label:"Comparativo"}
   ]
   return (
      <>
         <h1 className="m-4 text-center">Renda Fixa</h1>
         <p className="lead">Todo investimento onde é possível calcular o quanto seu dinheiro terá rendido no dia do vencimento da aplicação.</p>

         <div className="text-center">
            <div className="row">
               <div className="col-sm border">
                  <p>coluna</p>
               </div>
               <div className="col-md-9 col-sm-12">
                  <LinkLista props={listaProps}/>
                  <h3 id="introducao">Introdução</h3>
                  <p>Ponto de partida ideal para o investidor iniciante e para quem não gosta de tomar risco.
                     Nesse tipo de investimento existe uma data de vencimento onde, <b>neste dia</b> você receberá exatamente o valor correspondente a taxa contratada,
                     caso contrário seu ativo pode  sofrer marcação a mercado.
                     Essa taxa de juros é na maioria dos casos <b>pré-fixada</b>, atrelada a <b>inflação</b> ou ao <b>CDI</b>. 
                  </p>
                  <p>
                     Além da marcação a mercado existem outras duas forças que atuam sobre esses ativos, que são o <b>imposto de renda</b>, e o <b>Fundo Garantidor de Crédito</b>,
                     ambos essênciais na hora de escolher onde e como insvestir. O primeiro impacta seu rendimento final e o segundo é um seguro para o caso de o orgão emissor quebrar você não perder o seu dinheiro.
                  </p>
                  <p>
                     Os principais ativos que compõe a classe de renda fixa são <b>Tesouro Direto, LCI, LCA, CRI e CRA</b>, entraremos nos detalhes de cada um mais tarde.
                  </p>
                  <h3 id="fgc"> FGC, o que é?</h3>
                  <p>
                     Fundo Garantidor de Crédito, criado na década de 90, funciona como um seguro para o caso de falência do orgão emissor do titúlo. Caso seu investimento esteja de baixo do guarda-chuva do órgão você pode solicitar
                     seu dinheiro de volta. O ressarcimento ocorre da seguinte forma: 
                  </p>
                  <div class="container">
                     <div class="row justify-content-center">
                        <div class="col-lg-8 text-left">
                           <ul>
                              <li>Até 250.000,00 por CFP ou CNPJ, para cada ressarcimento;</li>
                              <li>Total segurado de até 1 milhão por CFP/CNPJ, 250 mil por instituição financeira;</li>
                              <li>Regras se aplicam no para o prazo de 4 anos após a intervenção do FGC.</li>
                              <li>Brasileiros que moram no exterior podem utilizar o fundo desde 2017.</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <h3 id="irIof">Imposto de renda e IOF</h3>
                  
                  <div class="container">
                     <div class="row justify-content-center">
                        <div class="col-lg-4">
                           <p>
                               São os dois tributos que incidem sobre os investimentos de renda fixa, porém apenas sobre o rendimento.
                               O IOF é zerado após 30 dias da aplicação (não faz sentido investir por menos que esse tempo), já o IR segue esta <b>tabela regressiva:</b>
                           </p>
                        </div>
                        <div class="col-lg-4">
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
                  </div>
                  <h3>Principais Ativos:</h3>
                  <h4 id="tesouro">Tesouro Direto</h4>
                  <p>Forma do governo se financiar via emissão de dívida, são os ativos mais seguros do mercado já que em caso de crise
                     o Estado é a última instituição a quebrar. Por esse motivo todo mundo deveria começar no mundo dos investimentos por aqui.
                  </p>
                  <h4 id="cdb">CDB</h4>
                  <p>
                     Certificado de Depósito Bancário, forma mais simples de explicar é dizendo que o jogo virou, dessa vez
                     você que está emprestando dinheiro para o banco.
                  </p>
                  <h4 id="lci">LCI</h4>
                  <h4 id="lca">LCA</h4>
                  <h4 id="cri">CRI</h4>
                  <h4 id="cra">CRA</h4>
                  <p>cita os ativos e breve explicação.</p>
                  <h3 id="comparativo">Comparativo</h3>
                  <div class="container">
                     <div class="row justify-content-center">
                        <div class="col-lg-4">
                           <table className="table table-striped table-bordered">
                              <thead>
                                 <tr>
                                    <th>Ativo</th>
                                    <th>FGC</th>
                                    <th>IR</th>
                                 </tr>
                              </thead>
                              <tbody className="table-group-divider">
                                 <tr>
                                    <th>CDB</th>
                                    <th>X</th>
                                    <th>X</th>
                                 </tr>
                                 <tr>
                                    <th>Tesouro</th>
                                    <th>X</th>
                                    <th>X</th>
                                 </tr>
                                 <tr>
                                    <th>LCI</th>
                                    <th>X</th>
                                    <th>-</th>
                                 </tr>
                                 <tr>
                                    <th>LCA</th>
                                    <th>X</th>
                                    <th>-</th>
                                 </tr>
                                 <tr>
                                    <th>CRI</th>
                                    <th>-</th>
                                    <th>-</th>
                                 </tr>
                                 <tr>
                                    <th>CRA</th>
                                    <th>-</th>
                                    <th>-</th>
                                 </tr>
                              </tbody>
                           </table>
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
export default RendaFixa;