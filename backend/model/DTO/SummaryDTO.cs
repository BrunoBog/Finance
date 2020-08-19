using System.Collections.Generic;

namespace Finance.model
{
    public class SummaryDTO
    {
        public string Title { get; set; }
        public List<WeekSummary> Summary { get; set; }
        public decimal MonthTotal { get; set; }
    }

    public class WeekSummary{
        public int WeekNumber { get; set; }
        public decimal Total { get; set; }
    }
}