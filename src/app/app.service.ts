import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  myData(data){
    // console.log(data)
    return this._http.post<any>('http://localhost:3000/insertData', data)
  }

}

