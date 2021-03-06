import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Elements } from './element';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: HttpClient) {}

  getEvents(): Observable<Elements[]> {
    return this._http.get<Elements[]>(environment.eventApi);
  }
}
