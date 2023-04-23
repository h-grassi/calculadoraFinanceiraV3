import Indice from "../../Elementos/Indice";

const RendaFixa = () => {
   const listaProps = [
      { href: "#introducao", label: "Introdução" },
      { href: "#indexadores", label: "Indexadores" },
      { href: "#fgc", label: "FGC" },
      { href: "#irIof", label: "IR e IOF" },
      { href: "#tesouro", label: "Tesouro Direto" },
      { href: "#cdb", label: "CDB" },
      { href: "#lci", label: "LCI" },
      { href: "#lca", label: "LCA" },
      { href: "#cri", label: "CRI" },
      { href: "#cra", label: "CRA" },
      { href: "#comparativo", label: "Comparativo" }
   ]
   return (
      <>
         <p className="lead">Todo investimento onde é possível calcular o quanto seu dinheiro terá rendido no dia do vencimento da aplicação.</p>
         <Indice props={listaProps} />
         <h3 id="introducao">Introdução</h3>
         <p className="text-start">Ponto de partida ideal para o investidor iniciante e para quem não gosta de tomar risco.
            Nesse tipo de investimento existe uma data de vencimento onde, <b>neste dia</b> você receberá exatamente o valor correspondente a taxa contratada,
            caso contrário seu ativo pode  sofrer marcação a mercado.
            Essa taxa de juros é na maioria dos casos <b>pré-fixada</b>, atrelada a <b>inflação</b> ou ao <b>CDI</b>.
         </p>
         <p className="text-start">
            Além da marcação a mercado existem outras duas forças que atuam sobre esses ativos, que são o <b>imposto de renda</b>, e o <b>Fundo Garantidor de Crédito</b>,
            ambos essênciais na hora de escolher onde e como insvestir. O primeiro impacta seu rendimento final e o segundo é um seguro para o caso de o orgão emissor quebrar você não perder o seu dinheiro.
         </p>
         <p className="text-start">
            Os principais ativos que compõe a classe de renda fixa são <b>Tesouro Direto, LCI, LCA, CRI e CRA</b>, entraremos nos detalhes de cada um mais tarde.
            Para explicações mais aprofundados sobre esses tópicos visita a página de <b>Artigos</b>.
         </p>
         <h3 id="indexadores">Indexadores</h3>
         <h6>Pré-fixado</h6>
         <p className="text-start">
            São taxas fixas, não variam nem estão atraladas a nenhum indice econômico e é possível calcular o valor final antes de contrata-las. Um CDB que paga 13% ao ano é um exemplo de pré-fixado.
         </p>
         <h6>SELIC</h6>
         <p className="text-start">
            A mais famosa de todas, é a taxa básica de juros que é definida pelo Banco Central. Esta taxa é o preço pelo qual o governo pega dinheiro emprestado.
            É o balizador da economia porque o Estado é o ente mais estável e poderoso do cenário econômico. Então empresas que queiram se financiar precisam aceitar pagar valores mais atrelados
            porque em 99% dos casos será mais seguro emprestar para o governo.
         </p>
         <p className="text-start">
            Tesouro SELIC paga está taxa mais um pequeno acréscimo de 0,1% ou 0,2%.
         </p>
         <h6>CDI</h6>
         <p className="text-start">
            É a taxa básica de empréstimos utilizadas pelos bancos para emprestarem dinheiro entre si com o objetivo de fechar o dia com saldo positivo.
            Essa taxa vale SELIC menos 0,1% e ativos atrelados a esta taxa normalmente pagam um prêmio de por exemplo CDI + 2%
         </p>
         <h6>IPCA+</h6>
         <p className="text-start"></p>
         <h3 id="fgc"> FGC, o que é?</h3>
         <p className="text-start">
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
                  <p className="text-start">
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
         <p className="text-start">Forma do governo se financiar via emissão de dívida, são os ativos mais seguros do mercado já que em caso de crise
            o Estado é a última instituição a quebrar. Por esse motivo todo mundo deveria começar no mundo dos investimentos por aqui.
         </p>
         <h4 id="cdb">CDB</h4>
         <p className="text-start">
            Certificado de Depósito Bancário, forma mais simples de explicar é dizendo que o jogo virou, dessa vez
            você que está emprestando dinheiro para o banco. Principal ponto para ficar atento é a data de vencimento do título para que você
            pague a menor alíquota de imposto de renda, as vezes uma taxa de 13% pode ter um rendimento líquido menor do que uma de  12% que tenha o prazo de vencimento mais esticado.
            Imposto de Renda é recolhido na fonte, no vencimento do CDB.
         </p>
         <p className="text-start">
            Tendem a ser títulos bem acessíveis para pequenos investidores, com valores mínimos de aporte de R$ 1000,00, R$ 5000,00 e dependendo da corretora você consegue encontrar valores mínimos de
            aporte de incríveis R$ 1,00. Essa última opção é otima pra você diversificar sua carteira sem ter muito dinheiro.
         </p>
         <h4 id="lci">LCI</h4>
         <p className="text-start">
            Letra de Crédito Imobiliário, emitidos por bancos e instituições financeiras tem o objetivo de captar recursos para projetos imobiliários.
            Não tem incidência de imposto de renda mas títulos devem constar na declaração. Geralmente só possui liquidez no vencimento e ao buscar por títulos verás que quanto maior o prazo de vencimento,
            maior será o prêmio (taxa) oferecido.
         </p>
         <p className="text-start">
            Outro ponto positivo é que possui cobertura do FGC, ou seja, o melhor dos dois mundos, já que seu dinheiro está segurado até 250 mil e você não paga IR.
            A contrapartida é que normalmente as taxas oferecidas são menores que as dos CDBs mas uma comparação justa leva em conta o desconto do IR nos CDBs, sendo assim
            rentabilidades tendem a ser, no geral, bem parecidas.
         </p>
         <h4 id="lca">LCA</h4>
         <p className="text-start">
            Letra de Crédito Agricola, exatamente as mesmas caracteristicas de um LCA porém o crédito é voltado para financiamento do setor rural do país.
            Dinheiro captado normalmente é utilizado para conceder empréstimos a produtores rurais, que por sua vez investem em insumos e maquinário.
            Dessa forma sua rentabilidade vem dos juros pagos por esses produtores ao bancos.
         </p>
         <h4 id="cri">CRI</h4>
         <p className="text-start">
            Certificado de Recebíveis Imobiliários, são como empréstimos, porém as empressas recorrem a securitizadoras para emiti-los.
         </p>
         <p className="text-start">
            Esses títulos estão lastreados em imóveis reais que normalmente servem como garatia em caso de não quitação das dívidas.
            O cenário onde as construtoras precisam destes túitulo é quando por exemplo, fazem uma venda a prazo e necessitam do dinheiro de imediato.
         </p>
         <p className="text-start">
            São operações mais arriscadas que não tem cobertura do FGC e se fosse procura diversificar nesse setor é recomendável estudar sobre fundos imobilirários de papéi,
            que são carteiras de CRIs vendidas na bolsa onde o cotista recebe rendimentos mensais liquidos de IR.
         </p>
         <h4 id="cra">CRA</h4>
         <p className="text-start">
            Certificado de Recebíveis Agricolas, semelhante aos CRIs porém vinculados ao agronegócio mas com as mesmas caracteristicas.
            São emitidos por securitizadoras, não tem incidência de IR e para diversificar sua carteira, em 2022 foram criados os FII AGOS, fundos de investimentos imobiliários
            que na maioria dos casos são compostos por CRAs.
         </p>
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
      </>
   )
}
export default RendaFixa;