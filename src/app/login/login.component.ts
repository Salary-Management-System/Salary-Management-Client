import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSpinner, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';
import { ApiServiceService } from '../services/api.service/api-service.service';
import { LocalStorageService } from '../services/local-storage.service/local-storage.service';

interface UserModel {
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
    console.log(this.isShowPwd)
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
      .post('/auth', JSON.stringify({ ...this.user }))
      .then((response) => {
        // Saving access token on local storage
        const { accessToken, user } = response.data.data
        this._localStorage.set('accessToken', accessToken);
        // Delete password
        delete user.password;
        this._localStorage.setObject('user', user);
        // Navigate to admin page
        this._router.navigate(['admin/profile']);
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
