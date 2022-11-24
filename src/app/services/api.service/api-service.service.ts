import { Injectable } from '@angular/core';
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { config } from 'rxjs';

const baseURL = 'http://localhost:5000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private _axiosInstance : AxiosInstance;
  constructor() {
    this._axiosInstance = axios.create({
      // Set 'withCredentials' property to true for the user agent can send or receive cookies from other domain
      withCredentials : true,
      headers : {
        'Content-Type' : 'application/json'
      }
    });
  }
  setAccessToken(token : string) : void {
    this._axiosInstance.interceptors.request.use(
      config => {
        // @ts-ignore
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
      },
      err => Promise.reject(err)
    )
  }

  resetAccessToken() {
    // Set interceptor at response to catch new access token
    // from every request when current access token is expired.
    // Then call setAccessToken method to reset the interceptor at request.
    this._axiosInstance.interceptors.response.use(
      config => {
        // @ts-ignore
        const accessToken = config.headers.get('x-access-token')
        this.setAccessToken(accessToken);
        return config;
      },
      err => {
        Promise.reject(err);
      }
    )
  }
  
  get(path : string) {
    return this._axiosInstance.get(baseURL + path);
  }

  post(path : string, data : string) {
    return this._axiosInstance.post(baseURL + path, data, { headers : { 'Content-Type': 'application/json' }});
  }
}
