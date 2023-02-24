import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faEye, faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowTrendDown, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { ChartData, ChartType } from 'chart.js'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function months(config : any) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}

const roundDecimal = function(count : number, input : number) {
  const [_, decimal] = input.toLocaleString().split('.')
  if(decimal) {
    let i = 1;
    while(i <= count) {
      input *= i;
      i++;
    };
  
    const result = Math.round(input);
    return result/(Math.pow(10, count));
  } else {
    return input;
  }
}

const activities = [{"user_id":"5903448c-f06b-4588-8a30-f1ad6124b4ba","IP":"17.200.159.130/1","activity":"In congue. Etiam justo. Etiam pretium iaculis justo.","created_at":"3/18/2022"},
{"user_id":"21ac4b06-28f4-463d-b9c3-275d79460baa","IP":"14.126.221.252/14","activity":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.","created_at":"2/4/2022"},
{"user_id":"f3ae2a84-11d4-4b37-85f0-3684bc45a7d7","IP":"76.163.66.236/29","activity":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","created_at":"7/29/2022"},
{"user_id":"45dc3577-378c-48f0-bb45-aa97fc5a2524","IP":"162.121.30.38/21","activity":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","created_at":"5/6/2022"},
{"user_id":"1893a045-4767-4873-8124-7544d9d68cae","IP":"234.61.9.72/28","activity":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","created_at":"3/30/2022"},
{"user_id":"4736362a-bb17-4304-9161-3cb1f35e2de4","IP":"212.157.228.151/31","activity":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","created_at":"4/25/2022"},
{"user_id":"854e3d97-11ad-4f2e-ad40-f7ee8438ddf4","IP":"56.3.223.4/19","activity":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","created_at":"11/29/2022"},
{"user_id":"cac63837-9c00-4b75-8a44-5a14ede22eb5","IP":"63.197.131.161/30","activity":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.","created_at":"1/1/2022"},
{"user_id":"f1085b41-ddbb-413a-8e54-c990de68264c","IP":"167.14.133.135/8","activity":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","created_at":"11/26/2022"},
{"user_id":"c2c95c1e-c063-4732-9306-723c9ae38b58","IP":"40.163.233.21/11","activity":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","created_at":"9/30/2022"}]

const recentPayroll = [{"payroll_id":1,"payroll_name":"magna at nunc","created_at":"3/13/2022","payment_date":"6/6/2022","payroll_type_id":1},
{"payroll_id":2,"payroll_name":"magna ac consequat metus","created_at":"8/8/2022","payment_date":"6/12/2022","payroll_type_id":2},
{"payroll_id":3,"payroll_name":"scelerisque mauris sit","created_at":"4/6/2022","payment_date":"2/3/2022","payroll_type_id":3},
{"payroll_id":4,"payroll_name":"mattis pulvinar nulla pede","created_at":"10/2/2022","payment_date":"12/18/2021","payroll_type_id":4},
{"payroll_id":5,"payroll_name":"mauris non ligula","created_at":"11/26/2022","payment_date":"12/25/2021","payroll_type_id":5},
{"payroll_id":6,"payroll_name":"laoreet ut rhoncus aliquet","created_at":"5/26/2022","payment_date":"4/22/2022","payroll_type_id":6},
{"payroll_id":7,"payroll_name":"quisque arcu libero","created_at":"11/30/2021","payment_date":"9/20/2022","payroll_type_id":7},
{"payroll_id":8,"payroll_name":"suscipit a feugiat et eros","created_at":"6/16/2022","payment_date":"6/12/2022","payroll_type_id":8},
{"payroll_id":9,"payroll_name":"posuere metus vitae ipsum aliquam","created_at":"11/16/2022","payment_date":"6/17/2022","payroll_type_id":9},
{"payroll_id":10,"payroll_name":"in sagittis dui","created_at":"2/16/2022","payment_date":"10/24/2022","payroll_type_id":10}]
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations : [
    trigger('fadeUpIn', [
      transition(':enter', [
        style({ transform : 'translateY(20px)', opacity : 0 }),
        animate('250ms', style({ transform : 'translateY(0)', opacity : 1 }))
      ]),
      transition(':leave', [
        animate('250ms', style({ transform : 'translateY(20px)', opacity : 0 }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  eyeIcon = faEye;
  checkIcon = faCheckCircle;
  xmartIcon = faXmarkCircle;
  trendUpIcon = faArrowTrendUp;
  trendDownIcon = faArrowTrendDown;
  doughnutChartLabels : string[] = ['Basic Salary', 'Bonus', 'Deduction', 'Allowance'];
  doughtnutData = [4000000, 34000000, 10000000, 8000000]
  doughtnutDataPrev = [2000000, 594492, 4000000, 8101839]
  doughnutChartDatas : ChartData<'doughnut'> = {
    labels : this.doughnutChartLabels,
    datasets : [
      { data : this.doughtnutData }
    ],
  }
  doughnutChartType : ChartType = 'doughnut';

  lineChartLabels : string[] = months({ count : 7 })
  lineChartData = [480, 532, 566, 1000, 90, 100, 267, 182];
  lineChartDatas : ChartData<'line'> = {
    labels : this.lineChartLabels,
    datasets : [
      { 
        data : this.lineChartData,
        label : 'Salary Fund - Current year',
        backgroundColor : 'hsl(231, 41%, 34%, 0.5)',
        borderColor : '#8890b5',
        fill : true,
        tension : 0.1
      }
    ]
  }
  lineChartType : ChartType = 'line';

  activities = activities;
  recentPayroll = recentPayroll.map(each => {
    return {...each, isPayment : (Math.floor(Math.random() * 10)) % 2 == 0 ? true : false}
  });
  constructor() { }

  ngOnInit(): void {
  }

  sum(total : number, currentValue : number) : number {
    return total + currentValue
  }
  calPercentage(current : number, prev : number) {
    return roundDecimal(2, (Math.abs((prev - current))*100)/prev)
  }
}
