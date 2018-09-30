// idade for maior do que 21 anos e for menor que 50
// o valor do emprestimo deve ser de no máximo até 5 vezes o salário

// let nome = prompt("Qual é o seu nome?");
// let idade = prompt("Olá " + nome + ", me conte também a sua idade?");
// let salario = prompt ("Quanto você ganha?");
// salario = Number (salario);
// let emprestimo = prompt ("Qual o valor que você precisa?");
// let signo = prompt ("Mas qual é o seu signo?")
// if (salario !== Number){
//     alert ("valor errado")
// }

// else if (signo == "aries") {}

// if ((idade>21 && idade<55) && (emprestimo<5*salario)) {
//     alert("emprestimo aprovado");
// } 
// else {
//     alert ("emprestimo não aprovado");
// }

// alert("Olá, vamos jogar um jogo!");
// alert("Você deve responder 5 perguntinhas fáceis, com 'S' - sim, ou 'N' - não");

// let perguntas;
// let sim = 0;
// let nao = 0;

// perguntas = prompt("O html é uma linguagem de programação?");
// perguntas = prompt("O CSS serve apenas para definir estilos?");
// perguntas = prompt("O desenho favorito do Kim é Naruto?");
// perguntas = prompt("O JavaScript é igual Java?");
// perguntas = prompt("O GitHub aceita muitos acessos de uma vez?");

// for ( n = 0; n < 5; n++) {
//     if (perguntas[n] == 'S') {
//         sim += 1;
//     } else {
//         nao += 1;
//     }
// }

// alert("Total de acertos - " + sim + ", total de erros - " + nao);






// for(let contador=0; contador<3; contador++)

// while(contador<3) ou


// for (letcontador=0; contador<3; contador++) {

let botao = document.querySelector(".botao")
let nome;
let idade;
let salario;
let signo;
let emprestimo;

function pedirEmprestimo(){
nome = prompt("Qual é o seu nome?");
idade = prompt("Olá " + nome + ", qual é sua idade?");
salario = prompt("Quanto você ganha?");
emprestimo = prompt("Qual o valor do emprestimo que você deseja?");

if(isNaN(salario)){
    alert("Salario inválido, recarregue o navegador e tente novamente!");
}
else if ((idade>=21 && idade<=55) && (emprestimo<=5*salario)){
        botao.style
        botao.backgroundColor("green");
        botao.innerHTML("Aprovado");
        surpresa.style.display = "flex";
}
   else{
        botao.backgroundColor("red");
        botao.innerHTML("Recusado, tente novamente");       
     }

    //     contador++;
    }  

    botao.onclick = pedirEmprestimo;