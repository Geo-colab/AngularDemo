import { TaxDate } from "./tax-date.model";
import { TaxMonth } from "./tax-month.model";
import { TaxYear } from "./tax-year.model";
import { TimePeriod } from "./time-period.enum";

export class Salary {
    id: number | null;
    userId: number;
    companyName: string;
    timePeriod: TimePeriod;
    salaryAmount: number | null;
    currencyCode: string;

    taxDate?:TaxDate;
    taxMonth?:TaxMonth;
    taxYear?:TaxYear;

    static getTestData(userId: number): Salary[] {
        
        let result: Salary[] = [];

        let id = 1;

        //Salary 1
        let taxYear = new TaxYear();
        taxYear.year = '1920';
        result.push(this.getTestSalary(id, userId, 'My Test Company 1', 60000.43, 'USD', TimePeriod.PerTaxYear, taxYear, undefined, undefined));
    

        //salary 2
        id++;
        taxYear = new TaxYear();
        taxYear.year = '1819';
        result.push(this.getTestSalary(id, userId, 'My Test Company 2', 48000.63, 'EUR', TimePeriod.PerTaxYear, taxYear, undefined, undefined));

        //tax month salary
        id++;
        let taxMonth = new TaxMonth();
        taxMonth.month = 'Apr 2019';
        result.push(this.getTestSalary(id, userId, 'My Test Company 3', 12335.43, 'USD', TimePeriod.PerMonth, undefined, taxMonth, undefined));

        id++;
        taxMonth = new TaxMonth();
        taxMonth.month = 'Apr 2019'
        result.push(this.getTestSalary(id, userId, 'My Test Company 4', 46560.23, 'GBP', TimePeriod.PerMonth, undefined, taxMonth, undefined));

        //tax day salary 
        id++;
        let taxDate = new TaxDate();
        taxDate.day = '7';
        taxDate.month = 'Dec';
        taxDate.year = '2019';
        result.push(this.getTestSalary(id, userId, 'My Test Company 5', 800000.00, 'ZAR', TimePeriod.PerDay, undefined, undefined, taxDate));

        id++;
        taxDate = new TaxDate();
        taxDate.day = '7';
        taxDate.month = 'Dec';
        taxDate.year = '2019';
        result.push(this.getTestSalary(id, userId, 'My Test Company 6', 95630.00, 'CAD', TimePeriod.PerDay, undefined, undefined, taxDate));

        return result;
    }

    static getTestSalary(
        id: number,
        userId: number,
        companyName: string,
        salaryAmount: number,
        currencyCode: string,
        timePeriod: TimePeriod,
        taxYear?:TaxYear,
        taxMonth?:TaxMonth,
        taxDate?:TaxDate,      
    ): Salary {

        let result = new Salary();
        result.id = id;
        result.userId = userId;
        result.companyName = companyName;
        result.salaryAmount = salaryAmount;
        result.currencyCode = currencyCode;
        result.timePeriod = timePeriod;
        result.taxYear = taxYear;
        result.taxMonth = taxMonth;
        result.taxDate = taxDate;

        return result;
    }
    
   
}