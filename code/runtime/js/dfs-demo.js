
function resetedge(edgeID){
if(edgeID){
var clickedEdge = edges.get(edgeID);
clickedEdge.color = {
  color: '#808080',
  highlight:'#808080',
  highlightwidth: 0
};
clickedEdge.width=2.0;
clickedEdge.selectionWidth=0;
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

class dfs_class{
    constructor(){
    this.resetter = 0;
    this.time;
    this.dfscountarr = new Array(10);
    this.dfscountarr.fill(0);
    this.dfsres = [];
    this.first = 0;
    this.src;
    this.src1=0;
    this.start = 0;
    this.first = 0;
    this.res = [];//not necessary can be replaced with dfsres
    this.count = 0;
    this.prev = -1;
    this.onpause = 0;
    };
};
addedEdges = 0;  
let dfs_demo = new dfs_class();
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
    borderWidth: 2,
    heightConstraint:{
      minimum: 10,},
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
            background: "#ffffff"
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
        border: '#3BFB11',
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
        background: "#2C9AD1"
    }
    clickedNode.font = {
        color: "white"
    }
    nodes.update(clickedNode);}
}

function clickednode2(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    clickedNode.color = {
        border: '#70746F',
        background: "grey"
    }
    clickedNode.font = {
        color: "white"
    }
    nodes.update(clickedNode);}
}

function clickednode3(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    clickedNode.color = {
        border:'#0C0D0C',         
        background: "black"
    }
    clickedNode.font = {
        color: "white"
    }
    nodes.update(clickedNode);}
}

function clickededge1(edgeID) {
if (edgeID) {
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
        color: 'black',
        highlight: 'black'
    }
    edges.update(clickedEdge);}
}

