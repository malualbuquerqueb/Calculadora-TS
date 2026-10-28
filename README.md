# Calculadora em TypeScript

Página de calculadora feita com HTML, CSS e TypeScript, como exercício da disciplina.

## Funcionalidades

- Dois campos para números.
- Seleção da operação por radio buttons: soma, subtração, produto, divisão e fatorial.
- O fatorial é calculado sobre o **primeiro número**, usando um loop em uma função auxiliar própria (o fatorial de 0 e de 1 é 1).
- Alertas, sem efetuar a operação, quando:
  - a operação é fatorial e o primeiro número não é inteiro ou é negativo (verificado com `Number.isInteger()`);
  - a operação é divisão e o segundo número é zero.

## Arquivos

| Arquivo | Descrição |
| --- | --- |
| `index.html` | Estrutura da página |
| `estilo.css` | Estilo e layout |
| `calculadora.ts` | Código-fonte em TypeScript |
| `calculadora.js` | Código compilado, usado pelo HTML |

## Como executar

1. Instale o [Node.js](https://nodejs.org) e depois o TypeScript:
   ```
   npm install -g typescript
   ```
2. Compile o arquivo na pasta do projeto:
   ```
   tsc calculadora.ts
   ```
   Isso gera o `calculadora.js`.
3. Abra o `index.html` no navegador.

## Exemplos de teste

| Operação | Entradas | Resultado |
| --- | --- | --- |
| Soma | 5 e 3 | 8 |
| Fatorial | 5 | 120 |
| Fatorial | 0 | 1 |
| Fatorial | 2.5 ou -3 | Alerta |
| Divisão | 10 e 0 | Alerta |