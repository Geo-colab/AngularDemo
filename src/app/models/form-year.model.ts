export class FormYear {

    value: string;
    text: string;

    static getYear(): FormYear[] {
        
        let result: FormYear[] = [];

        result.push(this.getYearData('2122', '2021/2022'));
        result.push(this.getYearData('2021', '2020/2021'));
        result.push(this.getYearData('1920', '2019/2020'));
        result.push(this.getYearData('1819', '2018/2019'));
        result.push(this.getYearData('1718', '2017/2018'));
        result.push(this.getYearData('1617', '2016/2017'));
        result.push(this.getYearData('1516', '2015/2016'));
        result.push(this.getYearData('1415', '2014/2015'));
        result.push(this.getYearData('1314', '2013/2014'));
        result.push(this.getYearData('1213', '2012/2013'));
        result.push(this.getYearData('1112', '2011/2012'));
        result.push(this.getYearData('1011', '2010/2011'));
        
        return result;
    
    
    }

    static getYearData(
        value: string,
        text: string
    ): FormYear{
        let result = new FormYear();
        result.value = value;
        result.text = text;

        return result;
    }


}