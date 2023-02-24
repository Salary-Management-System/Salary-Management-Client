import {
  animate,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { faHome, faCalendarDays, faSitemap, faDesktop, faArrowRight, faAngleRight, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

interface IRowMenu {
  icon? : any,
  featureName : string,
  path : string,
  isActive? : boolean,
  featureChild? : IRowMenu[],
  isExpand? : boolean
}

const rowMenu : IRowMenu[] = [
  { icon : faHome, featureName : 'Dashboard' , path : '/admin/dashboard', isActive : true },
  { icon : faDesktop, featureName : 'Payroll' , path : '/admin/payroll', isActive : false, isExpand : false, 
    featureChild : [
      { featureName : 'Bonus', path : '/admin/payroll/bonuses', isActive : false },
      { featureName : 'Deduction', path : '/admin/payroll/deductions', isActive : false },
      { featureName : 'Allowance', path : '/admin/payroll/allowances', isActive : false },
      { featureName : 'Payroll Type', path : '/admin/payroll/payroll-types', isActive : false }
    ]
  },
  { icon : faSitemap, featureName : 'Salary Bracket' , path : '/admin/bracket', isActive : false, isExpand : false,
    featureChild : [
      { featureName : 'Postition', path : '/admin/bracket/positions', isActive : false },
      { featureName : 'Department', path : '/admin/bracket/departments', isActive : false },
      { featureName : 'Level', path : '/admin/bracket/levels', isActive : false }
    ]
  },
  { icon : faCalendarDays, featureName : 'Timesheet' , path : '/admin/timsheet', isActive : false},
  { icon : faPeopleGroup, featureName : 'Employee', path : '/admin/employee', isActive : false }
]
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('hideLabel', [
      state('in', style({ width : '100%' })),
      state('out', style({ width : '70px'})),
      transition('in<=>out', animate('400ms ease-in-out'))
    ]),
    trigger('showSubMenu', [
      transition(':enter', [
        style({ height : 0, overflow : 'hidden' }),
        query('.sub-row-menu', [
          style({ opacity : 0, transform : 'translateY(-50px)' })
        ]),
        sequence([
          animate('200ms', style({ height : '*' })),
          query('.sub-row-menu', [
            stagger(-50, [
              animate('400ms ease', style({ opacity : 1, transform : 'none' }))
            ])
          ])
        ])
      ]),
      transition(':leave', [
        style({ height : '*', overflow : 'hidden' }),
        query('.sub-row-menu', [
          style({ opacity : 1, transform : 'none' })
        ]),
        sequence([
          query('.sub-row-menu', [
            stagger(50, [
              animate('400ms ease', style({ opacity : 0, transform : 'translateY(-50px)' }))
            ])
          ]),
          animate('200ms', style({ height : '0' }))
        ])
      ])
    ]),
    trigger('rotate', [
      state('in', style({ transform : 'rotate(90deg)' })),
      state('out', style({ transform : 'rotate(0)' })),
      transition('in<=>out', animate('250ms ease-in-out'))
    ])
  ],
})
export class SidebarComponent implements OnInit {
  homeIcon = faHome;
  arrowRight = faAngleRight;
  expandLabel = 'in';
  isExpand = false;
  listFeatures = rowMenu;
  @ViewChildren('rowMenu') rowMenu : QueryList<ElementRef<HTMLLIElement>>;
  constructor() {}

  ngOnInit(): void {}
  onChangeCategory(idRow : string, childId? : string) {
    this.listFeatures.map(row => {
      if(row.featureName == idRow) {
        row.isActive = true;
      } else {
        if(row.isExpand) row.isExpand = false
        row.isActive = false;
      }

      row.featureChild && row.featureChild.forEach(child => {
        if(child.featureName == childId) {
          child.isActive = true;
        } else {
          child.isActive = false;
        }
        return child;
      });
      return row;
    })
  }
}
