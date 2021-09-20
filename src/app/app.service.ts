import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Elements } from './element';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private api_url = 'https://ams-back.herokuapp.com/api/v1/event';
  constructor(private _http: HttpClient) {}

  getEvents(): Observable<Elements[]> {
    return this._http.get<Elements[]>(this.api_url);
  }
}
