let myChart;
initChart();

function initChart() {
    $.ajax({
        url: $("#GetChartSettingUrl").val(),
        method: "POST",
        dataType: "json",
        success: function (result) {
            drawChart(result);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("GetChartSetting ajax error: " + errorThrown);
        }
    });
}

function drawChart(setting) {
    const config = getChartConfig(setting);

    if (config !== undefined) {
        if (myChart != null) {
            myChart.destroy();
        }
        myChart = new Chart(document.getElementById("demo").getContext("2d"), config);
    }
}

function getChartConfig(setting) {
    const datasets = getChartDatasets(setting);

    return {
        type: "line",
        data: {
            datasets: datasets
        },
        options: {
            scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        displayFormats: {
                            minute: "MM/DD HH:mm",
                            hour: "MM/DD HH:mm",
                            day: "MM/DD",
                            month: "MM/DD"
                        },
                        tooltipFormat: "MM/DD HH:mm"
                    },
                    distribution: "series"
                }],
                yAxes: [{
                }]
            }
        }
    }
}

function getChartDatasets(setting) {
    const datasets = [];

    $.each(setting.Datasets, function (index, item) {
        const data = [];

        $.each(item.Data, function (index, item) {
            data.push({ x: new Date(item.Timestamp), y: item.Value });
        });

        datasets.push({
            label: item.Label,
            backgroundColor: item.BackgroundColor,
            fill: false,
            data: data
        })
    });
    return datasets;
}


