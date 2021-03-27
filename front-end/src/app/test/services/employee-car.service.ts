import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/base/models';
import { environment } from 'src/environments/environment';
import { Employee, EmployeeCar } from '../models';
import { TestModule } from '../test.module';

@Injectable({
  providedIn: TestModule
})
export class EmployeeCarService {

  constructor(private http: HttpClient) { }

  getAll(employeeId: number): Observable<EmployeeCar[]> {
    return this.http.get<EmployeeCar[]>(`${environment.apiUrl}/employee-car/${employeeId}`);
  }

  create(employeeCar: EmployeeCar, employeeId: number): Observable<ResponseData<EmployeeCar>> {
    return this.http.post<ResponseData<EmployeeCar>>(`${environment.apiUrl}/employee-car/${employeeId}`, employeeCar);
  }

  get(id: number): Observable<EmployeeCar> {
    return this.http.get<EmployeeCar>(`${environment.apiUrl}/employee-car/by-id/${id}`);
  }

  edit(id: number, employeeCar: EmployeeCar): Observable<ResponseData<EmployeeCar>> {
    return this.http.put<ResponseData<EmployeeCar>>(`${environment.apiUrl}/employee-car/${id}`, employeeCar);
  }

  delete(id: number): Observable<ResponseData<EmployeeCar>> {
    return this.http.delete<ResponseData<EmployeeCar>>(`${environment.apiUrl}/employee-car/${id}`);
  }
}