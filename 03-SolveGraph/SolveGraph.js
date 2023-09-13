// function SolveGraph(graph, start, target) {
//   // Tu código aquí
// }

function SolveGraph(graph, start, target) {
  const queue = [start];
  const visited = new Set();
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === target) {
      return true;
    }
    visited.add(current);
    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
  return false;
}

module.exports = SolveGraph;
