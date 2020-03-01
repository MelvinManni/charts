let chart = document.getElementById("popChart");

Chart.defaults.global.defaultFontFamily = 'lato';
// Chart.defaults.global.defaultFontSize = '12'

var myChart = new Chart(chart, {
    type: 'line',
    data: {
        labels: [
            "Kano State",
            "Lagos State",
            "Kaduna State",
            "Katsina State",
            "Oyo State",
            "Rivers State",
            "Bauchi State",
            "Jigawa State",
            "Benue State",
            "Anambra State"
        ],
        datasets: [{
            label: 'Population',
            data: [
                9200288,
                9113605,
                6113503,
                5801584,
                5580894,
                5198605,
                4653066,
                4361002,
                4253641,
                4177828
            ],
            backgroundColor:
                "#5b8df4"
            ,
            borderColor: '#000',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: "10 Most Populated States In Nigeria",
            fontSize: 18,
            padding: 30
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                align: "end"
            }
        }
    }
});
