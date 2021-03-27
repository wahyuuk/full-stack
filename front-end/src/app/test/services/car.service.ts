import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/base/models';
import { environment } from 'src/environments/environment';
import { Car } from '../models';
import { TestModule } from '../test.module';

@Injectable({
  providedIn: TestModule
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiUrl}/car`);
  }

  create(car: Car): Observable<ResponseData<Car>> {
    return this.http.post<ResponseData<Car>>(`${environment.apiUrl}/car`, car);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${environment.apiUrl}/car/${id}`);
  }

  edit(id: number, car: Car): Observable<ResponseData<Car>> {
    return this.http.put<ResponseData<Car>>(`${environment.apiUrl}/car/${id}`, car);
  }

  delete(id: number): Observable<ResponseData<Car>> { 
    return this.http.delete<ResponseData<Car>>(`${environment.apiUrl}/car/${id}`);
  }
}