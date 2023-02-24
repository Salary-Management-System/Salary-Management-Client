import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleRight, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IJobFunction, IJobFunctionNested } from 'src/app/services/job-title.service/job-title.service';
import { SalaryBracketService } from 'src/app/services/salary-bracket.service/salary-bracket.service';

@Component({
  selector: 'app-salary-bracket-home',
  templateUrl: './salary-bracket-home.component.html',
  styleUrls: ['./salary-bracket-home.component.css']
})
export class SalaryBracketHomeComponent implements OnInit {
  jobTitles : IJobFunctionNested[];
  rightArrow = faArrowAltCircleRight;
  iconEdit = faPenToSquare;
  iconDel = faTrashCan;
  constructor(
    private _bracketService : SalaryBracketService
  ) { }

  ngOnInit(): void {
    this._bracketService.jobTitleService.getAllJobTitle().then(data => this.jobTitles = data)
  }

}
