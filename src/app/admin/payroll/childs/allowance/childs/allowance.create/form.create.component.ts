import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { PayrollService } from 'src/app/services/payroll.service/payroll.service';
import { IAllowance } from '../../allowance.component';

@Component({
  selector: 'app-form.create',
  templateUrl: './form.create.component.html',
  styleUrls: ['./form.create.component.css']
})
export class FormCreateComponent implements OnInit {
  iconCalendar = faCalendar;
  constructor(
    private _payrollService : PayrollService
  ) { }

  ngOnInit(): void {
  }


  postAllowace(form : NgForm) {
    const effect_date = Object.values(form.value['effect']).join(',')
    const expired_date = Object.values(form.value['expired']).join(',')
    const input : IAllowance = {
      allowance_name : form.value['name'],
      effect_date : new Date(effect_date),
      expired_date : new Date(expired_date),
      basic_amount : form.value['basic_amount']
    }
    this._payrollService.postAllowance(input)
  }
}
