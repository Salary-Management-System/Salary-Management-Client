import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api.service/api-service.service';

enum Unit {
  VND,
  EUR,
  USD
}
export interface IBonus {
  bonus_id : string,
  bonus_name : string,
  effect_date : Date,
  expired_date : Date,
  basic_amount : number
}
@Injectable({
  providedIn: 'root'
})
export class BonusService {

  constructor(
    private _apiService : ApiServiceService
  ) { }

  async getAllBonuses() {
    try {
      const res = await this._apiService.get('bonuses')
      if(res.data.code === 200) {
        return res.data.data
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }
  postBonus(input : IBonus) {
    try {
      this._apiService.post('bonuses', input)
    } catch (error) {
      console.log(error);
    }
  }
}
