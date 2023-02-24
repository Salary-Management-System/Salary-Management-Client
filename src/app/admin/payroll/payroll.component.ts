import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { fadeUpIn } from 'src/utils/animations';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css'],
  animations : [fadeUpIn]
})
export class PayrollComponent implements OnInit, AfterViewChecked {
  constructor() { }
  ngOnInit(): void {
    
  }
  ngAfterViewChecked(): void {
  }
}
