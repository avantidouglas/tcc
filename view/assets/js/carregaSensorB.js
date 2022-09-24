var ctx = document.getElementById('sensor_b').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
                ," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        datasets: [{
                label: 'Sensor B',
                data: [20, 23, 25, 28, 35, 38, 40, 45, 47, 47, 47, 56
                      ,58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85],
                borderColor: '#ADD8E6',
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
                    labelString: 'Ultimas 2 Horas',
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


    }

});