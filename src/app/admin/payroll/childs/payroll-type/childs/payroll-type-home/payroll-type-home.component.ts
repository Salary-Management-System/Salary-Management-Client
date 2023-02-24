import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { IPayrollType } from 'src/app/services/payroll-type.service/payroll-type.service';
import { PayrollService } from 'src/app/services/payroll.service/payroll.service';

@Component({
  selector: 'app-payroll-type-home',
  templateUrl: './payroll-type-home.component.html',
  styleUrls: ['./payroll-type-home.component.css']
})
export class PayrollTypeHomeComponent implements OnInit {
  payrollTypes : IPayrollType[];
  iconEdit = faPenToSquare;
  iconCalendar = faCalendar;
  constructor(private _payrollService : PayrollService) { }

  ngOnInit(): void {
    this._payrollService.typeSerivce.getAllTypes().then(data => this.payrollTypes = data);
  }

}
