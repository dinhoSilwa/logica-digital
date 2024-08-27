// Função que realiza a operação lógica "AND" entre dois valores booleanos
const andOperation = (a, b) => {
  // Retorna o resultado da operação "AND"
  return a && b;
}

// Função que gera uma tabela com os resultados da operação "AND" para todas as combinações possíveis de valores booleanos
const logic = () => {
  // Array para armazenar a tabela de resultados
  const table = [];

  // Itera sobre todos os possíveis valores booleanos para a variável 'a'
  for (let a = 0; a <= 1; a++) {
    // Itera sobre todos os possíveis valores booleanos para a variável 'b'
    for (let b = 0; b <= 1; b++) {
      // Calcula o resultado da operação "AND" para os valores atuais de 'a' e 'b'
      const result = andOperation(a, b);

      // Adiciona um objeto à tabela com os valores de 'a', 'b' e o resultado da operação "AND"
      table.push({ A: a, B: b, "A and B": result ? "true" : "false" });
    }
  }

  // Retorna a tabela de resultados
  return table;
}

// Exibe a tabela de resultados no console
console.log(logic());

//by claudio silva - 2024
