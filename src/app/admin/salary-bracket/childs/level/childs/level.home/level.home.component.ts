import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { ILevel } from 'src/app/services/level.service/level.service';
import { SalaryBracketService } from 'src/app/services/salary-bracket.service/salary-bracket.service';

@Component({
  selector: 'app-level.home',
  templateUrl: './level.home.component.html',
  styleUrls: ['./level.home.component.css']
})
export class LevelHomeComponent implements OnInit {
  iconEdit = faPenToSquare;
  iconDel = faTrashCan;
  listLevels : ILevel[];
  constructor(
    private _salaryService : SalaryBracketService
  ) { }

  ngOnInit(): void {
    this._salaryService.levelService.getAllLevels().then(data => {
      this.listLevels = data;
    })
  }

}
