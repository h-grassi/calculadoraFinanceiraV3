/* calculadoras*/
/*ConverteJuros*/
function efetuarConversao(operacao){
  
  

  if(operacao ==="1"){
    const juroAno = Number((document.querySelector('#tAno').value));
    const card = document.getElementById("card1");
    const anoPdia =  conversaoTaxas(juroAno,"A","D");
    const anoPmes =  conversaoTaxas(juroAno,"A","M");

    const formataAnoPdia = "Juros diários: " + anoPdia.toFixed(2).replace('.',',') +"%";
    const formataAnoPMes = "Juros Mensais: " +anoPmes.toFixed(2).replace('.',',') +"%";

    addHTML(card, "p", "peracao1", formataAnoPMes + "<br>" + formataAnoPdia);
  }else if(operacao === "2"){
    const juroMes = Number((document.querySelector('#tMes').value));
    const card = document.getElementById("card2");

    const mesPano = conversaoTaxas(juroMes,"M","A");
    const mesPdia = conversaoTaxas(juroMes,"M","D");

    const formataMesPano = "Juros anuais: "+ mesPano.toFixed(2).replace('.',',') +"%";
    const formataMesPdia = "Juros diários: "+ mesPdia.toFixed(2).replace('.',',') +"%";

    addHTML(card,"p","operacao2", formataMesPano + "<br>" + formataMesPdia)
  }else{
    const juroDia = Number((document.querySelector('#tDia').value));
    const card = document.getElementById("card3");

    const diaPano = conversaoTaxas(juroDia,"D","A");
    const diaPMes = conversaoTaxas(juroDia,"D","M");

    const formataDiaPAno = "Juros Anuais: "+ diaPano.toFixed(2).replace('.',',') +"%";
    const formataDiaPMes = "Juros mensais: "+ diaPMes.toFixed(2).replace('.',',') +"%";

    addHTML(card, "p","operacao3", formataDiaPAno + "<br>"+ formataDiaPMes)
  }
  
}
export default efetuarConversao;

/* funções genéricas*/
function conversaoTaxas (taxa, indexInicial, indexFinal){
  /*index é o valor  do qual a taxa se refere,
  a inicial indica qual tipo de taxa do valor passado para a função
  a final indica qual o tipo de taxa será retornada da função
  "A" taxa anual
  "M" taxa mensal
  "D" taxa diária*/
  const vlTaxa = Number(taxa);
  const expoentes = {
    "A":{"M": 1/12, "D": 1/360},
    "M":{"A":12,"D":1/30},
    "D":{"A":365,"M": 30}
  };
  if(indexInicial === indexFinal){
    return vlTaxa;
  }

  const expoente = expoentes[indexInicial][indexFinal];
  const conversaoJuro = (Math.pow((1 + vlTaxa / 100), expoente) - 1) * 100;
  return conversaoJuro;
}

function addHTML(tagPai, tagFilho, idNome, tagConteudo){ 
  //tagPai necessecita de document.getelementByiD
  
  const novaTag = document.createElement(tagFilho);
  novaTag.id = idNome;
  tagPai.appendChild(novaTag);

  let adcionaConteudo = document.getElementById(idNome)
  adcionaConteudo.innerHTML = tagConteudo;

}