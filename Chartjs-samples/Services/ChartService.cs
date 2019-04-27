using System;
using System.Collections.Generic;
using Chartjs_samples.ViewModels;

namespace Chartjs_samples.Services
{
    internal class ChartService
    {

        internal static ChartSetting ReadLineChartSetting()
        {
            var result = new ChartSetting() { Datasets = new List<Dataset>() };
            var data = new List<Datum>();
            var now = DateTime.Now;
            var start = now;
            var random = new Random();

            while (start < now.AddDays(1))
            {
                data.Add(new Datum() { Timestamp = start.ToString("yyyy/MM/dd HH:mm"), Value = random.NextDouble() });
                start = start.AddHours(1);
            }
            result.Datasets.Add(new Dataset { Label = "demo", BackgroundColor = "lightblue", Data = data });

            return result;
        }

    }
}