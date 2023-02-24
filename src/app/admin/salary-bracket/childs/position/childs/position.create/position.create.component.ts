import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDepartment } from 'src/app/services/department.service/department.service';
import { SalaryBracketService } from 'src/app/services/salary-bracket.service/salary-bracket.service';
import { customAlphabet } from 'nanoid';
import { IPosition } from 'src/app/services/position.service/position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position.create',
  templateUrl: './position.create.component.html',
  styleUrls: ['./position.create.component.css']
})
export class PositionCreateComponent implements OnInit {
  isShowOptions = false;
  listDeparments : IDepartment[];
  listDeparmentsForDisplay : IDepartment[];
  selectedDepartment : string;
  idGenerate : string;
  constructor(
    private _salaryService : SalaryBracketService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._salaryService.departmentService.getAllDepartments().then(data => {
      this.listDeparments = data;
      this.listDeparmentsForDisplay = this.listDeparments;
    });
    this.selectedDepartment = '';

    let nanoid = customAlphabet('1234567890abcdef', 10);
    this.idGenerate = nanoid().toUpperCase();
  }

  onAutocompleteFilter() {
    const key = this.selectedDepartment;
    if(key.length > 0) {
      this.listDeparmentsForDisplay = this.listDeparments.filter(dec => dec.department_name.toLowerCase().includes(key.toLowerCase()));
    }
    this.isShowOptions = key.length > 0;
  }

  onSubmit(form : NgForm) {
    const input = {
      position_id : this.idGenerate,
      position_name : form.value['name'],
      department_id : this.selectedDepartment,
      job_description : form.value['description']
    } as IPosition
    this._salaryService.positionService.postPosition(input);
    this._router.navigate(['/admin/bracket/positions/new']);
  }

  onSelectDepartment(id : string) {
    if(this.listDeparments.some(dec => dec.department_id == id)) {
      this.selectedDepartment = id
      this.idGenerate = [id, '-' ,this.idGenerate].join('');
    }
    this.isShowOptions = false;
  }
}
