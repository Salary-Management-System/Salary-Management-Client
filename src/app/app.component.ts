import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salary-management-client';
  constructor(private _router : Router) {}
  
  route() {
    this._router.navigate(['login'])
  }
}
