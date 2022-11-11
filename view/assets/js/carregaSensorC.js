carregaGraficoC();

function carregaGraficoC() {
$.ajax({
    type: 'get',
    crossDomain: true,
    url: '../Graficos/geraGraficoLinha?sensor=3',
    success: function(e){
        var data = JSON.parse(e);
        var medidas = [];
        var tamanho = [];
        for(var i = 0; i < data.length; i++){
            medidas.push(data[i]['leitura_valor'])
        }
        for(var i = 0; i < data.length; i++){
            tamanho.push(" ");
        }

        var ctx = document.getElementById('sensor_c').getContext('2d');
        var myLineChart = new Chart(ctx, {
            type: 'line',
                    data: {
                        labels: tamanho,
                        datasets: [{
                                label: 'Sensor C',
                                data: medidas,
                                borderColor: '#ADD8E6',
                                borderWidth: 3,
                                type: 'line'
                            }]

                    },
            options: {
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18
                    }
                },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Ultimas 20 Medidas',
                        fontColor: '#ffffff',
                        fontSize: 16

                    },
                    ticks: {
                        fontColor: "white",
                        fontSize: 20

                    }
                }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '(%) de Umidade',
                    fontColor: '#ffffff',
                    fontSize: 16
                },
                ticks: {
                    fontColor: "white",
                    fontSize: 20
                }
            }]
        }
    }});}
});







$.ajax({
    type: 'get',
    crossDomain: true,
    url: '../Graficos/geraGraficoDonut?sensor=3',
    success: function(e){
        var data = JSON.parse(e);
        let donut = data[0]['leitura_valor'];
        new Chart(document.getElementById("sensor_c_agora"), {
            "type": "doughnut",
            "data": {
                "labels": ["UMIDADE (%)", "SECURA (%)"],
                "datasets": [{
                    "data": [donut, 100-donut],
                    borderColor: '#222046',
                    borderWidth: 10,
                    "backgroundColor": ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
                    hoverBorderColor: '#222046',
                }]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18
                    }
                }
            }
        });
        
    }
});
}