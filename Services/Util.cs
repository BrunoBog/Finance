using System;
using System.Globalization;

namespace Finance.Services
{
    public static class Util
    {
        public static int GetWeekNumber(DateTime time, CultureInfo cultureInfo = null)
        {
            if (cultureInfo == null) cultureInfo =  new CultureInfo("pt-BR");
            return cultureInfo.Calendar.GetWeekOfYear(time, cultureInfo.DateTimeFormat.CalendarWeekRule, cultureInfo.DateTimeFormat.FirstDayOfWeek);
        }

    }
}