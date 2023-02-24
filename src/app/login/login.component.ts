import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSpinner, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';
import { ApiServiceService } from '../services/api.service/api-service.service';
import { LocalStorageService } from '../services/local-storage.service/local-storage.service';

export interface UserModel {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserModel = {
    username: '',
    password: '',
  };
  contentBtn = 'LOGIN';
  iconProcess = faSpinner;
  iconEye = faEyeSlash;
  isShowPwd = false;

  constructor(
    private _router: Router,
    private _localStorage : LocalStorageService,
    private _apiService : ApiServiceService
  ) {}
  
  ngOnInit(): void {
    if(this._localStorage.get('accessToken')) {
      this._router.navigate(['admin/dashboard'])
    }
  }
  onShowPassword() {
    this.isShowPwd = !this.isShowPwd;
    this.iconEye = this.isShowPwd ? faEye : faEyeSlash;
  }
  login() {
    // @ts-ignore
    document.getElementById('iconProcess').style.display = 'block'
    this.contentBtn = '';
    // Process user input and executing authentication process
    this._apiService
      .auth(JSON.stringify({ ...this.user }))
      .then((response) => {
        // Saving access token on local storage
        const { accessToken, user } = response.data.data
        // Delete password
        delete user.password;
        this._localStorage.setObject('user', user);
        // Set ID user for api service
        this._apiService.user = user.username;
        // Set the interceptor of axios instance
        this._apiService.setAccessToken(accessToken);
      })
      .then(_ => {
        // Navigate to admin page
        this._router.navigate(['admin/dashboard']);
      })
      .catch((err) => {
        console.error(err);
        alert("Can't login");
        this.contentBtn = 'LOGIN';
        // @ts-ignore
        document.getElementById('iconProcess').style.display = 'none';
      })
  }
}
