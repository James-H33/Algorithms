function test() {
    const adj = [...Array(4)].map(r => []);

    const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];

    for (let [u, v] of prerequisites) {
      adj[v].push(u);
    }

    console.log(adj[1]);
}

test();