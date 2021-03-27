import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { ResponseData, User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  public accessToken(username: string, password: string) {
    this.authorization = btoa(`${username}:${password}`);
  }

  public set authorization(accessToken: any) {
    localStorage.setItem('accessToken', accessToken);
  }

  public get authorization(): any {
    return localStorage.getItem('accessToken');
  }

  public isAuthenticated(): boolean {
    const token = this.authorization;
    return Boolean(token);
  }

  public login(request: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/login`, request).pipe(
      tap((response) => {
        this.accessToken(request.username, request.password);
      })
    );
  }

  public resgistration(request: any): Observable<ResponseData<User>> {
    return this.http.post<ResponseData<User>>(`${environment.apiUrl}/user/register`, request);
  }

  public logout() {
    localStorage.clear();
  }
}
