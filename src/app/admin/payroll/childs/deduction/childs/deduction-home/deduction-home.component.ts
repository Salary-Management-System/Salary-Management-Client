import { Component, OnInit } from '@angular/core';
import { faCalendar, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IDeduction } from 'src/app/services/deduction.service/deduction.service';
import { PayrollService } from 'src/app/services/payroll.service/payroll.service';
import { fadeUpIn } from 'src/utils/animations';

@Component({
  selector: 'app-deduction-home',
  templateUrl: './deduction-home.component.html',
  styleUrls: ['./deduction-home.component.css'],
  animations : [
    fadeUpIn
  ]
})
export class DeductionHomeComponent implements OnInit {
  iconEdit = faPenToSquare;
  iconDel = faTrashCan;
  iconCalendar = faCalendar;
  deductions : IDeduction[];
  resourceOptions : any;
  resourceFilter : string;
  percentageSelection : number;
  isShowResource = false;
  constructor(
    private _payrollService : PayrollService
  ) { }

  ngOnInit(): void {
    this._payrollService.deductionService.getAllDeductions().then(data => this.deductions = (data as []).length == 0 ? [] : data);
    this.resourceOptions = Object.values(this._payrollService.deductionService.resources);
    this.resourceFilter = this.resourceOptions[0];
    this.percentageSelection = 0;
  }

  onExpandResourceOptions() {
    this.isShowResource = !this.isShowResource;
  }
  onChangeResource(input : string) {
    console.log('here')
    this.resourceFilter = input;
    this.onExpandResourceOptions();
  }

  onSelectPercent(input  : HTMLInputElement) {
    this.percentageSelection = parseInt(input.value);
  }
}
