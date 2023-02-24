import { Component, OnInit } from '@angular/core';
import { fadeUpIn } from 'src/utils/animations';
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css'],
  animations : [
    fadeUpIn
  ]
})
export class PositionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
