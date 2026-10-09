"use strict";

console.log("BLOCO 1 - FUNDAMENTOS E VARIÁVEIS");

console.log("\n1.1 Variável com let");
let pontos = 50;
pontos += 10;
console.log(`Pontos: ${pontos}`);

console.log("\n1.2 Constante com const");
const MAX_PONTOS = 100;
console.log(`MAX_PONTOS = ${MAX_PONTOS}`);

try {
  MAX_PONTOS = 200;
} catch (erro) {
  console.log(`Erro capturado: ${erro.name} -> ${erro.message}`);
  console.log(
    "Motivo: uma constante (const) só recebe valor uma vez. " +
      "Depois disso, o JavaScript não deixa trocar o valor guardado nela."
  );
}
console.log(`MAX_PONTOS continua valendo ${MAX_PONTOS}`);

console.log("\n1.3 Tipos primitivos");
const texto = "JavaScript";
const numero = 42;
const verdadeiro = true;
let indefinida;
const nulo = null;

console.log(`texto      = ${texto} -> typeof: ${typeof texto}`);
console.log(`numero     = ${numero} -> typeof: ${typeof numero}`);
console.log(`verdadeiro = ${verdadeiro} -> typeof: ${typeof verdadeiro}`);
console.log(`indefinida = ${indefinida} -> typeof: ${typeof indefinida}`);
console.log(`nulo       = ${nulo} -> typeof: ${typeof nulo}`);
console.log(
  "Obs: typeof null retorna 'object'. É um bug antigo da linguagem, " +
    "mantido por compatibilidade. null é, na verdade, um valor primitivo."
);

console.log("\n1.4 Template Literals x Concatenação");
const nomeAluno = "Ana";
const idadeAluno = 20;

const comTemplate = `Olá, meu nome é ${nomeAluno} e tenho ${idadeAluno} anos.`;
const comConcatenacao =
  "Olá, meu nome é " + nomeAluno + " e tenho " + idadeAluno + " anos.";

console.log(`Template literal: ${comTemplate}`);
console.log(`Concatenação    : ${comConcatenacao}`);
console.log(`As frases são iguais? ${comTemplate === comConcatenacao}`);

console.log("\nBLOCO 2 - FUNÇÕES");

console.log("\n2.1 Função declarada (hoisting)");
console.log(`ehMaiorDeIdade(20), chamada antes da declaração: ${ehMaiorDeIdade(20)}`);

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

console.log(`ehMaiorDeIdade(15): ${ehMaiorDeIdade(15)}`);
console.log(`ehMaiorDeIdade(18): ${ehMaiorDeIdade(18)}`);

console.log("\n2.2 Função de expressão");
try {
  ehMaiorDeIdadeExpressao(20);
} catch (erro) {
  console.log(`Erro capturado: ${erro.name} -> ${erro.message}`);
  console.log(
    "Motivo: a variável const existe, mas só recebe a função quando a linha " +
      "da declaração é executada. Antes disso ela não pode ser acessada."
  );
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

console.log(`Depois da declaração, ehMaiorDeIdadeExpressao(20): ${ehMaiorDeIdadeExpressao(20)}`);

console.log("\n2.3 Função dobro em três formas");

function dobroDeclarada(n) {
  return n * 2;
}

const dobroExpressao = function (n) {
  return n * 2;
};

const dobroArrow = (n) => n * 2;

console.log(`dobroDeclarada(7): ${dobroDeclarada(7)}`);
console.log(`dobroExpressao(7): ${dobroExpressao(7)}`);
console.log(`dobroArrow(7)    : ${dobroArrow(7)}`);

console.log("\n2.4 Parâmetro com valor padrão");
const dobroComPadrao = (n = 1) => n * 2;

console.log(`dobroArrow() sem argumento (sem padrão): ${dobroArrow()}`);
console.log(`dobroComPadrao() sem argumento (n = 1) : ${dobroComPadrao()}`);
console.log(`dobroComPadrao(5)                      : ${dobroComPadrao(5)}`);
console.log(
  "Sem valor padrão, n fica undefined e undefined * 2 vira NaN. " +
    "Com n = 1, a função usa 1 quando ninguém passa argumento."
);

console.log("\nBLOCO 3 - CONTROLE DE FLUXO");

console.log("\n3.1 classificarNota (if/else)");

function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

for (const nota of [10, 6, 5.9, 0]) {
  console.log(`Nota ${nota}: ${classificarNota(nota)}`);
}

console.log("\n3.2 Semáforo (switch)");

function imprimirSemaforo(cor) {
  switch (cor) {
    case "vermelho":
      console.log("Pare");
      break;
    case "amarelo":
      console.log("Atenção");
      break;
    case "verde":
      console.log("Siga");
      break;
    default:
      console.log("Cor inválida");
  }
}

let corSemaforo = "vermelho";
console.log(`corSemaforo = "${corSemaforo}"`);
imprimirSemaforo(corSemaforo);

corSemaforo = "amarelo";
console.log(`corSemaforo = "${corSemaforo}"`);
imprimirSemaforo(corSemaforo);

corSemaforo = "verde";
console.log(`corSemaforo = "${corSemaforo}"`);
imprimirSemaforo(corSemaforo);

corSemaforo = "roxo";
console.log(`corSemaforo = "${corSemaforo}"`);
imprimirSemaforo(corSemaforo);

console.log("\n3.3 Tabuada do 5 (for)");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n3.4 Contagem regressiva (while)");
let contagem = 5;
while (contagem >= 1) {
  console.log(contagem);
  contagem--;
}
console.log("Fim da contagem!");

console.log("\n3.5 Par ou ímpar com for");
for (let n = 1; n <= 20; n++) {
  const tipo = n % 2 === 0 ? "par" : "ímpar";
  console.log(`${n} é ${tipo}`);
}

console.log("\n3.5 Par ou ímpar com while");
let m = 1;
while (m <= 20) {
  const tipo = m % 2 === 0 ? "par" : "ímpar";
  console.log(`${m} é ${tipo}`);
  m++;
}

console.log("\n3.6 diaDaSemana (switch com default)");

function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Número inválido (use de 1 a 7)";
  }
}

for (const numero of [1, 2, 3, 4, 5, 6, 7, 0, 8, 15]) {
  console.log(`diaDaSemana(${numero}): ${diaDaSemana(numero)}`);
}

console.log("\nTodos os blocos foram executados sem erros não tratados.");