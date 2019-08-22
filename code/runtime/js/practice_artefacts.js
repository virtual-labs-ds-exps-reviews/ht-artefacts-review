
class practiceEngine {
    constructor() {
        this.table = [];
        this.size = 0;
    };
};
let practice_engine = new practiceEngine();
var load = function() {
    for (i = 0; i < 10; i++)
        practice_engine.table[i] = { status: 0, data: 0 }
}
document.getElementsByTagName('body').onload = load();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function jump(method, position, temp, element) {
    if (method == "lp") {
        return (position + temp) % 10;
    } else if (method == "qp") {
        return (position + temp * temp) % 10;
    } else if (method == "dh") {
        hash2 = 5 - (element % 5);
        return (position + temp * hash2) % 10;
    }
}
async function show(position, colour6, table) {
    for (i = 0; i < 10; i++) {
        document.getElementById(i.toString()).style.background = "white";
        if (table[i].status)
            document.getElementById(i.toString()).value = table[i].data;
    }
    document.getElementById(position.toString()).style.background = colour6;
    if (table[position].data)
        document.getElementById(position.toString()).value = table[position].data;
}

var changeTable = async function(table, element, operation, method) {

    position = element % 10;
    original_position = element % 10;
    document.getElementById("status").innerHTML = "";
    document.getElementById("status1").innerHTML = "";
    document.getElementById("status2").innerHTML = "";
    document.getElementById("status3").innerHTML = "";
    j = 0;
    temp = 0;
    hash2 = 0;
    while (table[position].status) {
        document.getElementById("status").innerHTML = "";
        document.getElementById("status1").innerHTML = "";
        document.getElementById("status2").innerHTML = "";
        document.getElementById("status3").innerHTML = "";
        await sleep(1000);
        if (table[position].data != element) {
            document.getElementById("status").style.color = "black";
            document.getElementById("status1").style.color = "black";
            document.getElementById("status2").style.color = "black";
            document.getElementById("status3").style.color = "red";

            document.getElementById("status").innerHTML = "hash = " + element + " % 10 = " + element % 10;
            await sleep(500);
            if (method != 'ht')
                if (method == 'dh') {
                    document.getElementById("status1").innerHTML = "hash2 = 5 - ( " + element + " % 5 ) = " + (5 - (element % 5));
                    document.getElementById("status1").innerHTML += ", i = " + temp;

                } else
                    document.getElementById("status1").innerHTML = "i = " + temp;

            await sleep(500);
            if (method == 'ht')
                document.getElementById("status2").innerHTML = "Index = hash = " + position;
            else if (method == 'lp')
                document.getElementById("status2").innerHTML = "Index = (hash + i)%10 = " + position;
            else if (method == 'qp')
                document.getElementById("status2").innerHTML = "Index = (hash + i*i)%10 = " + position;
            else if (method == 'dh')
                document.getElementById("status2").innerHTML = "Index = (hash + i*hash2)%10 = " + position;

            await sleep(500);
            if (method != 'ht')
                document.getElementById("status3").innerHTML = "Collision Occured";
            else if (operation != 'insert')
                document.getElementById("status3").innerHTML = "Element Not Found!";

            show(position, "red", table);
            await sleep(1000);
            temp++;
            if (method != 'ht')
                position = jump(method, original_position, temp, element);
            else
                break;
        } else {
            document.getElementById("status").style.color = "black";
            document.getElementById("status1").style.color = "black";
            document.getElementById("status2").style.color = "black";
            document.getElementById("status3").style.color = "#a4c652";

            document.getElementById("status").innerHTML = "hash = " + element + " % 10 = " + element % 10;
            await sleep(500);
            if (method != 'ht')
                document.getElementById("status1").innerHTML = "i = " + temp;
            await sleep(500);
            if (method == 'ht')
                document.getElementById("status2").innerHTML = "Index = hash = " + position;
            else if (method == 'lp')
                document.getElementById("status2").innerHTML = "Index = (hash + i)%10 = " + position;
            else if (method == 'qp')
                document.getElementById("status2").innerHTML = "Index = (hash + i*i)%10 = " + position;
            else if (method == 'dh')
                document.getElementById("status2").innerHTML = "Index = (hash + i*hash2)%10 = " + position;
            await sleep(500);

            if (operation == "insert") {
                document.getElementById("status3").style.color = "#a4c652";
                document.getElementById("status3").innerHTML = "Element already exists!";
                show(position, "#a4c652", table);
            } else if (operation == "search") {
                document.getElementById("status3").style.color = "#a4c652";
                document.getElementById("status3").innerHTML = "Element Found!";
                show(position, "#a4c652", table);
            } else if (operation == "remove") {
                document.getElementById("status3").style.color = "#a4c652";
                document.getElementById("status3").innerHTML = "Element Found!";
                practice_engine.size--;
                table[position].status = 2;
                table[position].data = "";
                document.getElementById("status3").style.color = "#a4c652";
                document.getElementById("status3").innerHTML = "Element Removed!";
                show(position, "#a4c652", table);
            }
            break;
        }
    }
    if (table[position].status == 0) {
        document.getElementById("status").innerHTML = "";
        document.getElementById("status1").innerHTML = "";
        document.getElementById("status2").innerHTML = "";
        document.getElementById("status3").innerHTML = "";
        document.getElementById("status").style.color = "black";
        document.getElementById("status1").style.color = "black";
        document.getElementById("status2").style.color = "black";

        document.getElementById("status").innerHTML = "hash = " + element + " % 10 = " + element % 10;
        await sleep(500);
        if (method != 'ht')
            if (method == 'dh') {
                document.getElementById("status1").innerHTML = "hash2 = 5 - ( " + element + " % 5 ) = " + (5 - (element % 5));
                document.getElementById("status1").innerHTML += ", i = " + temp;

            } else
                document.getElementById("status1").innerHTML = "i = " + temp;

        await sleep(500);
        if (method == 'ht')
            document.getElementById("status2").innerHTML = "Index = hash = " + position;
        else if (method == 'lp')
            document.getElementById("status2").innerHTML = "Index = (hash + i)%10 = " + position;
        else if (method == 'qp')
            document.getElementById("status2").innerHTML = "Index = (hash + i*i)%10 = " + position;
        else if (method == 'dh')
            document.getElementById("status2").innerHTML = "Index = (hash + i*hash2)%10 = " + position;
        await sleep(500);
        if (operation == "insert") {
            document.getElementById("status3").style.color = "#a4c652";
            document.getElementById("status3").innerHTML = "Element Added";
            table[position].data = element;
            table[position].status = 1;
            show(position, "#a4c652", table);
        } else if (operation == "search") {
            document.getElementById("status3").style.color = "red";
            document.getElementById("status3").innerHTML = "Element Not Found";
            show(position, "red", table);
        } else if (operation == "remove") {
            document.getElementById("status3").style.color = "red";
            document.getElementById("status3").innerHTML = "Element Not Found";
            show(position, "red", table);
        }
    }
}
var insert = async function(method) {
    var htmltitle = document.getElementById("htmltitle").innerHTML;
    var method = "";

    if (htmltitle == "Double Hashing Practice")
        method = "dh";
    else if (htmltitle == "Hash Tables Practice")
        method =  "ht";
    else if (htmltitle == "Quadratic Probing Practice")
        method = "qp";
    else if (htmltitle == "Linear Probing Practice")
        method = "lp";   

    if (practice_engine.size < 10) {
        practice_engine.size++;
        let element = document.getElementById('toBeInserted').value;
        changeTable(practice_engine.table, element, "insert", method);
    }
}

var searchelement = async function() {
    var htmltitle = document.getElementById("htmltitle").innerHTML;
    var method = "";

    if (htmltitle == "Double Hashing Practice")
        method = "dh";
    else if (htmltitle == "Hash Tables Practice")
        method =  "ht";
    else if (htmltitle == "Quadratic Probing Practice")
        method = "qp";
    else if (htmltitle == "Linear Probing Practice")
        method = "lp";   

    let element = document.getElementById('toBeSearched').value;
    changeTable(practice_engine.table, element, "search", method);
}
var remove = async function() {
    var htmltitle = document.getElementById("htmltitle").innerHTML;
    var method = "";

    if (htmltitle == "Double Hashing Practice")
        method = "dh";
    else if (htmltitle == "Hash Tables Practice")
        method =  "ht";
    else if (htmltitle == "Quadratic Probing Practice")
        method = "qp";
    else if (htmltitle == "Linear Probing Practice")
        method = "lp";   

    let element = document.getElementById('toBeRemoved').value;
    changeTable(practice_engine.table, element, "remove", method);
}

document.getElementById("leftbutton").addEventListener("click", insert);
document.getElementById("middlebutton").addEventListener("click", searchelement);
document.getElementById("rightbutton").addEventListener("click", remove);
