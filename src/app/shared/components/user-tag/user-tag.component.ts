import { Component, Input, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-user-tag',
  templateUrl: './user-tag.component.html',
  styleUrls: ['./user-tag.component.css']
})
export class UserTagComponent implements OnInit {
  @Input() user : any;
  iconUser = faUser;
  lastMessage = {
    msg : 'Hello',
    created_at : new Date(Date.now()).toLocaleString()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
