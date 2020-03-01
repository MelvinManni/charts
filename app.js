let chart = document.getElementById("popChart").getContext("2d");

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
        maintainAspectRatio: false,
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


// Pop 2


let pop2 = document.getElementById("pop2").getContext("2d");

var newChart = new Chart(pop2,{

    type: 'pie',
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
            backgroundColor:[
                "#5b8df4",
                "#4b77a9",
                "#5f255f",
                "#d21243",
                "#B27200",
                "#ff8000",
                "#bfff00",
                "#00ff00",
                "#bf00ff",
                "#9f6060"
            ],
            borderColor: '#000',
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        plugins: {
            labels: {
                render: "percentage",
                precision: 2,
                fontColor: "#000",
                fontSize: 12,
                fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            }
        },
        legend: {
            display: true,
            position: "right",
            labels: {
                align: "end"
            }
        },

        title: {
            display: true,
            text: "Chart Representation",
            fontSize: 18,
            padding: 30
        },
    }
}) 