import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Counters } from './counters';

@Injectable({
  providedIn: 'root',
})
export class CountersService {
  constructor(private _http: HttpClient) {}
  getCounters(): Observable<Counters[]> {
    return this._http.get<Counters[]>(environment.counterApi);
  }
}
