import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api.service/api-service.service';
export interface IDepartment {
  department_id : string,
  department_name : string
}
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  basePath = 'departments';
  constructor(
    private _apiService : ApiServiceService
  ) { }

  async getAllDepartments() {
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

  postDepartment(input : IDepartment) {
    try {
      this._apiService.post(this.basePath, input)
    } catch (error) {
      console.log(error);
    }
  }
}
