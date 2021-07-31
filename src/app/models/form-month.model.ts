export class FormMonth {

    value: string;
    text: string;

    static getMonth(): FormMonth[] {
        
        let result: FormMonth[] = [];

        result.push(this.getMonthData('Mar 2022', 'Mar-22'));
        result.push(this.getMonthData('Feb 2022', 'Feb-22'));
        result.push(this.getMonthData('Jan 2022', 'Jan-22'));
        result.push(this.getMonthData('Dec 2021', 'Dec-21'));
        result.push(this.getMonthData('Nov 2021', 'Nov-21'));
        result.push(this.getMonthData('Oct 2021', 'Oct-21'));
        result.push(this.getMonthData('Sep 2021', 'Sep-21'));
        result.push(this.getMonthData('Aug 2021', 'Aug-21'));
        result.push(this.getMonthData('Jul 2021', 'Jul-21'));
        result.push(this.getMonthData('Jun 2021', 'Jun-21'));
        result.push(this.getMonthData('May 2021', 'May-21'));
        result.push(this.getMonthData('Apr 2021', 'Apr-21'));
        result.push(this.getMonthData('Mar 2021', 'Mar-21'));
        result.push(this.getMonthData('Feb 2021', 'Feb-21'));
        result.push(this.getMonthData('Jan 2021', 'Jan-21'));
        result.push(this.getMonthData('Dec 2020', 'Dec-20'));
        result.push(this.getMonthData('Nov 2020', 'Nov-20'));
        result.push(this.getMonthData('Oct 2020', 'Oct-20'));
        result.push(this.getMonthData('Sep 2020', 'Sep-20'));
        result.push(this.getMonthData('Aug 2020', 'Aug-20'));
        result.push(this.getMonthData('Jul 2020', 'Jul-20'));
        result.push(this.getMonthData('Jun 2020', 'Jun-20'));
        result.push(this.getMonthData('May 2020', 'May-20'));
        result.push(this.getMonthData('Apr 2020', 'Apr-20'));
        result.push(this.getMonthData('Mar 2020', 'Mar-20'));
        result.push(this.getMonthData('Feb 2020', 'Feb-20'));
        result.push(this.getMonthData('Jan 2020', 'Jan-20'));
        result.push(this.getMonthData('Dec 2019', 'Dec-19'));
        result.push(this.getMonthData('Nov 2019', 'Nov-19'));
        result.push(this.getMonthData('Oct 2019', 'Oct-19'));
        result.push(this.getMonthData('Sep 2019', 'Sep-19'));
        result.push(this.getMonthData('Aug 2019', 'Aug-19'));
        result.push(this.getMonthData('Jul 2019', 'Jul-19'));
        result.push(this.getMonthData('Jun 2019', 'Jun-19'));
        result.push(this.getMonthData('May 2019', 'May-19'));
        result.push(this.getMonthData('Apr 2019', 'Apr-19'));
        result.push(this.getMonthData('Mar 2019', 'Mar-19'));
        result.push(this.getMonthData('Feb 2019', 'Feb-19'));
        result.push(this.getMonthData('Jan 2019', 'Jan-19'));
        result.push(this.getMonthData('Dec 2018', 'Dec-18'));
        result.push(this.getMonthData('Nov 2018', 'Nov-18'));
        result.push(this.getMonthData('Oct 2018', 'Oct-18'));
        result.push(this.getMonthData('Sep 2018', 'Sep-18'));
        result.push(this.getMonthData('Aug 2018', 'Aug-18'));
        result.push(this.getMonthData('Jul 2018', 'Jul-18'));
        result.push(this.getMonthData('Jun 2018', 'Jun-18'));
        result.push(this.getMonthData('May 2018', 'May-18'));
        result.push(this.getMonthData('Apr 2018', 'Apr-18'));
        result.push(this.getMonthData('Mar 2018', 'Mar-18'));
        result.push(this.getMonthData('Feb 2018', 'Feb-18'));
        result.push(this.getMonthData('Jan 2018', 'Jan-18'));
        result.push(this.getMonthData('Dec 2017', 'Dec-17'));
        result.push(this.getMonthData('Nov 2017', 'Nov-17'));
        result.push(this.getMonthData('Oct 2017', 'Oct-17'));
        result.push(this.getMonthData('Sep 2017', 'Sep-17'));
        result.push(this.getMonthData('Aug 2017', 'Aug-17'));
        result.push(this.getMonthData('Jul 2017', 'Jul-17'));
        result.push(this.getMonthData('Jun 2017', 'Jun-17'));
        result.push(this.getMonthData('May 2017', 'May-17'));
        result.push(this.getMonthData('Apr 2017', 'Apr-17'));
        result.push(this.getMonthData('Mar 2017', 'Mar-17'));
        result.push(this.getMonthData('Feb 2017', 'Feb-17'));
        result.push(this.getMonthData('Jan 2017', 'Jan-17'));
        result.push(this.getMonthData('Dec 2016', 'Dec-16'));
        result.push(this.getMonthData('Nov 2016', 'Nov-16'));
        result.push(this.getMonthData('Oct 2016', 'Oct-16'));
        result.push(this.getMonthData('Sep 2016', 'Sep-16'));
        result.push(this.getMonthData('Aug 2016', 'Aug-16'));
        result.push(this.getMonthData('Jul 2016', 'Jul-16'));
        result.push(this.getMonthData('Jun 2016', 'Jun-16'));
        result.push(this.getMonthData('May 2016', 'May-16'));
        result.push(this.getMonthData('Apr 2016', 'Apr-16'));
        result.push(this.getMonthData('Mar 2016', 'Mar-16'));
        result.push(this.getMonthData('Feb 2016', 'Feb-16'));
        result.push(this.getMonthData('Jan 2016', 'Jan-16'));
        result.push(this.getMonthData('Dec 2015', 'Dec-15'));
        result.push(this.getMonthData('Nov 2015', 'Nov-15'));
        result.push(this.getMonthData('Oct 2015', 'Oct-15'));
        result.push(this.getMonthData('Sep 2015', 'Sep-15'));
        result.push(this.getMonthData('Aug 2015', 'Aug-15'));
        result.push(this.getMonthData('Jul 2015', 'Jul-15'));
        result.push(this.getMonthData('Jun 2015', 'Jun-15'));
        result.push(this.getMonthData('May 2015', 'May-15'));
        result.push(this.getMonthData('Apr 2015', 'Apr-15'));
        result.push(this.getMonthData('Mar 2015', 'Mar-15'));
        result.push(this.getMonthData('Feb 2015', 'Feb-15'));
        result.push(this.getMonthData('Jan 2015', 'Jan-15'));
        result.push(this.getMonthData('Dec 2014', 'Dec-14'));
        result.push(this.getMonthData('Nov 2014', 'Nov-14'));
        result.push(this.getMonthData('Oct 2014', 'Oct-14'));
        result.push(this.getMonthData('Sep 2014', 'Sep-14'));
        result.push(this.getMonthData('Aug 2014', 'Aug-14'));
        result.push(this.getMonthData('Jul 2014', 'Jul-14'));
        result.push(this.getMonthData('Jun 2014', 'Jun-14'));
        result.push(this.getMonthData('May 2014', 'May-14'));
        result.push(this.getMonthData('Apr 2014', 'Apr-14'));
        result.push(this.getMonthData('Mar 2014', 'Mar-14'));
        result.push(this.getMonthData('Feb 2014', 'Feb-14'));
        result.push(this.getMonthData('Jan 2014', 'Jan-14'));
        result.push(this.getMonthData('Dec 2013', 'Dec-13'));
        result.push(this.getMonthData('Nov 2013', 'Nov-13'));
        result.push(this.getMonthData('Oct 2013', 'Oct-13'));
        result.push(this.getMonthData('Sep 2013', 'Sep-13'));
        result.push(this.getMonthData('Aug 2013', 'Aug-13'));
        result.push(this.getMonthData('Jul 2013', 'Jul-13'));
        result.push(this.getMonthData('Jun 2013', 'Jun-13'));
        result.push(this.getMonthData('May 2013', 'May-13'));
        result.push(this.getMonthData('Apr 2013', 'Apr-13'));
        result.push(this.getMonthData('Mar 2013', 'Mar-13'));
        result.push(this.getMonthData('Feb 2013', 'Feb-13'));
        result.push(this.getMonthData('Jan 2013', 'Jan-13'));
        result.push(this.getMonthData('Dec 2012', 'Dec-12'));
        result.push(this.getMonthData('Nov 2012', 'Nov-12'));
        result.push(this.getMonthData('Oct 2012', 'Oct-12'));
        result.push(this.getMonthData('Sep 2012', 'Sep-12'));
        result.push(this.getMonthData('Aug 2012', 'Aug-12'));
        result.push(this.getMonthData('Jul 2012', 'Jul-12'));
        result.push(this.getMonthData('Jun 2012', 'Jun-12'));
        result.push(this.getMonthData('May 2012', 'May-12'));
        result.push(this.getMonthData('Apr 2012', 'Apr-12'));
        result.push(this.getMonthData('Mar 2012', 'Mar-12'));
        result.push(this.getMonthData('Feb 2012', 'Feb-12'));
        result.push(this.getMonthData('Jan 2012', 'Jan-12'));
        result.push(this.getMonthData('Dec 2011', 'Dec-11'));
        result.push(this.getMonthData('Nov 2011', 'Nov-11'));
        result.push(this.getMonthData('Oct 2011', 'Oct-11'));
        result.push(this.getMonthData('Sep 2011', 'Sep-11'));
        result.push(this.getMonthData('Aug 2011', 'Aug-11'));
        result.push(this.getMonthData('Jul 2011', 'Jul-11'));
        result.push(this.getMonthData('Jun 2011', 'Jun-11'));
        result.push(this.getMonthData('May 2011', 'May-11'));
        result.push(this.getMonthData('Apr 2011', 'Apr-11'));
        result.push(this.getMonthData('Mar 2011', 'Mar-11'));
        result.push(this.getMonthData('Feb 2011', 'Feb-11'));
        result.push(this.getMonthData('Jan 2011', 'Jan-11'));
        result.push(this.getMonthData('Dec 2010', 'Dec-10'));
        result.push(this.getMonthData('Nov 2010', 'Nov-10'));
        result.push(this.getMonthData('Oct 2010', 'Oct-10'));
        result.push(this.getMonthData('Sep 2010', 'Sep-10'));
        result.push(this.getMonthData('Aug 2010', 'Aug-10'));
        result.push(this.getMonthData('Jul 2010', 'Jul-10'));
        result.push(this.getMonthData('Jun 2010', 'Jun-10'));
        result.push(this.getMonthData('May 2010', 'May-10'));
        result.push(this.getMonthData('Apr 2010', 'Apr-10'));
        
        
        return result;
    
    }


    static getMonthData(
        value: string,
        text: string
    ): FormMonth{
        let result = new FormMonth();
        result.value = value;
        result.text = text;

        return result;
    }


}