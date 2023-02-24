import { Component, OnInit } from '@angular/core';
import { fadeUpIn } from 'src/utils/animations';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  animations : [fadeUpIn]
})
export class DepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
