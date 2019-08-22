
function resetedge(edgeID) {
if (edgeID) {
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
        color: '#808080',
        highlight: '#808080',
        highlightwidth: 0
    };
    clickedEdge.width = 2.0;
    clickedEdge.selectionWidth = 0;
    edges.update(clickedEdge);}
}
function resetnode(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    clickedNode.color = {
        border: "#98CB3B",
        background: "white"
    }
    clickedNode.font = {
        color: "black"
    }
    nodes.update(clickedNode);}
}
function regen(){
    location.reload();
  }
function reset() {
for (i = 0; i < dfs_practice.selected.length; i++) {
    resetnode(dfs_practice.selected[i]);}
dfs_practice.first = 0;
dfs_practice.checker = 0;
dfs_practice.flag = 0;
dfs_practice.done = 0;
dfs_practice.tocheck = [];
dfs_practice.flagtocheck = 0;
dfs_practice.selected = [];
dfs_practice.selectedcnt = 0;
g.dfscount = 0;
g.finalvisited.fill(0);
g.dfsvisited.fill(0);
g.dfsarr = new Array(100);
for (var i = 0; i < 100; i++) {
    g.dfsarr[i] = new Array();
}
document.getElementById("ins").innerHTML = "Execution is reset";}
class dfs_class{
    constructor(){
        this.first = 0;
        this.checker = 0;
        this.flag = 0;
        this.done = 0;
        this.temp;
        this.tocheck = [];
        this.selected = [];
        this.selectedcnt = 0;
        this.onleafnode;
        this.flagtocheck = 0;
    };
};
addedEdges = 0;
let dfs_practice = new dfs_class();
var nodes = new vis.DataSet (a[0][0]);
var edges = new vis.DataSet (a[0][1]);
graphs[0]();
var container = document.getElementById('graph');
var data = {
nodes: nodes,
edges: edges};
var graph = new vis.Network(container, data, {});
handlers();
graph.setOptions({
clickToUse:true,
nodes: {
    borderWidth: 1,
    borderWidthSelected: 1,
    chosen: false,
    font: { color: 'black' },
    shape:"circle",
    scaling:{
      label:{
        enabled:true,
        min:35,
        max:35
      },
    },
    value: 1,
    color: {
        border: "#98CB3B",
        background: "#ffffff",
        highlight: {
            border: "#98CB3B",
            background: "#ffffff",
        },
        hover: {
            border: "#98CB3B",
            background: "#ffffff",
        }
    }
},
interaction: {
    dragView: false,
    zoomView: false,
    selectConnectedEdges: false,
    hover: true,
    hoverConnectedEdges: false,
    keyboard: {
        enabled: true,
        bindToWindow: true
    },
    navigationButtons: true,
    zoomView: false
},
physics: {
    enabled: false,
    stabilization: false
},
edges: {
    scaling:{
        min:1,
        max:3,
        label:{
            enabled:true,
            min:20,
            max:20
        }
    },
    hoverWidth:0,
    value:1,
    selectionWidth: 0,
    font: { background: 'white' },
    width: 2,
    labelHighlightBold: false,
    color: {
        inherit: false,
        color: "#808080",
        opacity: 2.0
    },
    chosen: {
        inherit: false
    },
    arrows: {
        to: { enabled: true, scaleFactor: 1, type: 'arrow' },
        middle: { enabled: false, scaleFactor: 1, type: 'arrow' },
        from: { enabled: false, scaleFactor: 1, type: 'arrow' }
    },
    chosen: {
    },
    physics: false
    }
});
var networkCanvas = document.getElementById("graph").getElementsByTagName("canvas")[0];
 function changeCursor(newCursorStyle){
    networkCanvas.style.cursor = newCursorStyle;
 }
 function changeEventCursor(eventName,cursorType){
   graph.on(eventName, function() {
     changeCursor(cursorType);
   });
 }
 graph.on('hoverNode', function () {
    changeCursor('pointer');
 });
 graph.on('blurNode', function () {
    changeCursor('default');
 });
 graph.on('hoverEdge', function () {
    changeCursor('default');
 });
 graph.on('blurEdge', function () {
    changeCursor('default');
 });
 graph.on('dragStart', function () {
    changeCursor('grabbing');
 });
 graph.on('dragging', function () {
    changeCursor('grabbing');
 });
 graph.on('dragEnd', function () {
    changeCursor('grab');
 });
function clickednode(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    clickedNode.color = {
        border: '#B22222',
        background: "#98CB3B"
    }
    clickedNode.font = {
        color: "white"
    }
    nodes.update(clickedNode);}
}

function clickednode1(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    clickedNode.color = {
        border: "black",
        background: " #2C9AD1"
    }
    clickedNode.font = {
        color: "white"
    }
    nodes.update(clickedNode);    }
}

