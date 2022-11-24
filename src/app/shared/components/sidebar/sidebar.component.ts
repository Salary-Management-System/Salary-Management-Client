import {
  animate,
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
import { faHome } from '@fortawesome/free-solid-svg-icons';

interface IRowMenu {
  icon : any,
  featureName : string,
  isActive : boolean
}

const rowMenu : IRowMenu[] = [
  { icon : faHome, featureName : 'Dashboard' , isActive : true },
  { icon : faHome, featureName : 'Payroll Management' , isActive : false },
  { icon : faHome, featureName : 'Salary Management' , isActive : false },
  { icon : faHome, featureName : 'Timesheet Management' , isActive : false}
]
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('hideLabel', [
      // state('in', style({ width : '100%' })),
      // state('out', style({ width : '0'})),
      // transition('in<=>out', animate('400ms ease-in-out'))
      state('in', style({ width : '100%' })),
      state('out', style({ width : '70px'})),
      transition('in<=>out', animate('400ms ease-in-out'))
    ])
  ],
})
export class SidebarComponent implements OnInit {
  homeIcon = faHome;
  expandLabel = 'in';
  listFeatures = rowMenu;
  @ViewChildren('rowMenu') rowMenu : QueryList<ElementRef<HTMLLIElement>>;
  constructor() {}

  ngOnInit(): void {}
  onChangeCategory(idRow : string) {
    this.listFeatures.map(row => {
      if(row.featureName == idRow) {
        row.isActive = true;
      } else {
        row.isActive = false;
      }

      return row;
    })
  }
}
