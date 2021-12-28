import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { testimonials } from './testimonials';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  constructor(private _http: HttpClient) {}
  getTestimonials(): Observable<testimonials[]> {
    return this._http.get<testimonials[]>(environment.testimonialsAPI);
  }
}
