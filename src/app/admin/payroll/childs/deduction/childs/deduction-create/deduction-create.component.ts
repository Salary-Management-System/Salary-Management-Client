import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { IDeduction } from 'src/app/services/deduction.service/deduction.service';
import { PayrollService } from 'src/app/services/payroll.service/payroll.service';
import { fadeUpIn } from 'src/utils/animations';

@Component({
  selector: 'app-deduction-create',
  templateUrl: './deduction-create.component.html',
  styleUrls: ['./deduction-create.component.css'],
  animations : [fadeUpIn]
})
export class DeductionCreateComponent implements OnInit {
  iconCalendar = faCalendarAlt;
  resourceOptions : any;
  resourceFilter : string;
  percentageSelection : number;
  isShowResource = false;
  deduction_id : string;
  deduction_name : string;
  allDeductionIDs : string[];
  constructor(private _payrollService : PayrollService) { }

  ngOnInit(): void {
    this.loadDeductions();
    this.resourceOptions = Object.values(this._payrollService.deductionService.resources);
    this.resourceFilter = this.resourceOptions[0];
    this.percentageSelection = 0;
  }
  loadDeductions() {
    this._payrollService.deductionService.getAllDeductions().then(data => {
      // @ts-ignore
      this.allDeductionIDs = data.map(deduction => deduction.deduction_id);
    });
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

  postDeduction(form : NgForm) {
    const effect_date = Object.values(form.value['effect']).join(',')
    const input : IDeduction = {
      deduction_id : this.deduction_id,
      deduction_name : this.deduction_name,
      effect_date : new Date(effect_date),
      from_resource : form.value['from_resource'],
      by_percentage : form.value['percentage']
    }
    this._payrollService.deductionService.postDeduction(input);
    this.loadDeductions();
    form.reset();
  }
  onAutomateCreateId() {
    if(this.deduction_name.length > 0) {
      let temp = this.deduction_name.split(' ').map(word => {
        return word[0]
      }).join('');;
  
      const foundSame = this.allDeductionIDs.filter(dec => dec.includes(temp))
      if(foundSame.length > 0) {
        if(foundSame.length == 1) {
          temp += `-1`
        } else if(foundSame.length > 1) {
          let [_, stt] = foundSame[foundSame.length - 1].split('-');
          // @ts-ignore
          stt = parseInt(stt) + 1;
          temp += `-${stt}`
        }
      }
  
      this.deduction_id = temp;
    } else {
      this.deduction_id = '';
    }
  }
}
