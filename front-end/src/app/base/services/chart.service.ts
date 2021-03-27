import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Total } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  public countEmployeeGender(): Observable<Total[]> {
    return this.http.get<Total[]>(`${environment.apiUrl}/employee/gender-total`);
  }

  public countEmployeeCar(): Observable<Total[]> {
    return this.http.get<Total[]>(`${environment.apiUrl}/employee/count-car`);
  }

  public countEmployeeAsset(): Observable<Total[]> {
    return this.http.get<Total[]>(`${environment.apiUrl}/employee/count-asset`);
  }

  public countCompany(): Observable<Total[]> {
    return this.http.get<Total[]>(`${environment.apiUrl}/company/count-company`);
  }

  public countBrand(): Observable<Total[]> {
    return this.http.get<Total[]>(`${environment.apiUrl}/car/count-brand`);
  }
}