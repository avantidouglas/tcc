var div = document.getElementById("config-start");
div.onclick = function(){
    escondeCorpo();
}

function escondeCorpo() {
    var ob = document.getElementById("dashboard");
    ob.classList.add("escondido");
}