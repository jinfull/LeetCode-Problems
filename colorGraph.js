// https://www.interviewcake.com/question/javascript/graph-coloring

function colorGraph(graph, colors) {
	
	graph.forEach(node => {

		const illegalColors = new Set();

		node.neightbors.forEach(neighbor => {
			if (neighbor.color !== null) {
				illegalColors.add(neighbor.color);
			}
		});

		for (let i = 0; i < colors.length; i++) {
			let color = colors[i];

			if (!illegalColors.has(color)) {
				node.color = color;
				break;
			}
		}
	}
}