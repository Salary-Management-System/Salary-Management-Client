import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api.service/api-service.service';
import { LocalStorageService } from '../local-storage.service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private _storage : LocalStorageService,
    private _apiService : ApiServiceService,
    private _router : Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(this._storage.get('accessToken') == undefined) {
        // this._router.navigate(['login'])
        return true;
      }
      return true;
  }
}
