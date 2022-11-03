
function refresh(){
    carregaGraficoTemperatura();
    carregaGraficoA();
    carregaGraficoB();
    carregaGraficoC();
    console.log("refresh");
    setTimeout(() => {  refresh(); }, 10000);
}

setTimeout(() => {  refresh(); }, 10000);



