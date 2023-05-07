import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* home*/
/*cotacoes*/
function Cotacoes() {
  const [cotacoes, setCotacoes] = useState([]);

  useEffect(() => {
    async function fetchCotacoes() {
      const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-USD');
      setCotacoes(response.data);
    }

    const interval = setInterval(fetchCotacoes, 5000);
    fetchCotacoes();

    return () => clearInterval(interval);
  }, []);

  const bitcoin = Number(cotacoes.BTCUSD?.ask).toLocaleString('en-EN', { style: 'currency', currency: 'USD' });
  const dolar = Number(cotacoes.USDBRL?.bid).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  const euro = Number(cotacoes.EURBRL?.bid).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const dataBTCUSD = (new Date(cotacoes.BTCUSD?.create_date)).toLocaleString();
  const dataUSDBRL = (new Date(cotacoes.USDBRL?.create_date)).toLocaleString();
  const dataEURBRL = (new Date(cotacoes.EURBRL?.create_date)).toLocaleString();
  return {
    bitcoin: bitcoin, dataBTCUSD,
    dolar: dolar, dataUSDBRL: dataUSDBRL,
    euro: euro, dataEURBRL: dataEURBRL
  };
}

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
    if (removeTag) {
      removeTag.remove();
    }
    addHTML("card", "p", "erro", "Tempo e Taxa de Juros não podem estar em branco.");

  } else {
    if (document.getElementById("juroAnual").checked === true) {
      const conversaoTempo = (Math.pow((1 + taxaJuros / 100), (1 / 12)) - 1);
      parte1 = calcJuroComposto(vlInicial, taxaJuros, tMes / 12);
      parte2 = vlMes * ((Math.pow((1 + conversaoTempo), tMes) - 1) / conversaoTempo);

    } else if (document.getElementById("juroMensal").checked === true) {
      parte1 = calcJuroComposto(vlInicial, taxaJuros, tMes);
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
    addHTML("card", "div", "resultados", '')
    addHTML("resultados", "p", "totalInvest", "Valor aportado: <b>" + totalInvestidoFormat + "</b>")
    addHTML("resultados", "p", "totalFinal", "Valor final: <b>" + rendimentoTotalFormt + "</b>")
    addHTML("resultados", "p", "totalJuros", "Valor final de juros: <b>" + totalJurosFormt + "</b>")
  }
}

/*Calcula CDB*///revisar, comtêm erros
function calculaRendimentoReal() {

  const VlInvestido = Number(document.getElementById("vlInvestido").value)
  const vlTaxa = document.getElementById("taxa").value

  const pegaDataInicial = document.getElementById("dataInicial").value;
  const pegaDataFinal = document.getElementById("dataFinal").value;

  if (pegaDataInicial == 0 || pegaDataFinal == 0 || VlInvestido == 0 || vlTaxa == 0) {
    alert("preencha os campos!");
    return 0;
  } else {

    const dias = calculaDias(pegaDataInicial, pegaDataFinal);
    let taxaDia = conversaoTaxas(vlTaxa, "A", "D")
    const taxaFinal = dias.qtdDiasUteis * taxaDia//exibir na tela
    const tabelaIR = [22.5 / 100, 20 / 100, 17.5 / 100, 15 / 100]
    let i;
    switch (true) {
      case (dias.totalDiasAplicacao <= 180):
        i = 0;
        break;
      case (dias.totalDiasAplicacao <= 360):
        i = 1;
        break;
      case (dias.totalDiasAplicacao <= 720):
        i = 2;
        break;
      default:
        i = 3;
        break;
    }
    //
    const rendimentoBruto = VlInvestido * (Math.pow(1 + (taxaDia / 100), dias.qtdDiasUteis));
    console.log(Math.pow(1 + taxaDia, dias.qtdDiasUteis));
    const rendimentoLiquido = VlInvestido + (((VlInvestido * taxaFinal) / 100) * (1 - tabelaIR[i]))
    console.log("rendimento Bruto: ", rendimentoBruto)
    addHTML("card", "p", "bruto", "Rendimento bruto: <b>" + rendimentoBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "</b>")
    console.log("dias totais:", dias.totalDiasAplicacao)
    console.log("dias uteis:", dias.qtdDiasUteis);
    console.log("rendimento bruto por dia:%", taxaDia)
    console.log("tabela IR:", tabelaIR[i])
    console.log("rendimento Liquido", rendimentoLiquido)
  }
}

