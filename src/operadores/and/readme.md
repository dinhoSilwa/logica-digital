## Tabela Verdade

A tabela verdade é uma representação tabular que mostra todos os possíveis valores das variáveis de entrada e o resultado da expressão lógica para cada combinação. Cada linha da tabela representa uma combinação possível de valores de entrada, e a coluna final mostra o resultado da operação lógica para essa combinação.

### Tabela Verdade para a Operação "AND"

A operação lógica "AND" é uma função lógica que retorna `true` somente se ambos os operandos forem `true`. Veja abaixo a tabela verdade correspondente:

| A | B | A AND B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

- **Entradas (A e B)**: Cada coluna representa uma variável booleana (A e B) que pode assumir valores de `0` (falso) ou `1` (verdadeiro).
- **Saída (A AND B)**: A coluna final mostra o resultado da operação "AND" para cada combinação possível dos valores `0` e `1`.

### Como Funciona?

1. **Entrada (A = 0, B = 0)**: A operação "AND" entre 0 e 0 resulta em 0. Isso porque, para a operação "AND" retornar `true`, ambos os operandos precisam ser `true`.

2. **Entrada (A = 0, B = 1)**: A operação "AND" entre 0 e 1 também resulta em 0. Mesmo que B seja `true`, A é `false`, e portanto, a operação "AND" retorna `false`.

3. **Entrada (A = 1, B = 0)**: A operação "AND" entre 1 e 0 resulta em 0. O mesmo raciocínio se aplica, pois um dos operandos é `false`.

4. **Entrada (A = 1, B = 1)**: A operação "AND" entre 1 e 1 resulta em 1. Ambos os operandos são `true`, então a operação "AND" retorna `true`.

### Importância da Tabela Verdade

- **Análise de Expressões Lógicas**: Ajuda a analisar e entender como expressões lógicas se comportam com diferentes entradas.
- **Design de Circuitos Digitais**: Fundamental no design e análise de circuitos digitais, onde portas lógicas (como AND, OR, NOT) são usadas.
- **Verificação de Correção**: Utilizada para verificar se uma expressão lógica ou um circuito está funcionando conforme o esperado.

A tabela verdade é uma ferramenta essencial para estudantes e profissionais de lógica, matemática, ciência da computação e engenharia elétrica. Ela proporciona uma maneira clara e sistemática de visualizar como diferentes entradas afetam o resultado de operações lógicas.


