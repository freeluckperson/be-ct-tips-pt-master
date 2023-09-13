
function MaxValue(shares) {
  // Tu código aquí
  let maxGanancia = 0;
  for (let i = 0; i < shares.length; i++) {
    const actual = shares.shift();
    const max = Math.max(...shares) - actual;
    if (max > maxGanancia) maxGanancia = max;
  }
  return maxGanancia;
}



module.exports = MaxValue;
