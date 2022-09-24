var ctx = document.getElementById('temperatura_hora').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
                ," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
                ," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
                ," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
                ," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
                ," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        datasets: [{
                label: 'Lote A',
                data: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
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
                    labelString: 'Ultimas 6 Horas',
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


        }


    }

});