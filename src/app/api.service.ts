import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  
  constructor(private httpClient: HttpClient) { }

  

  public getGPA(sat: String) {
    return this.httpClient.get('https://beta.rstudioconnect.com/content/8f2113bc-f4aa-451e-9516-ce55e646c732/prediction?SAT='+ sat);
  }
}
