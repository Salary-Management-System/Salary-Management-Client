import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { EmployeeService, IEmployee, IEmployeeNested } from 'src/app/services/employee.service/employee.service';

@Component({
  selector: 'app-employee.home',
  templateUrl: './employee.home.component.html',
  styleUrls: ['./employee.home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  listEmployees : IEmployeeNested[];
  iconEdit = faPenToSquare;
  iconDel = faTrashCan;
  constructor(private _emService : EmployeeService) { }

  ngOnInit(): void {
    this._emService.getAllEmployees().then(data => {
      this.listEmployees = data;
      console.log(data)
    });
  }
}
