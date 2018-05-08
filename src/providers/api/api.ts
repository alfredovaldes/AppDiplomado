import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
  }
  getLatestData(){
    return this.http.get('http://104.196.17.88:3000/getdata?device=Jardin2&results=1');
  }
}
