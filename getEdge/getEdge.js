function getEdge(graph,vertex) {
  let [vx1,vx2] = vertex
  let filtered =  graph.get(vx1).filter(vx =>vx.vertex === vx2)
  return filtered.length ? `${true} ${filtered[0].weight}` : `${false} 0$`;
}
module.exports = getEdge;