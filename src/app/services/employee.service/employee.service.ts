import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api.service/api-service.service';
import { IJobFunction, IJobFunctionNested } from '../job-title.service/job-title.service';
export enum PaymentType {
  Gross,
  Net
}
export interface IEmployee {
  employee_id : string,
  firstname : string,
  lastname : string,
  address : string,
  phone : string,
  payment_type : PaymentType
  current_salary : number,
  hire_date: Date,
  job_id : string
}

export interface IEmployeeNested extends IEmployee {
  job_function : IJobFunctionNested
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  basePath = 'employees'
  constructor(private _apiService : ApiServiceService) { }
  async getAllEmployees() {
    try {
      const res = await this._apiService.get(this.basePath);
      if(res.data.code === 200) {
        return res.data.data;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }
}
