import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api.service/api-service.service';

export interface IPayrollType {
  payroll_type_id? : number,
  properties : string[] | string,
  formula : string,
  effect_date : Date | null,
  expired_date : Date | null,
  applicable_object : string[] | string | null,
  type_name : string
}
@Injectable({
  providedIn: 'root'
})
export class PayrollTypeService {
  basePath = 'payroll-types';
  constructor(private _apiService : ApiServiceService) { }
  async getAllTypes() {
    try {
      const res = await this._apiService.get(this.basePath)
      if(res.data.code === 200) {
        return res.data.data
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }

  postType(input : IPayrollType) {
    try {
      this._apiService.post(this.basePath, input)
    } catch (error) {
      console.log(error);
    }
  }
}
