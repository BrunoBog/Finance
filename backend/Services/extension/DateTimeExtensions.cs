using System;
using System.Globalization;

namespace Finance.Services
{
    public static class DateTimeExtensions
    {
        public static int WeekNumber(this DateTime time, CultureInfo cultureInfo = null)
        {
            if (cultureInfo == null) cultureInfo = new CultureInfo("pt-BR");
            return cultureInfo.Calendar.GetWeekOfYear(time, cultureInfo.DateTimeFormat.CalendarWeekRule, cultureInfo.DateTimeFormat.FirstDayOfWeek);
        }

        public static DateTime FristDayOfWeek(this DateTime dateInit)
        {
            int diff = (7 + (dateInit.DayOfWeek - DayOfWeek.Sunday)) % 7;
            return dateInit.AddDays(-1 * diff).Date;
        }

    }
}