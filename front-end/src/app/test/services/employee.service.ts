import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/base/models';
import { environment } from 'src/environments/environment';
import { Employee } from '../models';
import { TestModule } from '../test.module';

@Injectable({
  providedIn: TestModule
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.apiUrl}/employee`);
  }

  create(employee: Employee): Observable<ResponseData<Employee>> {
    return this.http.post<ResponseData<Employee>>(`${environment.apiUrl}/employee`, employee);
  }

  get(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${environment.apiUrl}/employee/${id}`);
  }

  edit(id: number, employee: Employee): Observable<ResponseData<Employee>> {
    return this.http.put<ResponseData<Employee>>(`${environment.apiUrl}/employee/${id}`, employee);
  }

  delete(id: number): Observable<ResponseData<Employee>> {
    return this.http.delete<ResponseData<Employee>>(`${environment.apiUrl}/employee/${id}`);
  }
}