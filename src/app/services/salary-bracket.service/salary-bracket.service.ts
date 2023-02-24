import { Injectable } from '@angular/core';
import { DepartmentService } from '../department.service/department.service';
import { JobTitleService } from '../job-title.service/job-title.service';
import { LevelService } from '../level.service/level.service';
import { PositionService } from '../position.service/position.service';

@Injectable({
  providedIn: 'root'
})
export class SalaryBracketService {
  table = 'job_funtion';
  constructor(
    private _positionService : PositionService,
    private _departmentService : DepartmentService,
    private _levelService : LevelService,
    private _jobTitleService : JobTitleService
  ) { }

  

  get jobTitleService() {
    return this._jobTitleService;
  }
  get positionService() {
    return this._positionService;
  }
  get departmentService() {
    return this._departmentService;
  }
  get levelService() {
    return this._levelService;
  }
}
