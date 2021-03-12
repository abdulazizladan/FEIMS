import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private readonly buildingsUrl: string = "";
  private readonly singleBuildingUrl: string = "";
  private readonly addBuildingUrl: string = "";

  constructor( private _http : HttpClient ){

  }

  addBuilding( buildingData ){
    return this._http.post<any>(this.addBuildingUrl, buildingData)
  }

  getBuildings(){
    return this._http.get<any>(this.buildingsUrl);
  }

  getSingleBuilding( id: string){
    return this._http.get<any>(this.singleBuildingUrl);
  }
}
