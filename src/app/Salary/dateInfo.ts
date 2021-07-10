
export class DateInfo {
    
    periodDate: string = "per year"; // retrieve the date period of payment from drop down
    dateYear: string = "2018/2019"; // retrieve year from drop down
    dateMonth: string = "Mar-21"; // retrieve month from drop down
    dateDayDay: string = "5"; // retrieve day from day drop down
    dateDayMonth: string = "April"; // retrieve month from day drop down 
    dateDayYear: string = "2021"; // retrieve year from day drop down
    selectedDate: string ="";

// Match each drop down timeframe option with their time frame
    calculateDate (): string {
        if (this.periodDate == "per year") {
          return this.selectedDate = this.dateYear; 
        }
        else if (this.periodDate == "per month") {
            return this.selectedDate = this.dateMonth;
        }
        else
        {
            let conDate = this.dateDayDay + " " + this.dateDayMonth + " " + this.dateDayYear;
            return this.selectedDate = conDate;
        }
    }
}