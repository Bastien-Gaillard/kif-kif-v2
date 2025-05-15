import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}
  getShopNearUser(position: any) {
    return this.http
          .get<any>(
            `${environment.apiUrl}shops/near-user/${position.coords.latitude},${position.coords.longitude}`,
            {
              observe: 'response',
            }
          )
          .pipe(map((response) => response.body as any));
  }
}
