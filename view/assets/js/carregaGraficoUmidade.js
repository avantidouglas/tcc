var ctx = document.getElementById('umidade_hora').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
                ," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
                ," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        datasets: [{
                label: 'Sensor A',
                data: [20, 23, 25, 28, 35, 38, 40, 45, 47, 47, 47, 56
                      ,58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85
                      ,88, 84, 82, 80, 78, 75, 72, 70, 68, 65, 62, 60],
                borderColor: '#ADD8E6',
                borderWidth: 3,
                type: 'line'
            },
            {
                label: 'Sensor B',
                data: [20, 23, 25, 28, 35, 38, 40, 45, 47, 47, 47, 56
                      ,54, 52, 50, 47, 44, 42, 40, 37, 34, 32, 30, 27
                      ,30, 32, 34, 37, 40, 42, 44, 20, 30, 40, 50, 60],
                borderColor: 'rgba(255,99,132)',
                borderWidth: 3,
                type: 'line'
            },
            {
                label: 'Sensor C',
                data: [60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88
                      ,84, 82, 80, 78, 75, 72, 70, 68, 65, 62, 60, 58
                      ,56, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
                borderColor: '#ADD8E6',
                borderWidth: 3
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
                    labelString: 'Ultima Hora',
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