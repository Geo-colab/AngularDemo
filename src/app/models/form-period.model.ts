export class FormPeriod {

    value: string;
    text: string;

    static getPeriod(): FormPeriod[] {
        
        let result: FormPeriod[] = [];

        result.push(this.getPeriodData('PY', 'Enter for Full Tax Year'));
        result.push(this.getPeriodData('PM', 'Enter Per Month'));
        result.push(this.getPeriodData('PD', 'Enter for Specific Date'));
    
        
        return result;
    
    }


    static getPeriodData(
        value: string,
        text: string
    ): FormPeriod{
        let result = new FormPeriod();
        result.value = value;
        result.text = text;

        return result;
    }


}