function clickednodeid(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    nodes.update(clickedNode);
    return clickedNode.label;}
}

graph.on("click", function(params) {
if (!params['nodes']['0'] && !params['edges']['0']) { return; }
if (addedEdges == a[0][0].length - 1) { return; }
if(dfs_practice.done == 1){document.getElementById("ins").innerHTML = "DFS is done!!!!!!!";}
if (dfs_practice.first == 0) {
    dfs_practice.selected[dfs_practice.selectedcnt++]=params['nodes']['0'];
    dfs_practice.temp = params['nodes']['0'];
    g.finalvisited[params['nodes']['0']] = 1;
    g.dfs_pra(params['nodes']['0']);
    dfs_practice.tocheck = g.dfs_check(params['nodes']['0']);
    clickednode1(params['nodes']['0']);
    document.getElementById("ins").innerHTML = "Now perform DFS with source node <b>"+params['nodes']['0']+"</b>"
    for(i=0;i<dfs_practice.tocheck.length;i++){
    if(dfs_practice.tocheck[i]==1 && g.finalvisited[i]==0){
    dfs_practice.flagtocheck=1;}
    }
    if(dfs_practice.flagtocheck==0){
    dfs_practice.done = 1;
    document.getElementById("ins").innerHTML += "<br>As selected source node has no children ,DFS is done on the selected source node!!!";}
    dfs_practice.first = 1;
} else if (dfs_practice.first == 1 && dfs_practice.done == 0) {
    dfs_practice.flagtocheck=0;
    dfs_practice.checker = 0;
    if (g.finalvisited[params['nodes']['0']] == 1) {
        document.getElementById("ins").innerHTML = "Selected node is incorrect as it is already visited!!!";
    } else {
        dfs_practice.selected[dfs_practice.selectedcnt++]=params['nodes']['0'];
        while (g.dfsarr[g.dfscount - 1].length == 0) {
            if (g.dfscount > 1) g.dfscount--;
        }
        for (var i = 0; i < g.dfsarr[g.dfscount - 1].length; i++) {
            if (g.dfsarr[g.dfscount - 1][i] == params['nodes']['0']) {
                clickednode(params['nodes']['0']);
                g.finalvisited[params['nodes']['0']] = 1;
                g.dfsarr[g.dfscount - 1].splice(i, 1);
                dfs_practice.checker = 1;
                for(i=0;i<dfs_practice.tocheck.length;i++){
                    if(dfs_practice.tocheck[i]==1 && g.finalvisited[i]==0){
                    dfs_practice.flagtocheck=1;}
                }
                if(dfs_practice.flagtocheck==0){
                    dfs_practice.done = 1;
                    document.getElementById("ins").innerHTML = "DFS is done!!!";}
                else{    
                if(g.edges[params['nodes']['0']].length==0){
                    document.getElementById("ins").innerHTML="Selected node is a leaf node.<br>Trace back to ancestor with unvisited child and select the unvisited child.";
                    dfs_practice.temp = null;
                    dfs_practice.onleafnode = params['nodes']['0'];
                    clickednode(params['nodes']['0']);
                    g.dfs_pra(params['nodes']['0']);
                    dfs_practice.flag = 0;
                    } else {
                for(var i=0;i<g.edges[params['nodes']['0']].length;i++){
                    if(g.finalvisited[g.edges[params['nodes']['0']][i].node] == 0){
                        dfs_practice.flag=1;}
                }
                if(dfs_practice.flag==0){document.getElementById("ins").innerHTML="Children of selected node are already visited,<br>so trace back to ancestor with unvisited child and select the unvisited child.";
                    dfs_practice.temp = null;
                    dfs_practice.onleafnode = params['nodes']['0'];
                    clickednode(params['nodes']['0']);
                    g.dfs_pra(params['nodes']['0']);
                    dfs_practice.flag = 0;}
                else{
                document.getElementById("ins").innerHTML="Now select an unvisited child of <b>"+params['nodes']['0']+"</b>";
                dfs_practice.temp = params['nodes']['0'];
                clickednode(params['nodes']['0']);
                g.dfs_pra(params['nodes']['0']);
                dfs_practice.flag = 0;}
            }
            }
        }
        if (dfs_practice.checker == 0) {
            if(dfs_practice.temp!=null)
            document.getElementById("ins").innerHTML="Selected node is incorrect.<br>Select an unvisited child of <b>"+dfs_practice.temp+"</b>";
            else{
                document.getElementById("ins").innerHTML="Selected node is incorrect.<br>Trace back to ancestor of <b>"+dfs_practice.onleafnode+"</b> with unvisited child and select the unvisited child.";
            }
        }
    }
}}
});
function handlers()
{ 
    document.getElementById("reset").onclick = function() { reset(); };
    document.getElementById("New_graph").onclick = function() { regen(); };
};
