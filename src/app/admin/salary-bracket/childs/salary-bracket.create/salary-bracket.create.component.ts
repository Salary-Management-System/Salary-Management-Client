import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IJobFunction } from 'src/app/services/job-title.service/job-title.service';
import { ILevel } from 'src/app/services/level.service/level.service';
import { IPosition } from 'src/app/services/position.service/position.service';
import { SalaryBracketService } from 'src/app/services/salary-bracket.service/salary-bracket.service';
import { fadeUpIn } from 'src/utils/animations';


@Component({
  selector: 'app-salary-bracket.create',
  templateUrl: './salary-bracket.create.component.html',
  styleUrls: ['./salary-bracket.create.component.css'],
  animations : [fadeUpIn]
})
export class SalaryBracketCreateComponent implements OnInit {
  listLevels : ILevel[];
  listLevelsForDisplay : ILevel[];
  listPositions : IPosition[];
  listPositionsForDisplay : IPosition[];
  constructor(
    private _salaryService : SalaryBracketService
  ) { }

  ngOnInit(): void {
    this._salaryService.levelService.getAllLevels().then(data => this.listLevels = data);
    this._salaryService.positionService.getAllPositions().then(data => this.listPositions = data);
    this.listLevelsForDisplay = [];
    this.listPositionsForDisplay = [];
  }

  onAutocomplete(input : HTMLInputElement) {
    if(input.value.length > 0) {
      const value = input.value.toLowerCase();
      if(input.id == 'level') {
        this.listLevelsForDisplay = this.listLevels.filter(lev => lev.level_name.toLowerCase().includes(value));
      }
      if(input.id == 'position') {
        this.listPositionsForDisplay = this.listPositions.filter(pos => pos.position_name.toLowerCase().includes(value));
      }
    } else {
      this.listLevelsForDisplay = [];
      this.listPositionsForDisplay = [];
    }
  }

  onSetValue(form : NgForm, input : HTMLInputElement, value : string) {
    input.value = value;
    form.controls[input.name].setValue(value);
    if(input.id == 'level') {
      this.listLevelsForDisplay = [];
    } else if(input.id == 'position') {
      this.listPositionsForDisplay = [];
    }
  }

  onSubmit(form : NgForm) {
    if(form.valid) {
      const body : IJobFunction = form.value;
      const [foundLevel] = this.listLevels.filter(lev => lev.level_name == body['level_id'])
      body['level_id'] = foundLevel.level_id;
      const [foundPosition] = this.listPositions.filter(pos => pos.position_name == body['position_id']);
      body['position_id'] = foundPosition.position_id;
      this._salaryService.jobTitleService.postJob(body);
    }
  }
}