function clickednodeid(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    nodes.update(clickedNode);
    return clickedNode.label;}
}
graph.on("click", function(params) {
dfs_demo.resetter = 0;
if (!params['nodes']['0'] && !params['edges']['0']) { return; }
if(params['edges']['0']){return;}
if (addedEdges == a[0][0].length - 1) { return; }
if(dfs_demo.first == 0 ){
dfs_demo.src1=params['nodes']['0'];
console.log(dfs_demo.src1);
dfs_demo.src = clickednodeid(params['nodes']['0']);
if(dfs_demo.befstart==null){
dfs_demo.befstart = params['nodes']['0'];
clickednode1(dfs_demo.befstart);}
else{
    resetnode(dfs_demo.befstart);
    dfs_demo.befstart = params['nodes']['0'];
    clickednode1(dfs_demo.befstart);
}
document.getElementById("ins").innerHTML = '<b>'+dfs_demo.src +'</b>'+ " is selected as source node <br>Click on <b>Start</b> to start the DFS Demo with the source node"+'<b>'+dfs_demo.src+'</b>'
}
});
function clicking() {
    if (dfs_demo.resetter == 1)return;
    else if (dfs_demo.count < dfs_demo.dfsres[1].length && dfs_demo.resetter == 0) {
        if (dfs_demo.dfscountarr[dfs_demo.dfsres[1][dfs_demo.count].node] == 1) {
            if(dfs_demo.dfsres[1][dfs_demo.count].node!=undefined){
                document.getElementById("ins").innerHTML = "Since node <b>"+clickednodeid(dfs_demo.dfsres[1][dfs_demo.count].node)+"</b> is explored completely,we are tracing back."                
            }
            if(dfs_demo.dfsres[0][dfs_demo.dfsres[1][dfs_demo.count].node]!=undefined){         
                document.getElementById("ins").innerHTML += "<br>So parent of node <b>"+clickednodeid(dfs_demo.dfsres[1][dfs_demo.count].node)+"</b>(i.e <b>"+clickednodeid(dfs_demo.dfsres[0][dfs_demo.dfsres[1][dfs_demo.count].node])+"</b>) is the current node"
            }
            clickednode3(dfs_demo.dfsres[1][dfs_demo.count].node);
            clickednode2(dfs_demo.dfsres[0][dfs_demo.dfsres[1][dfs_demo.count].node]);
            if(dfs_demo.count==dfs_demo.dfsres[1].length-1){
                document.getElementById("ins").innerHTML += "<br>DFS is done on the source node "+dfs_demo.src;
            }
        } else {
            dfs_demo.dfscountarr[dfs_demo.dfsres[1][dfs_demo.count].node]--;
            if(dfs_demo.dfsres[0][dfs_demo.dfsres[1][dfs_demo.count].node]!=undefined){
                document.getElementById("ins").innerHTML = "Node <b>"+clickednodeid(dfs_demo.dfsres[0][dfs_demo.dfsres[1][dfs_demo.count].node])+"</b> is visited"
            }
            if(dfs_demo.dfsres[1][dfs_demo.count].node!=undefined){
                document.getElementById("ins").innerHTML += "<br>As"+clickednodeid(dfs_demo.dfsres[1][dfs_demo.count].node)+" is the unvisited child of "+clickednodeid(dfs_demo.dfsres[0][dfs_demo.dfsres[1][dfs_demo.count].node])+",<br>node <b>"+clickednodeid(dfs_demo.dfsres[1][dfs_demo.count].node)+"</b> is the current node"
            }
            clickededge1(dfs_demo.dfsres[1][dfs_demo.count].id);
            clickednode2(dfs_demo.dfsres[1][dfs_demo.count].node);
            clickednode(dfs_demo.dfsres[0][dfs_demo.dfsres[1][dfs_demo.count].node]);
        }
        dfs_demo.count++;
    }
}
function reset() {
for (i = 0; i < dfs_demo.res.length; i++) {
        resetedge(dfs_demo.res[i].id);
        resetnode(dfs_demo.res[i].node);
    }
    resetnode(dfs_demo.src1);
    dfs_demo.resetter = 1;
    dfs_demo.dfsres = [];
    dfs_demo.onpause = 0;
    dfs_demo.res = [];
    dfs_demo.prev = -1;
    dfs_demo.befstart = null;
    dfs_demo.src1 = 0;
    dfs_demo.first = 0;
    dfs_demo.start = 0;
    dfs_demo.dfscountarr.fill(0);
    dfs_demo.count = 0;
    g.dfsvisited.fill(0);
    g.dfspar = [];
    g.dfsres = [];
    g.dfscount = 0;
    clearInterval(dfs_demo.time);
    document.getElementById("pause").value = "Pause";
    document.getElementById("start").value = "Start";
    document.getElementById("ins").innerHTML = "Execution is reset";
    clearInterval(dfs_demo.time);
}
function start(){
    if(dfs_demo.start == 0){
        if(dfs_demo.src1==0){
            document.getElementById("ins").innerHTML = "Select the source node from where you want to start the DFS Demo";
        }
        else{
        document.getElementById("ins").innerHTML = "DFS Demo started on node "+"<b>"+dfs_demo.src+"</b>";    
        dfs_demo.first = 1;
        dfs_demo.start = 1;
        dfs_demo.dfsres = g.dfs(dfs_demo.src1);
        console.log("dd"+dfs_demo.src1);
        console.log(dfs_demo.dfsres[0],dfs_demo.dfsres[1]);
        for (var i = 0; i < dfs_demo.dfsres[1].length; i++) {
            dfs_demo.dfscountarr[dfs_demo.dfsres[1][i].node]++;
        }
        dfs_demo.count = 0;
        dfs_demo.res = dfs_demo.dfsres[1];
        document.getElementById("start").value = "Next";
        dfs_demo.time = setInterval(clicking, 3000 - document.getElementById("interval").value);}
    }
    else if(document.getElementById("start").value == "Next"){
        clearInterval(dfs_demo.time);
        if(dfs_demo.onpause==1){
            clicking();
        }
        else{
            clicking();        
            dfs_demo.time = setInterval(clicking, 3000 - document.getElementById("interval").value);
        }
    }
    else{
        document.getElementById("start").disabled = true;
        document.getElementById("start").style.backgroundColor = "grey";
    }
}
function pause() {
if (dfs_demo.prev == -1) {
    dfs_demo.prev = document.getElementById("interval").value;
    if (dfs_demo.time != 0) {
        clearInterval(dfs_demo.time);
    }
    dfs_demo.onpause = 1;
    document.getElementById("pause").value = "Play";}
    else {    
    dfs_demo.prev = -1;
    dfs_demo.onpause = 0;
    clearInterval(dfs_demo.time);
    dfs_demo.time = setInterval(clicking, 5000 - document.getElementById("interval").value);
    document.getElementById("pause").value = "Pause";}
}
function change_interval() {
if (dfs_demo.time != 0) { clearInterval(dfs_demo.time); }
if (document.getElementById("interval").value != 100) {
    clearInterval(dfs_demo.time);
    dfs_demo.time = setInterval(clicking, 5000 - document.getElementById("interval").value);
    document.getElementById("pause").style.backgroundColor = "#288ec8";}
    else document.getElementById("pause").style.backgroundColor = "grey";
}
function handlers()
{ 
    document.getElementById("reset").onclick = function() { reset(); };
    document.getElementById("New_graph").onclick = function() { regen(); };
    document.getElementById("start").onclick = function() { start(); };
    document.getElementById("pause").onclick = function() { pause(); };
};
