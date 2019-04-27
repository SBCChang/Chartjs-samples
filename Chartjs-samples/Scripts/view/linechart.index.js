﻿let myChart;
getChartConfig();

function getChartConfig() {

    $.ajax({
        url: $("#GetChartConfigUrl").val(),
        method: "POST",
        dataType: "json",
        success: function (result) {
            drawChart(setChartConfig(result));
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("getChartConfig ajax error: " + errorThrown);
        }
    });
}

function setChartDatasets(config) {
    let datasets = [];

    $.each(config.Datasets, function (index, item) {
        let data = [];

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

function setChartConfig(config) {
    const datasets = setChartDatasets(config);

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
function drawChart(config) {
    if (myChart != null) {
        myChart.destroy();
    }
    myChart = new Chart(document.getElementById("demo").getContext("2d"), config);
}