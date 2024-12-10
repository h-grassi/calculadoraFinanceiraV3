import graficoazul from '../../../../assets/Artigos/graficoazul.jpg'
import Indice from '../../../../Elementos/Indice';

const Ibovespa = () => {
  const listaProps = [
    { href: "#vs", label: "Bovespa Vs Ibovespa" },
    { href: "#bovespa", label: "Bovespa" },
    { href: "#ibovespa", label: "Ibovespa" },
    { href: "#formIndice", label: "Como o Índice é formado" }
  ]
  return (
    <>
      <div className="container-fluid p-5 m-0 text-white text-center"
        style={{ backgroundImage: `url(${graficoazul})`, backgroundSize: '100%', backgroundPosition: 'center' }}>
        <h1>IBOVESPA <strong>[B]³</strong></h1>
        <h3>O que é, o que representa e como funciona o maior indice da bolsa brasileira.</h3>
      </div>
      <Indice props={listaProps} />
      <p className="text-body-secondarylead">Para encontrar as informações completas e detalhadas sugiro da uma olhada também no site institucional da B3 &nbsp;
      <a href="https://www.b3.com.br/pt_br/b3/institucional/quem-somos/" target="_blank">aqui</a>.</p>
      <h5 id="vs">Bovespa Vs Ibovespa</h5>
      <p className="text-start">Para começar é importante difenciar o significado de Bovespa para Ibovespa. o primeiro é o nome da empresa, 
      também conhecida como B3, que é a bolsa de valores brasileira, o segundo é o indice que representa uma carteira teórica de ativos usada para resumir o cenário atual do mercado.</p>
      <h5 id="bovespa">[B]³</h5>
      <p className="text-start">É a união entre três empresas, BM&F,  Bovespa Holding e CETIP.</p>
      <h5 id="ibovespa">Indice Ibovespa</h5>
      <p className="text-start">É uma carteira teórica de ações e units (união entre ações ordinarias e preferênciais), que tem o objetivo de representar o desempenho médio
      do mercado brasieleiro, comportando os ativos mais negociados em proporção a sua representatividade. Seus critérios são:</p>
      <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-8 text-left">
                  <ul>
                     <li>Estar presente em 95% dos pregões;</li>
                     <li>Ter volume de no mínimo 0,1% das negociações do mercado a vista</li>
                     <li>Não ser Penny Stock (valor unitário da ação maior que R$ 1,00)</li>
                     <li>Não são incluídos ao índice BDRs e Fundos Imobiliários, estes tem índices próprios</li>
                  </ul>
                  Documentação completa do índice você encontra <a href="https://www.b3.com.br/data/files/9C/15/76/F6/3F6947102255C247AC094EA8/IBOV-Metodologia-pt-br__Novo_.pdf">aqui.</a>
               </div>
            </div>
         </div>
      <p className="text-start">[B]³</p>
      <p className="text-start">aaaah</p>
      <p className="text-start">aaaah</p>
      <p className="text-start">aaaah</p>
    </>
  )
}
export default Ibovespa;