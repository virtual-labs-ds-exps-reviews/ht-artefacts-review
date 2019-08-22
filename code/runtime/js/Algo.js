
class Graph {
    constructor() {
        this.edges = {};
        this.nodes = [];
        this.dfsvisited = new Array(10);
        this.dfsvisited.fill(0);
        this.dfschild = new Array(10);
        this.dfschild.fill(0);
        this.dfspar = [];
        this.dfsres = [];
        this.dfscount = 0;
        this.return_arr=[];
        this.return_arr[0]=[];
        this.return_arr[1]=[];
        this.finalvisited = new Array(10);//used in dfs prac from here
        this.finalvisited.fill(0);
        this.dfsarr = new Array(100);
        for (var i = 0; i < 100; i++) {
            this.dfsarr[i] = new Array();
        }//till here
    }

    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }

    addEdge(node1, node2, id) {
        this.edges[node1].push({ node: node2, id: id });
    }
dfs(root) {
var current = root;
g.dfsvisited[root] = 1;
for (var i = 0; i < g.edges[current].length; i++) {
    if (g.dfsvisited[g.edges[current][i].node] == 0) {
        g.dfspar[g.edges[current][i].node] = current;
        g.dfsres[g.dfscount++] = g.edges[current][i];
        root = g.edges[current][i].node;
        g.dfs(root);
        g.dfsres[g.dfscount++] = g.edges[current][i];
    }
}
g.return_arr[0]=g.dfspar;
g.return_arr[1]=g.dfsres;
return g.return_arr;
}
bfs_ex(root) {
    var edgearr = [];
    var count = 0;
    var que = [root];
    var visited = new Array(1000);
    visited.fill(0);
    visited[root] = 1;
    while (que.length != 0) {
        var current = que.shift();
        edgearr[count++] = current;
        for (var i = 0; i < g.edges[current].length; i++) {
            if (visited[g.edges[current][i].node] == 0) {
                visited[g.edges[current][i].node] = 1;
                que.push(g.edges[current][i].node);
            }
        }
    }
    return edgearr;
}
dfs_pra(dfsroot) {
var current = dfsroot;
var it = 0;
for (var i = 0; i < g.edges[current].length; i++) {
    if (g.finalvisited[g.edges[current][i].node] == 0)
        g.dfsarr[g.dfscount][it++] = g.edges[current][i].node;
}
g.dfscount++;
}
dfs_check(root) {
var current = root;
g.dfsvisited[root] = 1;
for (var i = 0; i < g.edges[current].length; i++) {
if (g.dfsvisited[g.edges[current][i].node] == 0) {
    root = g.edges[current][i].node;
    g.dfs_check(root);
}}
return g.dfsvisited;
}
}
let g = new Graph();
