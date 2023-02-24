import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { IBonus } from 'src/app/services/bonus.service/bonus.service';
import { IDeduction } from 'src/app/services/deduction.service/deduction.service';
import { IPayrollType } from 'src/app/services/payroll-type.service/payroll-type.service';
import { PayrollService } from 'src/app/services/payroll.service/payroll.service';
import { IAllowance } from '../../../allowance/allowance.component';

export interface IProperty {
  bonus : any[],
  deduction : any[],
  allowance : any[]
}

export enum TypeProp {
  Bonus = 'bonus',
  Allowance = 'allowance',
  Deduction = 'deduction'
}

@Component({
  selector: 'app-payroll-type-create',
  templateUrl: './payroll-type-create.component.html',
  styleUrls: ['./payroll-type-create.component.css']
})
export class PayrollTypeCreateComponent implements OnInit {
  properties : IProperty = {
    bonus : [],
    deduction : [],
    allowance : []
  };
  keyPros : any[] = [];
  displayValues : any[] = [];
  propertiesSelected : IProperty = {
    bonus : [],
    deduction : [],
    allowance : []
  };
  displayPropertiesSelected : string[] = [];
  iconCalendar = faCalendar;
  iconClose = faClose;
  isShowProperties = false;
  constructor(
    private _payrollService : PayrollService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this._payrollService.deductionService.getAllDeductions().then(data => {
      data.forEach((dec : IDeduction)  => {
        this.properties['deduction'].push({ id : dec.deduction_id, name : dec.deduction_name });
      })
    })
    // @ts-ignore
    this._payrollService.bonusService.getAllBonuses().then(data => {
      data.forEach((bonus : IBonus) => {
        this.properties['bonus'].push({ id : bonus.bonus_id, name : bonus.bonus_name })
      })
    })
    // @ts-ignore
    this._payrollService.loadAllowances().then(data => {
      data.forEach((allowance : IAllowance) => {
        this.properties['allowance'].push({ id : allowance.allowance_id, name : allowance.allowance_name });
      })
    });
    for(const [key, value] of Object.entries(this.properties)) {
      this.keyPros.push(key);
      this.displayValues.push(value)
    }
  }

  onSelect(key : TypeProp , value : any) {
    const index = this.keyPros.indexOf(key);
    // @ts-ignore
    this.displayValues[index] = this.displayValues[index].filter(one => {
      return one.name !== value;
    })

    this.propertiesSelected[key].push(value);
    this.displayPropertiesSelected.push(value)
  }

  onSubmit(form : NgForm) {
    if(form.valid) {
      let data : IPayrollType = {
        type_name : '',
        formula : '',
        effect_date : new Date(),
        expired_date : new Date(),
        applicable_object : null,
        properties : ''
      };
      for(let [key, value] of Object.entries(form.value)) {
        if(key == 'effect_date' || key == 'expired_date') {
          const dateValue = new Date(Object.values(value as NgbDateStruct).join('-'))
          data[key] = dateValue;
        } else {
          // @ts-ignore
          data[key] = value;
        }
      }
      data.properties = JSON.stringify(this.propertiesSelected)

      console.log(data)
      // @ts-ignore
      this._payrollService.typeSerivce.postType(data);
    }
  }
}
