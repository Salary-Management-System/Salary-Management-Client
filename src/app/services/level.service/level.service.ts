import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api.service/api-service.service';
export interface ILevel {
  level_id : string,
  level_name : string,
  yoe_required : number
}
@Injectable({
  providedIn: 'root'
})
export class LevelService {
  basePath = 'levels';
  constructor(private _apiService : ApiServiceService) { }
  async getAllLevels() {
    try {
      const res = await this._apiService.get(this.basePath)
      if(res.data.code === 200) {
        return res.data.data
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  postLevel(input : ILevel) {
    try {
      this._apiService.post(this.basePath, input);
    } catch (error) {
      console.log(error);
    }
  }
}
