
function orOperation(a, b) {
  return a || b
}

function checkLogic() {

  const table = [];

  for (let a = 0; a <= 1; a++) {

    for (let b = 0; b <= 1; b++) {
      const result = orOperation(a, b)
      table.push({ A: a, B: b, "A and B": result ? "true" : "false" })
    }

  }
  return table
}

console.log(checkLogic())