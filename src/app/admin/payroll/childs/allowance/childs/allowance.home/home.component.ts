import { Component, OnInit } from '@angular/core';
import { faCalendar, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { PayrollService } from 'src/app/services/payroll.service/payroll.service';
import { IAllowance } from '../../allowance.component';

@Component({
  selector: 'app-allowance-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class AllowanceHomeComponent implements OnInit {
  iconCalendar = faCalendar;
  iconEdit = faPenToSquare;
  iconDel = faTrashCan;
  allowances : IAllowance[];
  constructor(
    private _payrollService : PayrollService
  ) { }

  ngOnInit(): void {
    this._payrollService.loadAllowances().then(data => this.allowances = data);
  }

}
