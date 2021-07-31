import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Salary } from '../models/salary.model';

export class SalaryData implements InMemoryDbService {

  createDb() {
    
    const salaries: Salary[] = Salary.getTestData(2);
    
    return { salaries };
  }
}