"use strict";
// Função auxiliar que calcula o fatorial usando um loop
function fatorial(n) {
    // Fatorial de 0 e de 1 é 1
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i; // 1 x 2 x ... x N
    }
    return resultado;
}
// Função principal chamada ao clicar no botão
function calcular() {
    const campo1 = document.getElementById("numero1");
    const campo2 = document.getElementById("numero2");
    const saida = document.getElementById("resultado");
    const numero1 = Number(campo1.value);
    const numero2 = Number(campo2.value);
    // Descobre qual radio button está selecionado
    const selecionado = document.querySelector('input[name="operacao"]:checked');
    const operacao = selecionado.value;
    let resultado;
    switch (operacao) {
        case "soma":
            resultado = numero1 + numero2;
            break;
        case "subtracao":
            resultado = numero1 - numero2;
            break;
        case "produto":
            resultado = numero1 * numero2;
            break;
        case "divisao":
            // Alerta: divisão por zero
            if (numero2 === 0) {
                alert("Não é possível dividir por zero!");
                return;
            }
            resultado = numero1 / numero2;
            break;
        case "fatorial":
            // Alerta: precisa ser inteiro e >= 0
            if (!Number.isInteger(numero1) || numero1 < 0) {
                alert("Para o fatorial, o primeiro número deve ser inteiro e maior ou igual a zero!");
                return;
            }
            resultado = fatorial(numero1);

            if (campo1.value === "" || (operacao !== "fatorial" && campo2.value === "")) {
                alert("Preencha os campos necessários!");
                return;
}
            break;
        default:
            return;
    }
    saida.textContent = String(resultado);
}
// Liga o botão à função calcular
document.getElementById("calcular").addEventListener("click", calcular);
