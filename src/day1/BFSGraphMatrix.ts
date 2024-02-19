export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null { //this function returns the path to the needle, which is build inside the previous array
  const seen = new Array(graph.length).fill(false)
  const previous = new Array(graph.length).fill(-1) //is to reconstruct the path

  seen[source] = true
  const queue = [source]

  do {
    const current = queue.shift() as number;

    if (current === needle) break

    const adjs = graph[current]
    for (let i = 0; i < adjs.length; i++) {

      if (adjs[i] === 0) continue
      if (seen[i]) continue

      seen[i] = true;
      previous[i] = current;
      queue.push(i)
    }
  } while (queue.length)

  if (previous[needle] === -1) return null

  let current = needle
  const output: number[] = []

  while (previous[current] !== -1) {
    output.push(current)
    current = previous[current]
  }

  return [source].concat(output.reverse())
}
