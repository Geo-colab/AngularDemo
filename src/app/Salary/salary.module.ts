
import * as DI from './dateInfo'; // import class DataInfo
import * as SI from './salaryinfo';// Import class SalaryInfo

class Salary implements ISalary {

dInfo: DI.DateInfo = new DI.DateInfo(); // Initliaize class DataInfo
sInfo: SI.SalaryInfo = new SI.SalaryInfo(); // Initialize class SalaryInfo

companyName = "";
dateOption = "";
datePeriod = "";
strSalary = "";
salaryAmount = 0;
salaryCurrency = "";

salaryobj: ISalary = { //create ISalary object 
companyName: this.sInfo.NameOfCompany,
dateOption: this.dInfo.periodDate,
datePeriod: this.dInfo.selectedDate,
salaryAmount: this.sInfo.salaryA, 
salaryCurrency: this.sInfo.sCurrency
}

salaryArr: ISalary[] = []; // initilaize ISalary array to keep info

updateSalary (): void { // Populate array with salary obect 
    this.salaryArr.push(this.salaryobj);
} 

displaySalary (): void { //Display the salary objects

    for (let index = 0; index<this.salaryArr.length; index++)
    {
       const salaries: ISalary = this.salaryArr[index];
       console.log(salaries.companyName + ' ' + salaries.dateOption + ' ' + salaries.datePeriod + 
                    ' ' + salaries.salaryAmount + salaries.salaryCurrency);
    }

}

}