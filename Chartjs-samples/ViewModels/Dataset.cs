using System.Collections.Generic;

namespace Chartjs_samples.ViewModels
{
    public class Dataset
    {

        public string Label { get; set; }

        public string BackgroundColor { get; set; }

        public List<Datum> Data { get; set; }

    }
}