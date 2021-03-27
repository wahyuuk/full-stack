import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/base/models';
import { environment } from 'src/environments/environment';
import { Company } from '../models';
import { TestModule } from '../test.module';

@Injectable({
  providedIn: TestModule
})
export class CompanyService {

  constructor(private http: HttpClient) {}
  
  public getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${environment.apiUrl}/company`);
  }

  create(company: Company): Observable<ResponseData<Company>> {
    return this.http.post<ResponseData<Company>>(`${environment.apiUrl}/company`, company);
  }

  get(id: number): Observable<Company> {
    return this.http.get<Company>(`${environment.apiUrl}/company/${id}`);
  }

  edit(id: number, company: Company): Observable<ResponseData<Company>> {
    return this.http.put<ResponseData<Company>>(`${environment.apiUrl}/company/${id}`, company);
  }

  delete(id: number): Observable<ResponseData<Company>> {
    return this.http.delete<ResponseData<Company>>(`${environment.apiUrl}/company/${id}`);
  }
}