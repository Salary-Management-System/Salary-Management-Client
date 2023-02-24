import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { IBonus } from 'src/app/services/bonus.service/bonus.service';
import { PayrollService } from 'src/app/services/payroll.service/payroll.service';

@Component({
  selector: 'app-bonus-create',
  templateUrl: './bonus-create.component.html',
  styleUrls: ['./bonus-create.component.css']
})
export class BonusCreateComponent implements OnInit {
  iconCalendar = faCalendar;
  bonus_id : string;
  bonus_name : string;
  constructor(private _payrollService : PayrollService) { }

  ngOnInit(): void {
  }


  postBonus(form : NgForm) {
    const effect_date = Object.values(form.value['effect']).join(',')
    const expired_date = Object.values(form.value['expired']).join(',')
    const input : IBonus = {
      bonus_id : this.bonus_id,
      bonus_name : form.value['name'],
      effect_date : new Date(effect_date),
      expired_date : new Date(expired_date),
      basic_amount : form.value['basic_amount']
    }
    this._payrollService.bonusService.postBonus(input)
  }

  onAutomateCreateId() {
    this.bonus_id = this.bonus_name.split(' ').map(word => {
      return word[0]
    }).join('');
  }
}