/* comparar rentabilidades */
function comparaRent() {
  const vlAporte = Number(document.getElementById("vlAporte").value)
  const tempo = Number(document.getElementById("tAnos").value)
  let removeTag1 = document.getElementById("resultados");
  let removeTag2 = document.getElementById("erro");

  if (vlAporte === 0 || tempo === 0) {
    if (removeTag1) {
      removeTag1.remove();
    }
    addHTML("card", "p", "erro", "Valor e tempo não podem estar em branco");

  } else {
    //primeira taxa
    const juro1 = Number((document.getElementById("juro1").value));
    const juro2 = Number((document.getElementById("juro2").value));
    let rendimento1;
    let rendimento2;
    if (document.getElementById("txAnual1").checked === true) {
      rendimento1 = calcJuroComposto(vlAporte, juro1, tempo)
    } else {
      const converteJuro = conversaoTaxas(juro1, 'M', 'A')
      rendimento2 = calcJuroComposto(vlAporte, converteJuro, tempo)
    }
    //segunda taxa
    if (document.getElementById("txAnual2").checked === true) {
      rendimento2 = calcJuroComposto(vlAporte, juro2, tempo)
    } else {
      const converteJuro = conversaoTaxas(juro2, 'M', 'A')
      rendimento2 = calcJuroComposto(vlAporte, converteJuro, tempo)
    }
    const rendFormat1 = rendimento1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const rendFormat2 = rendimento2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const vlDiferenca = (Math.abs(rendimento1 - rendimento2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log(rendFormat1, rendFormat2);
    console.log(vlDiferenca)
    if (removeTag2) {
      removeTag2.remove();
    }
    addHTML("card", "div", "resultados", '')
    addHTML("resultados", "p", "rend1", "Rendimento do primeiro caso: <b>" + rendFormat1 + "</b>")
    addHTML("resultados", "p", "rend2", "Rendimento do segundo caso: <b>" + rendFormat2 + "</b>")
    addHTML("resultados", "p", "dif", "Diferença de <b>" + vlDiferenca + "</b>")
  }
}

export { efetuarConversao, simularJurosCompostos, calculaRendimentoReal, Cotacoes, comparaRent };



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

function calcJuroComposto(valor, juro, tempo) {
  const resultado = valor * (Math.pow(1 + (juro / 100), tempo));
  return resultado;
}

function addHTML(idTagPai, tagFilho, idNome, tagConteudo) {
  const TagPai = document.getElementById(idTagPai);
  if (document.getElementById(idNome) != null) {
    const removeTag = document.getElementById(idNome)
    removeTag.remove();
  }
  const novaTag = document.createElement(tagFilho);
  novaTag.id = idNome;
  TagPai.appendChild(novaTag);
  let adcionaConteudo = document.getElementById(idNome)
  adcionaConteudo.innerHTML = tagConteudo;
}

function calculaDias(pegaDataInicial, pegaDataFinal) {
  //a partir de duas datas retorna os dias úteis e dias totais, 
  //função precisa ser melhorada
  //utilizada para calcular rendimento real do cdb
  let arrayInicial = pegaDataInicial.split("-"); //separa dia mês e ano 
  let arrayFinal = pegaDataFinal.split("-");
  //transforma em data e corrige mês
  const dataInicial = new Date(arrayInicial[0], (arrayInicial[1] - 1), arrayInicial[2])
  const dataFinal = new Date(arrayFinal[0], (arrayFinal[1] - 1), arrayFinal[2])
  if (dataInicial >= dataFinal) {
    alert("Erro! Data final precisa ser maior que a inicial")
    return 0;
  } else {
    const anoInicial = dataInicial.getFullYear()
    const anoFinal = dataFinal.getFullYear()
    let anos = [...Array(anoFinal - anoInicial + 1).keys()].map(i => i + anoInicial)
    let resultado = [];
    let feriados = [[0, 1], [3, 21], [4, 1], [8, 7], [9, 12], [10, 2], [10, 15], [11, 25]]

    for (let x = 0; x < anos.length; x++) {
      for (let i = 0; i < feriados.length; i++) {
        let ano = anos[x];
        let mes = feriados[i][0];
        let dia = feriados[i][1];
        resultado.push(new Date(ano, mes, dia));
      }
    }
    const listaFeriados = resultado.map(date => date.toLocaleDateString())
    let dias = [];
    let diaSemana = [];
    let totalDiasAplicacao = (dataFinal - dataInicial) / (1000 * 60 * 60 * 24); //usado posteriormente para calcular a tabela regressiva do IR
    let x;
    for (x = 0; x <= totalDiasAplicacao - 1; x++) {
      dias.push(new Date(dataInicial.setDate(dataInicial.getDate() + 1)));
      diaSemana.push(dias[x].getDay());
    }
    let listaTotalDias = dias.map(date => date.toLocaleDateString())
    const listaFinalSemana = []
    for (x = 0; x < listaTotalDias.length; x++) {
      if (diaSemana[x] === 0 || diaSemana[x] === 6) {
        listaFinalSemana.push(listaTotalDias[x])
      }
    }
    listaTotalDias = listaTotalDias.filter(item => !listaFinalSemana.includes(item))// retira os finais de semana da lista
    const listaDiasUteis = listaTotalDias.filter(item => !listaFeriados.includes(item))//retira feriados fixos
    const qtdDiasUteis = listaDiasUteis.length
    return { qtdDiasUteis, totalDiasAplicacao };
  }

}