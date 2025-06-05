import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Users } from 'src/app/shared/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}
  createUser(user: Users.CreateUser): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}users/create`, { user: user }, {
      observe: 'response',
    });
  }

  loginUser(user: Users.LoginUser) {
    return this.http.post<any>(`${environment.apiUrl}auth/login`, { user: user }, {
      observe: 'response',
    });
  }
}
