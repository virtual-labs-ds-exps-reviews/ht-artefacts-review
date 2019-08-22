
class checkerClass {
    constructor() {
        this.allCorrect1 = 0;
        this.status1 = [];
        this.answers_ht = ["", "41", "82", "63", "94", "45", "", "", "", "89"];
        this.answers_lp = ["", "1", "21", "33", "41", "75", "45", "", "", ""];
        this.answers_qp = ["41", "1", "21", "33", "", "75", "45", "", "", ""];
        this.answers_dh = ["75", "1", "", "33", "44", "21", "", "", "", "41"];
        this.question_number = 0;
        this.answers_a = ["80", "41", "82", "", "44", "45", "66", "", "", "89"];
        this.answers_b = ["", "41", "82", "63", "94", "45", "", "", "", "99"];
        this.answers_c = ["70", "51", "", "43", "94", "", "", "77", "", "79"];
        this.answers_d = ["50", "21", "", "73", "", "55", "", "", "88", "89"];
        this.answers_e = ["0", "11", "", "", "74", "15", "96", "", "", "69"];
        this.answers_f = ["", "11", "62", "53", "74", "65", "", "", "", "19"];
        this.answers_g = ["70", "71", "", "73", "74", "75", "76", "", "", ""];
        this.answers_h = ["", "", "32", "93", "44", "", "", "87", "98", "19"];
    };
};
let checker = new checkerClass();
var check = function(method) {

    var htmltitle = document.getElementById("htmltitle").innerHTML;
    var method = "";

    if (htmltitle == "Double Hashing Exercise")
        method = "dh";
    else if (htmltitle == "Hash Tables Exercise")
        method =  "ht";
    else if (htmltitle == "Quadratic Probing Exercise")
        method = "qp";
    else if (htmltitle == "Linear Probing Exercise")
        method = "lp";   

    var values1 = [];
    for (i = 0; i < 10; i++)
        values1[i] = document.getElementById(i.toString()).value;
    var answers;
    if (method == 'ht')
        answers = checker.answers_ht;
    else if (method == 'lp')
        answers = checker.answers_lp;
    else if (method == 'qp')
        answers = checker.answers_qp;
    else if (method == 'dh')
        answers = checker.answers_dh;

    for (i = 0; i < 10; i++) {
        if (values1[i] == answers[i])
            checker.status1[i] = 1;
        else
            checker.status1[i] = 0;
    }
    checker.allCorrect1 = 1;

    for (i = 0; i < 10; i++) {
        var temp = document.getElementById(i.toString());
        if (checker.status1[i]) {
            temp.style.background = "#a4c652";
        } else {
            checker.allCorrect1 = 0;
            temp.style.background = "#96A0A3";
        }
    }

    if (checker.allCorrect1) {
        document.getElementById("further").style.display = "block";
        document.getElementById("further").style.maxWidth = "700px";
        for (let i = 0; i < 10; i++) {
            document.getElementById('button' + i).style.borderRadius = "100%";
            document.getElementById('button' + i).style.boxShadow = "2px 2px #888888";
            document.getElementById('button' + i).style.boxShadowOpacity = "30%";
        }
    }

    document.getElementById("exercisestatus").style.display = "block";
}
var newques = function() {

        var htmltitle = document.getElementById("htmltitle").innerHTML;
        var method = "";

        if (htmltitle == "Double Hashing Exercise")
            method = "dh";
        else if (htmltitle == "Hash Tables Exercise")
            method =  "ht";
        else if (htmltitle == "Quadratic Probing Exercise")
            method = "qp";
        else if (htmltitle == "Linear Probing Exercise")
            method = "lp";   

        checker.question_number += 1;
        var questionelement = document.getElementById("thequestion");
        if (checker.question_number == 9)
            checker.question_number = 1;
        if (checker.question_number == 1)
        {
            questionelement.innerHTML = "Insert 66, 80, 41, 44, 82, 89 and 45 in the given hash table.";
            if (method=='ht')
                checker.answers_ht = checker.answers_a;
            else if (method=='lp')
                checker.answers_lp = checker.answers_a;
            else if (method=='qp')
                checker.answers_lq = checker.answers_a;
            else if (method=='dh')
                checker.answers_dh = checker.answers_a;
        }
        else if (checker.question_number == 2)
        {
            questionelement.innerHTML = "Insert 82, 63, 41, 99, 94 and 45 in the given hash table.";
            if (method=='ht')
                checker.answers_ht = checker.answers_b;
            else if (method=='lp')
                checker.answers_lp = checker.answers_b;
            else if (method=='qp')
                checker.answers_lq = checker.answers_b;
            else if (method=='dh')
                checker.answers_dh = checker.answers_b;
        }
        else if (checker.question_number == 3)
        {
            questionelement.innerHTML = "Insert 70, 51, 43, 94, 77 and 79 in the given hash table.";
            if (method=='ht')
                checker.answers_ht = checker.answers_c;
            else if (method=='lp')
                checker.answers_lp = checker.answers_c;
            else if (method=='qp')
                checker.answers_lq = checker.answers_c;
            else if (method=='dh')
                checker.answers_dh = checker.answers_c;
        }
        else if (checker.question_number == 4)
        {
            questionelement.innerHTML = "Insert 50, 21, 73, 55, 88 and 89 in the given hash table.";
            if (method=='ht')
                checker.answers_ht = checker.answers_d;
            else if (method=='lp')
                checker.answers_lp = checker.answers_d;
            else if (method=='qp')
                checker.answers_lq = checker.answers_d;
            else if (method=='dh')
                checker.answers_dh = checker.answers_d;
        }
        else if (checker.question_number == 5)
        {
            questionelement.innerHTML = "Insert 0, 74, 11, 69, 96 and 15 in the given hash table.";
            if (method=='ht')
                checker.answers_ht = checker.answers_e;
            else if (method=='lp')
                checker.answers_lp = checker.answers_e;
            else if (method=='qp')
                checker.answers_lq = checker.answers_e;
            else if (method=='dh')
                checker.answers_dh = checker.answers_e;
        }
        else if (checker.question_number == 6)
        {
            questionelement.innerHTML = "Insert 53, 62, 11, 19, 74 and 65 in the given hash table.";
            if (method=='ht')
                checker.answers_ht = checker.answers_f;
            else if (method=='lp')
                checker.answers_lp = checker.answers_f;
            else if (method=='qp')
                checker.answers_lq = checker.answers_f;
            else if (method=='dh')
                checker.answers_dh = checker.answers_f;
        }
        else if (checker.question_number == 7)
        {
            questionelement.innerHTML = "Insert 70, 71, 73, 74, 75 and 76 in the given hash table.";
            if (method=='ht')
                checker.answers_ht = checker.answers_g;
            else if (method=='lp')
                checker.answers_lp = checker.answers_g;
            else if (method=='qp')
                checker.answers_lq = checker.answers_g;
            else if (method=='dh')
                checker.answers_dh = checker.answers_g;
        }
        else if (checker.question_number == 8)
        {
            questionelement.innerHTML = "Insert 32, 93, 44, 87, 98 and 19 in the given hash table.";
            if (method=='ht')
                checker.answers_ht = checker.answers_h;
            else if (method=='lp')
                checker.answers_lp = checker.answers_h;
            else if (method=='qp')
                checker.answers_lq = checker.answers_h;
            else if (method=='dh')
                checker.answers_dh = checker.answers_h;
        }
    for (let i = 0; i < 10; i++) {
        checker.status1[i] = 0;
        document.getElementById(i.toString()).style.background = "white";
        document.getElementById(i.toString()).value = "";
        document.getElementById("exercisestatus").style.display = "none";
    }
}
var restart = function() {
    for (let i = 0; i < 10; i++) {
        checker.status1[i] = 0;
        document.getElementById(i.toString()).style.background = "white";
        document.getElementById(i.toString()).value = "";
        document.getElementById("exercisestatus").style.display = "none";
    }
}

document.getElementById("submitbutton").addEventListener("click", check);
document.getElementById("newbutton").addEventListener("click", newques);
document.getElementById("restartbutton").addEventListener("click", restart);
