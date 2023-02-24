import { Component, OnInit } from '@angular/core';
import { fadeUpIn } from 'src/utils/animations';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css'],
  animations : [fadeUpIn]
})
export class LevelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
