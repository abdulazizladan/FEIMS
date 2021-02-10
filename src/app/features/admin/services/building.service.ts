import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private readonly buildingsUrl : string = "";
  private readonly singleBuildingUrl : string = "";

  constructor( private _http : HttpClient ){

  }

  getBuildings(){
    return this._http.get<any>(this.buildingsUrl);
  }

  getSingleBuilding( id : number){
    return this._http.get<any>(this.singleBuildingUrl);
  }
}
