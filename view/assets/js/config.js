var div = document.getElementById("config-start");
    div.onclick = function(){
    escondeCorpo();
}

function escondeCorpo() {
    var ob = document.getElementById("dashboard");
    ob.classList.add("escondido");

    var ob = document.getElementById("corpo-config");
    ob.classList.remove("escondido");
}

var div2 = document.getElementById("voltar");
    div2.onclick = function(){
    exporCorpo();
}

function exporCorpo(){
    var ob = document.getElementById("dashboard");
    ob.classList.remove("escondido");

    var ob = document.getElementById("corpo-config");
    ob.classList.add("escondido");
}

var div3 = document.getElementById("botao-01");
    div3.onclick = function(){
    alert("Botão 01");
}

var div4 = document.getElementById("botao-02");
    div4.onclick = function(){
    alert("Botão 02");
}

var div5 = document.getElementById("botao-03");
    div5.onclick = function(){
    alert("Botão 03");
}

var div6 = document.getElementById("botao-04");
    div6.onclick = function(){
    alert("Botão 04");
}
