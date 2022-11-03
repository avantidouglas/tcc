carregaGraficoTemperatura();

function carregaGraficoTemperatura() {
$.ajax({
    type: 'get',
    crossDomain: true,
    url: '../Graficos/geraGraficoLinha?sensor=4',
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
        
        var ctx = document.getElementById('temperatura_hora').getContext('2d');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: tamanho,
                datasets: [{
                        label: 'Lote A',
                        data: medidas,
                        borderColor: 'rgba(255,99,132)',
                        borderWidth: 3,
                        type: 'line'
                    } 
                ]

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
                            labelString: 'Graus ºC',
                            fontColor: '#ffffff',
                            fontSize: 16
                        },
                        ticks: {
                            fontColor: "white",
                            fontSize: 20
                        }

                    }]


                }}});
    }
});
}