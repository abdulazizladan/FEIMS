import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  private sitesUrl : string = "./assets/sites.json";
  private siteUrl : string;

  constructor( private _http : HttpClient){ 
  }

  getSites(){
    return this._http.get<any>(this.sitesUrl);
  }

}
