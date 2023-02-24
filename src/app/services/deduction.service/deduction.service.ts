import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api.service/api-service.service';

export enum Resource {
  Salary = "Salary",
  Bussiness = "Bussiness"
}
export interface IDeduction {
  deduction_id : string;
  deduction_name : string;
  from_resource : Resource;
  effect_date : Date | null;
  by_percentage : number;
}
@Injectable({
  providedIn: 'root'
})
export class DeductionService {
  resources = Resource;
  constructor(private _apiService : ApiServiceService) { }
  async getAllDeductions() {
    try {
      const res = await this._apiService.get('deductions')
      if(res.data.code === 200) {
        return res.data.data
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }

  postDeduction(input : IDeduction) {
    try {
      this._apiService.post('deductions', input)
    } catch (error) {
      console.log(error);
    }
  }
}
