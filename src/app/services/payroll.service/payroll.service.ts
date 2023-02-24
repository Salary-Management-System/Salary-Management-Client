import { Injectable } from '@angular/core';
import { IAllowance } from 'src/app/admin/payroll/childs/allowance/allowance.component';
import { ApiServiceService } from '../api.service/api-service.service';
import { BonusService } from '../bonus.service/bonus.service';
import { DeductionService } from '../deduction.service/deduction.service';
import { PayrollTypeService } from '../payroll-type.service/payroll-type.service';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  constructor(
    private _apiService : ApiServiceService,
    private _bonusService : BonusService,
    private _deductionService : DeductionService,
    private _typeSerivce : PayrollTypeService
  ) {}

  async loadAllowances() {
    const res = await this._apiService.get('allowances')
    if(res.data.code === 200) {
      return res.data.data
    } else {
      return [];
    }
  }
  postAllowance(input : IAllowance) {
    try {
      this._apiService.post('allowances', input)
    } catch (error) {
      console.log(error);
    }
  }

  get bonusService() {
    return this._bonusService;
  }
  get deductionService() {
    return this._deductionService;
  }
  get typeSerivce() {
    return this._typeSerivce;
  }
}
