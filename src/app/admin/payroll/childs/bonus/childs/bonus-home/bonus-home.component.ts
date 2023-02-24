import { Component, OnInit } from '@angular/core';
import { faCalendar, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IBonus } from 'src/app/services/bonus.service/bonus.service';
import { PayrollService } from 'src/app/services/payroll.service/payroll.service';

@Component({
  selector: 'app-bonus-home',
  templateUrl: './bonus-home.component.html',
  styleUrls: ['./bonus-home.component.css']
})
export class BonusHomeComponent implements OnInit {
  bonuses : IBonus[];
  iconEdit = faPenToSquare;
  iconDel = faTrashCan;
  iconCalendar = faCalendar
  constructor(private _payrollService : PayrollService) { }

  ngOnInit(): void {
    this._payrollService.bonusService.getAllBonuses().then(data => this.bonuses = (data as []).length == 0 ? [] : data )
  }

}
