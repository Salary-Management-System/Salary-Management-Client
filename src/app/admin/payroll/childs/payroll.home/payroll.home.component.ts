import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faXmarkCircle, faArrowAltCircleRight, faSliders } from '@fortawesome/free-solid-svg-icons';
const recentPayroll = [{"payroll_id":1,"payroll_name":"Payroll May 2022","created_at":"3/13/2022","payment_date":"6/6/2022","payroll_type_id":1},
{"payroll_id":2,"payroll_name":"Payroll May 2022","created_at":"8/8/2022","payment_date":"6/12/2022","payroll_type_id":2},
{"payroll_id":3,"payroll_name":"Payroll May 2022","created_at":"4/6/2022","payment_date":"2/3/2022","payroll_type_id":3},
{"payroll_id":4,"payroll_name":"mattis pulvinar nulla pede","created_at":"10/2/2022","payment_date":"12/18/2021","payroll_type_id":4},
{"payroll_id":5,"payroll_name":"mauris non ligula","created_at":"11/26/2022","payment_date":"12/25/2021","payroll_type_id":5},
{"payroll_id":6,"payroll_name":"laoreet ut rhoncus aliquet","created_at":"5/26/2022","payment_date":"4/22/2022","payroll_type_id":6},
{"payroll_id":7,"payroll_name":"quisque arcu libero","created_at":"11/30/2021","payment_date":"9/20/2022","payroll_type_id":7},
{"payroll_id":8,"payroll_name":"suscipit a feugiat et eros","created_at":"6/16/2022","payment_date":"6/12/2022","payroll_type_id":8},
{"payroll_id":9,"payroll_name":"posuere metus vitae ipsum aliquam","created_at":"11/16/2022","payment_date":"6/17/2022","payroll_type_id":9},
{"payroll_id":10,"payroll_name":"in sagittis dui","created_at":"2/16/2022","payment_date":"10/24/2022","payroll_type_id":10}]
@Component({
  selector: 'app-payroll-home',
  templateUrl: './payroll.home.component.html',
  styleUrls: ['./payroll.home.component.css']
})
export class PayrollHomeComponent implements OnInit {
  checkIcon = faCheckCircle;
  xmartIcon = faXmarkCircle;
  rightArrow = faArrowAltCircleRight;
  slideIcon = faSliders;
  recentPayroll = recentPayroll.map(each => {
    return {...each, isPayment : (Math.floor(Math.random() * 10)) % 2 == 0 ? true : false}
  });
  constructor() { }

  ngOnInit(): void {
  }

}
