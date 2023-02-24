import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IDepartment } from 'src/app/services/department.service/department.service';
import { IPosition, IPositionNested } from 'src/app/services/position.service/position.service';
import { SalaryBracketService } from 'src/app/services/salary-bracket.service/salary-bracket.service';

@Component({
  selector: 'app-position.home',
  templateUrl: './position.home.component.html',
  styleUrls: ['./position.home.component.css']
})
export class PositionHomeComponent implements OnInit {
  listPositions : IPositionNested[];
  listPositionsForDisplay : IPositionNested[];
  iconEdit = faPenToSquare;
  iconDel = faTrashCan;
  iconCalendar = faCalendar;
  isShowOptions = false;
  listDeparments : IDepartment[];
  listDeparmentsForDisplay : IDepartment[];
  selectedDepartments : string;
  constructor(private _salary_bracketService : SalaryBracketService) { }

  ngOnInit(): void {
    this._salary_bracketService.positionService.getAllPositions().then(data => {
      this.listPositions = data.length > 0 ? data : [];
      this.listPositionsForDisplay = this.listPositions;
    });
    this._salary_bracketService.departmentService.getAllDepartments().then(data => {
      this.listDeparments = data.length > 0 ? data : []
      this.listDeparmentsForDisplay = this.listDeparments;
    });
    this.selectedDepartments = '';
  }

  onAutocompleteFilter() {
    this.filter();
  }

  onShowOption() {
    this.isShowOptions = !this.isShowOptions;
  }

  onSelect(department : string) {
    this.selectedDepartments = department;
    this.filter();
    this.onShowOption();
  }

  filter() {
    const key = this.selectedDepartments.toLowerCase();
    if(key.length > 0) {
      this.listDeparmentsForDisplay = this.listDeparments.filter(dec => dec.department_name.toLowerCase().includes(key));
      this.listPositionsForDisplay = this.listPositions.filter(pos => pos.department.department_name.toLowerCase().includes(key));
    } else {
      this.listDeparmentsForDisplay = [...this.listDeparments];
      this.listPositionsForDisplay = [...this.listPositions];
    }
    this.isShowOptions = key.length > 0;
  }
}
