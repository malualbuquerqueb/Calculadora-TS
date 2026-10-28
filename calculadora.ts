// Função auxiliar que calcula o fatorial usando um loop
function fatorial(n: number): number {
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
function calcular(): void {
  const campo1 = document.getElementById("numero1") as HTMLInputElement;
  const campo2 = document.getElementById("numero2") as HTMLInputElement;
  const saida = document.getElementById("resultado") as HTMLSpanElement;

  const numero1 = Number(campo1.value);
  const numero2 = Number(campo2.value);

  // Descobre qual radio button está selecionado
  const selecionado = document.querySelector(
    'input[name="operacao"]:checked'
  ) as HTMLInputElement;
  const operacao = selecionado.value;

  let resultado: number;

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
      break;

    default:
      return;
  }

  saida.textContent = String(resultado);
}

// Liga o botão à função calcular
document.getElementById("calcular")!.addEventListener("click", calcular);