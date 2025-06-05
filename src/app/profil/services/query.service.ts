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
  getUserInformation(userId: number): Observable<any> {
    console.log('API URL:', environment.apiUrl);

    return this.http
      .get<any>(
        `${environment.apiUrl}users/${userId}`,
        {
          observe: 'response',
        }
      )
      .pipe(map((response) => response.body as any));
  }
}
