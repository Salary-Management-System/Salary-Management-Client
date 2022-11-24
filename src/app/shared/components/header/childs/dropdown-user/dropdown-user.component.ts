import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service/local-storage.service';

@Component({
  selector: 'app-dropdown-user',
  templateUrl: './dropdown-user.component.html',
  styleUrls: ['./dropdown-user.component.css']
})
export class DropdownUserComponent implements OnInit {
  user : { username : string, position : string } = { username : '', position : '' }
  constructor(
    private _route : Router,
    private _storage : LocalStorageService
    ) {}

  ngOnInit(): void {
    const userFromStorage = this._storage.getObject('user')
    if(userFromStorage.employee_id !== null) {
      this.user.username = userFromStorage.employee.firstname + ' ' + userFromStorage.employee.lastname;
      this.user.position = '---';
    } else {
      this.user.username = userFromStorage.username;
      this.user.position = '---'
    }
  }

  onLogout() {
    // -- Process the token string in local storage
    // - Remove access token and user in local storage
    if(!this._storage.isStorageEmpty) {
      this._storage.removeInArray(['accessToken', 'user'])
    }
    // Navigate to login page
    this._route.navigate(['login'])
  }
}
