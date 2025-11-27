/*
CRIAR UMA CALCULADORA DE IMC, ONDE O USUÁRIO DEVE PREENCHER SEU
PESO, ALTURA E NOME.

DEVERÁ MOSTRAR NO CONSOLE.LOG APENAS O IMC DO USUÁRIO


/////////////////// Exemplo de manipulação do DOM ///////////////////

// const titulo = document.querySelector('h1')

// const body = document.querySelector('body')

// console.log(titulo)

// titulo.innerText = 'Curso de Desenvolvimento JavaScript'

// const novoParagrafo = document.createElement('h2')

// novoParagrafo.innerText = 'Novo paragrafo criado no JS'

// body.append(novoParagrafo)

// novoParagrafo.style.color = 'red'

*/

// Criação de objeto paciente para armazenar os dados do usuário
const inputPaciente = {
  nome: document.querySelector("#nome"),
  sobrenome: document.querySelector("#sobrenome"),
  peso: document.querySelector("#peso"),
  altura: document.querySelector("#altura"),
};

const dados = {
  nome,
  sobrenome,
  peso,
  altura,
  imc: "",
};

// Seleção dos elementos do DOM / HTML
const body = document.querySelector("body");
const botao = document.querySelector("button");
const form = document.querySelector("form");

// paciente.imc = paciente.peso / paciente.altura ** 2;

// Função que dispara um alerta ao submeter / enviar o formulário
function capturarDados() {
  form.addEventListener("submit", (evento) => {
    // Evita o comportamento padrão do formulário de recarregar a página
    evento.preventDefault();

    /* Recebe os valores (.value) dos inputs de entrada do formulário 
      e salva dentro do objeto dados (const dados - ver linha 36 )
    */
    dados.nome = inputPaciente.nome.value;
    dados.sobrenome = inputPaciente.sobrenome.value;
    dados.peso = Number(inputPaciente.peso.value);
    dados.altura = Number(inputPaciente.altura.value);

    /* Dispara a função que irá calcular o IMC e envia dentro dela o 
   objeto const dados que contém todos os valores dos inputs digitados.
  */
    calcularIMC(dados);
  });
}

/*
Função para calcular o IMC. 
Ela recebe os valores de cálculo dentro do parenteses (entradaDados)
*/
function calcularIMC(entradaDados) {
  // Pega o valor da divisão de peso pelo quadrado da altura e salva em dados.imc
  dados.imc = entradaDados.peso / entradaDados.altura ** 2;

  // Com base no valor do dados.imc, faz a verificação da faixa de peso
  if (dados.imc < 18.5) {
    inserirResultado("abaixo do peso", dados.imc);
  } else if (dados.imc >= 18.5 && dados.imc < 24.9) {
    inserirResultado(
      `Paciente tem peso normal. IMC é de: ${dados.imc.toFixed(2)} `
    );
  } else if (dados.imc >= 24.9 && dados.imc < 29.9) {
    inserirResultado(
      `Paciente tem excesso de peso. IMC é de: ${dados.imc.toFixed(2)} `
    );
  } else if (dados.imc >= 29.9 && dados.imc < 34.9) {
    inserirResultado(
      `Paciente tem obesidade classe 1. IMC é de: ${dados.imc.toFixed(2)} `
    );
  } else if (dados.imc >= 34.9 && dados.imc < 39.9) {
    inserirResultado(
      `Paciente tem obesidade classe 2. IMC é de: ${dados.imc.toFixed(2)} `
    );
  } else {
    inserirResultado(
      `Paciente tem obesidade classe 3. IMC é de: ${dados.imc.toFixed(2)} `
    );
  }
}

function inserirResultado(faixa, resultado) {
  const paragrafo = document.querySelector("#paragrafo");

  paragrafo.innerText = "";

  paragrafo.innerText = `O paciente tem um IMC de: ${resultado}, e esta com ${faixa}`;
}

// Chamada da função para adicionar / iniciar o monitoramento do evento de submit ao formulário
capturarDados();

/*  Cálculo do IMC e exibição da categoria correspondente no console.log.
 Será preciso ajustar o cálculo do IMC para utilizar os valores corretos dos campos
  de peso e altura que serão digitados no formulário. */
