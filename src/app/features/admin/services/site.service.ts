import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private sitesUrl : string;
  private siteUrl : string;

  constructor( private _http : HttpClient ){
    this.sitesUrl = "./assets/sites.json";
  }

  getSites(){
    return this._http.get<any>(this.sitesUrl);
  }

  getSingleSite(){
    return 0;
  }
}
