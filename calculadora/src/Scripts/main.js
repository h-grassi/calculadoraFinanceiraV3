/* calculadoras*/
/*ConverteJuros*/
function efetuarConversao(operacao) {
  if (operacao === "1") {
    const juroAno = Number(document.querySelector('#tAno').value);
    const anoPdia = conversaoTaxas(juroAno, "A", "D");
    const anoPmes = conversaoTaxas(juroAno, "A", "M");

    const formataAnoPdia = "Juros diários: " + anoPdia.toFixed(4).replace('.', ',') + "%";
    const formataAnoPMes = "Juros Mensais: " + anoPmes.toFixed(3).replace('.', ',') + "%";

    addHTML("card1", "p", "operacao1", formataAnoPMes + "<br>" + formataAnoPdia);
  } else if (operacao === "2") {
    const juroMes = Number(document.querySelector('#tMes').value);
    const mesPano = conversaoTaxas(juroMes, "M", "A");
    const mesPdia = conversaoTaxas(juroMes, "M", "D");

    const formataMesPano = "Juros anuais: " + mesPano.toFixed(2).replace('.', ',') + "%";
    const formataMesPdia = "Juros diários: " + mesPdia.toFixed(4).replace('.', ',') + "%";

    addHTML("card2", "p", "operacao2", formataMesPano + "<br>" + formataMesPdia)
  } else {
    const juroDia = Number(document.querySelector('#tDia').value);
    const diaPano = conversaoTaxas(juroDia, "D", "A");
    const diaPMes = conversaoTaxas(juroDia, "D", "M");

    const formataDiaPAno = "Juros Anuais: " + diaPano.toFixed(2).replace('.', ',') + "%";
    const formataDiaPMes = "Juros mensais: " + diaPMes.toFixed(3).replace('.', ',') + "%";

    addHTML("card3", "p", "operacao3", formataDiaPAno + "<br>" + formataDiaPMes)
  }

}
/*simulador de juros compostos*/
function simularJurosCompostos() {
  const vlInicial = Number(document.getElementById("vlInicial").value);
  const vlMes = Number(document.getElementById("vlMes").value);
  const tMes = Number((document.getElementById("tAnos").value) * 12);
  const taxaJuros = Number((document.getElementById("juro").value));
  let parte1 = 0;
  let parte2 = 0;
  if (tMes === 0 || taxaJuros === 0) {
    const removeTag = document.getElementById("resultados");
    if(removeTag){
      removeTag.remove();
    }
    addHTML("card", "p", "erro", "Tempo e Taxa de Juros não podem estar em branco.");
  } else {
    if (document.getElementById("juroAnual").checked === true) {
      const conversaoTempo = (Math.pow((1 + taxaJuros / 100), (1 / 12)) - 1);
      parte1 = vlInicial * (Math.pow(1 + (taxaJuros / 100), tMes / 12));
      parte2 = vlMes * ((Math.pow((1 + conversaoTempo), tMes) - 1) / conversaoTempo);

    } else if (document.getElementById("juroMensal").checked === true) {
      parte1 = vlInicial * (Math.pow(1 + (taxaJuros / 100), tMes));
      parte2 = vlMes * ((Math.pow((1 + taxaJuros / 100), tMes) - 1) / (taxaJuros / 100));
    }
    const totalInvestido = vlInicial + (vlMes * tMes);
    const totalInvestidoFormat = totalInvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const rendimentoTotal = parte1 + parte2;
    const rendimentoTotalFormt = rendimentoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const totalJuros = rendimentoTotal - totalInvestido;
    const totalJurosFormt = totalJuros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    const removeTag = document.getElementById('erro');
    if (removeTag) {
      removeTag.remove();
    }
      addHTML("card", "div", "resultados",'')
      addHTML("resultados", "p", "totalInvest", "Valor aportado: <b>" + totalInvestidoFormat + "</b>")
      addHTML("resultados", "p", "totalFinal", "Valor final: <b>" + rendimentoTotalFormt + "</b>")
      addHTML("resultados", "p", "totalJuros", "Valor final de juros: <b>" + totalJurosFormt + "</b>")
  }
}

export { efetuarConversao, simularJurosCompostos };

/* funções genéricas, não são exportadas, apenas usadas neste arquivo*/
function conversaoTaxas(taxa, indexInicial, indexFinal) {
  /*index é o valor  do qual a taxa se refere,
  a inicial indica qual tipo de taxa do valor passado para a função
  a final indica qual o tipo de taxa será retornada da função
  "A" taxa anual
  "M" taxa mensal
  "D" taxa diária*/
  const vlTaxa = Number(taxa);
  const expoentes = {
    "A": { "M": 1 / 12, "D": 1 / 360 },
    "M": { "A": 12, "D": 1 / 30 },
    "D": { "A": 365, "M": 30 }
  };
  if (indexInicial === indexFinal) {
    return vlTaxa;
  }

  const expoente = expoentes[indexInicial][indexFinal];
  const conversaoJuro = (Math.pow((1 + vlTaxa / 100), expoente) - 1) * 100;
  return conversaoJuro;
}

function addHTML(idTagPai, tagFilho, idNome, tagConteudo) {
  const TagPai = document.getElementById(idTagPai);
  if(document.getElementById(idNome) != null){
    const removeTag = document.getElementById(idNome)
    removeTag.remove();
  }
  const novaTag = document.createElement(tagFilho);
  novaTag.id = idNome;
  TagPai.appendChild(novaTag);
  let adcionaConteudo = document.getElementById(idNome)
  adcionaConteudo.innerHTML = tagConteudo;
}