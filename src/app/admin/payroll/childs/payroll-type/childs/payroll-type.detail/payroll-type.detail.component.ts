import { Component, Input, OnInit } from '@angular/core';
import { PayrollService } from 'src/app/services/payroll.service/payroll.service';
import { IProperty } from '../payroll-type-create/payroll-type-create.component';

@Component({
  selector: 'app-payroll-type.detail',
  templateUrl: './payroll-type.detail.component.html',
  styleUrls: ['./payroll-type.detail.component.css']
})
export class PayrollTypeDetailComponent implements OnInit {
  listPros : IProperty;
  listProsDisplay : IProperty;
  constructor(private _payrollService : PayrollService) { }

  ngOnInit(): void {
    this._payrollService.bonusService.getAllBonuses().then(data => this.listPros.bonus = data);
    this._payrollService.deductionService.getAllDeductions().then(data => this.listPros.deduction = data);
    this._payrollService.loadAllowances().then(data => this.listPros.allowance = data);
  }

}
