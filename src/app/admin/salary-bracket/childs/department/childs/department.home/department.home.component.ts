import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IDepartment } from 'src/app/services/department.service/department.service';
import { SalaryBracketService } from 'src/app/services/salary-bracket.service/salary-bracket.service';

@Component({
  selector: 'app-department.home',
  templateUrl: './department.home.component.html',
  styleUrls: ['./department.home.component.css']
})
export class DepartmentHomeComponent implements OnInit {
  iconEdit = faPenToSquare;
  iconDel  = faTrashCan;
  listDepartments : IDepartment[];
  constructor(private _bracketService : SalaryBracketService) { }

  ngOnInit(): void {
    this._bracketService.departmentService.getAllDepartments().then(data => this.listDepartments = data);
  }

}
