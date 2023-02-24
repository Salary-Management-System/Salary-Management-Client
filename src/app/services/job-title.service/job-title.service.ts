import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api.service/api-service.service';
import { ILevel } from '../level.service/level.service';
import { IPositionNested } from '../position.service/position.service';


export interface IJobFunction {
  level_id : string,
  position_id : string,
  requirements : string,
  maximum_salary : number,
  minimum_salary : number,
  job_function_id : string,
}

export interface IJobFunctionNested extends IJobFunction {
  position : IPositionNested,
  level : ILevel
}

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {
  private basePath = 'job-function';
  constructor(
    private _apiService : ApiServiceService
  ) { }

  async getAllJobTitle() {
    try {
      const res = await this._apiService.get(this.basePath);
      if(res.data.code === 200) {
        return res.data.data
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }

  postJob(input : IJobFunction) {
    try {
      this._apiService.post(this.basePath, input);
    } catch (error) {
      console.log(error);
    }
  }
}
