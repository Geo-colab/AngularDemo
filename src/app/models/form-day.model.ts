export class FormDay {

    value: string;
    text: string;

    static getDayDay(): FormDay[] {
        
        let result: FormDay[] = [];

        result.push(this.getDayData('1', '1'));
        result.push(this.getDayData('2', '2'));
        result.push(this.getDayData('3', '3'));
        result.push(this.getDayData('4', '4'));
        result.push(this.getDayData('5', '5'));
        result.push(this.getDayData('6', '6'));
        result.push(this.getDayData('7', '7'));
        result.push(this.getDayData('8', '8'));
        result.push(this.getDayData('9', '9'));
        result.push(this.getDayData('10', '10'));
        result.push(this.getDayData('11', '11'));
        result.push(this.getDayData('12', '12'));
        result.push(this.getDayData('13', '13'));
        result.push(this.getDayData('14', '14'));
        result.push(this.getDayData('15', '15'));
        result.push(this.getDayData('16', '16'));
        result.push(this.getDayData('17', '17'));
        result.push(this.getDayData('18', '18'));
        result.push(this.getDayData('19', '19'));
        result.push(this.getDayData('20', '20'));
        result.push(this.getDayData('21', '21'));
        result.push(this.getDayData('22', '22'));
        result.push(this.getDayData('23', '23'));
        result.push(this.getDayData('24', '24'));
        result.push(this.getDayData('25', '25'));
        result.push(this.getDayData('26', '26'));
        result.push(this.getDayData('27', '27'));
        result.push(this.getDayData('28', '28'));
        result.push(this.getDayData('29', '29'));
        result.push(this.getDayData('30', '30'));
        result.push(this.getDayData('31', '31'));
             
        return result;  
    }

    static getDayMonth(): FormDay[] {
        
        let result: FormDay[] = [];

        result.push(this.getDayData('Jan', 'January'));
        result.push(this.getDayData('Feb', 'February'));
        result.push(this.getDayData('Mar', 'March'));
        result.push(this.getDayData('Apr', 'April'));
        result.push(this.getDayData('May', 'May'));
        result.push(this.getDayData('Jun', 'June'));
        result.push(this.getDayData('Jul', 'July'));
        result.push(this.getDayData('Aug', 'August'));
        result.push(this.getDayData('Sep', 'September'));
        result.push(this.getDayData('Oct', 'October'));
        result.push(this.getDayData('Nov', 'November'));
        result.push(this.getDayData('Dec', 'December'));

        return result;
    }

    static getDayYear(): FormDay[] {

        let result: FormDay[] = [];

        result.push(this.getDayData('2022', '2022'));
        result.push(this.getDayData('2021', '2021'));
        result.push(this.getDayData('2020', '2020'));
        result.push(this.getDayData('2019', '2019'));
        result.push(this.getDayData('2018', '2018'));
        result.push(this.getDayData('2017', '2017'));
        result.push(this.getDayData('2016', '2016'));
        result.push(this.getDayData('2015', '2015'));
        result.push(this.getDayData('2014', '2014'));
        result.push(this.getDayData('2013', '2013'));
        result.push(this.getDayData('2012', '2012'));
        result.push(this.getDayData('2011', '2011'));
        result.push(this.getDayData('2010', '2010'));

        return result;
    }


    static getDayData(
        value: string,
        text: string
    ): FormDay{
        let result = new FormDay();
        result.value = value;
        result.text = text;

        return result;
    }


}