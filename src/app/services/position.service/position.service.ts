import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api.service/api-service.service';
import { IDepartment } from '../department.service/department.service';

export interface IPosition {
  position_id : string,
  position_name : string,
  job_description : string,
  department_id : string
}
export interface IPositionNested extends IPosition {
  department : IDepartment
}
@Injectable({
  providedIn: 'root'
})
export class PositionService {
  basePath = 'positions';
  constructor(private _apiService : ApiServiceService) { }

  async getAllPositions() {
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
  postPosition(input : IPosition) {
    try {
      this._apiService.post(this.basePath, input)
    } catch (error) {
      console.log(error);
    }
  }
}
