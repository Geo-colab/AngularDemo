import { stringify } from "@angular/compiler/src/util";

export class Salary1 {

    constructor (
    
        public companyName = '',
        public timePeriod = '', 
        public date = '', 
        public taxYear = '', 
        public taxMonth = '', 
        public taxDayDay = '', 
        public taxDayMonth = '', 
        public taxDayYear = '', 
        public salaryAmount = '', 
        public currencyCode = ''
    ){}; 
}