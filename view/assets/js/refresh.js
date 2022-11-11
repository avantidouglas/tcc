
function refresh(){
    carregaGraficoTemperatura();
    carregaGraficoA();
    carregaGraficoB();
    carregaGraficoC();
    console.log("refresh");
    setTimeout(() => {  refresh(); }, 3000);
}

setTimeout(() => {  refresh(); }, 3000);
