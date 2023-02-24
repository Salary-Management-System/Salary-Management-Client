import { Injectable } from '@angular/core';
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { config } from 'rxjs';
import { LocalStorageService } from '../local-storage.service/local-storage.service';

const baseURL = 'http://localhost:5000/api/users';
interface AccessToken {
  token: string;
  exp: number;
}
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private _axiosInstance: AxiosInstance;
  private _user: string;
  constructor(private _localStorage: LocalStorageService) {
    this._axiosInstance = axios.create({
      // Set 'withCredentials' property to true for the user agent can send or receive cookies from other domain
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if(this._localStorage.get('accessToken') && this._localStorage.get('exp')) {
      // @ts-ignore
      let exp = this._localStorage.get('exp') as number;
      let accessToken = this._localStorage.get('accessToken');
      this.setAccessToken({ token : accessToken, exp : exp });
    }

    const { username } = this._localStorage.getObject('user');
    this._user = username || '';

    // Set interceptor at response to catch new access token
    // from every request when current access token is expired.
    // Then call setAccessToken method to reset the interceptor at request.
    this._axiosInstance.interceptors.response.use(
      (config) => {
        // @ts-ignore
        let newAccessToken = config.headers['x-access-token'];
        let oldAccessToken = this._localStorage.get('accessToken');
        //@ts-ignore
        let newExp = config.headers['x-access-token-exp'] as number;
        if(newAccessToken && newAccessToken !== oldAccessToken) {
          this.setAccessToken({ token: newAccessToken, exp: newExp });
        }
        return config;
      },
      (err) => {
        Promise.reject(err);
      }
    );
  }
  setAccessToken(accessToken: AccessToken): void {
    this._axiosInstance.interceptors.request.use(
      (config) => {
        // @ts-ignore
        config.headers['Authorization'] = `Bearer ${accessToken.token}`;
        return config;
      },
      (err) => Promise.reject(err)
    );
    this._localStorage.set('accessToken', accessToken.token);
    this._localStorage.set('exp', accessToken.exp.toString());
  }

  get(path: string) {
    let url = baseURL + `/${this._user}` + `/${path}`;
    return this._axiosInstance.get(url);
  }

  post(path: string, data: any) {
    let url = baseURL + `/${this._user}` + `/${path}`;
    return this._axiosInstance.post(url, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  auth(data: string) {
    let url = `http://localhost:5000/api/auth`;
    return this._axiosInstance.post(url, data, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  set user(input: any) {
    this._user = input;
  }
  get user() {
    return this._user;
  }
  isExpired() {
    return Number(this._localStorage.get('exp'))*1000 < Date.now();
  }
}
