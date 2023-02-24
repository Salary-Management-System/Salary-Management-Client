import { Component, OnInit } from '@angular/core';
import { fadeUpIn } from 'src/utils/animations';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css'],
  animations : [fadeUpIn]
})
export class BonusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
