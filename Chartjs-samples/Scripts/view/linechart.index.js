let myChart;
drawChart(getChartConfig(getChartDatasets()));

function getChartDatasets() {
    const result = [];
    let start = moment()
    while (start < moment().add(1, "d")) {
        result.push({ x: start.format("YYYY/MM/DD HH:mm"), y: Math.random() });
        start = start.add(1, "h")
    }
    return result;
}

function getChartConfig(data) {
    return {
        type: "line",
        data: {
            datasets: [{
                label: "demo",
                backgroundColor: "lightblue",
                fill: false,
                data: data
            }]
        },
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        displayFormats: {
                            minute: "MM/DD HH:mm",
                            hour: "MM/DD HH:mm",
                            day: "MM/DD",
                            month: "MM/DD"
                        }
                    },
                    display: true,
                    distribution: "series"
                }],
                yAxes: [{
                }]
            }
        }
    }
}
function drawChart(config) {
    if (myChart != null) {
        myChart.destroy();
    }
    myChart = new Chart(document.getElementById("demo").getContext("2d"), config);
}