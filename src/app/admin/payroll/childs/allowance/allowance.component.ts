import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApiServiceService } from 'src/app/services/api.service/api-service.service';
import { PayrollService } from 'src/app/services/payroll.service/payroll.service';
import { fadeUpIn } from 'src/utils/animations'


export interface IAllowance {
  allowance_id? : number,
  allowance_name : string,
  effect_date : Date,
  expired_date : Date,
  basic_amount : number
}
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10) + 10,
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date
      ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
      : '';
  }
}
@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.css'],
  animations : [fadeUpIn],
  providers : [
    { provide : NgbDateParserFormatter, useClass : CustomDateParserFormatter }
  ]
})
export class AllowanceComponent implements OnInit {
  effectDate! : NgbDateStruct
  constructor(
    ) {}

  ngOnInit(): void {
    
  }
}