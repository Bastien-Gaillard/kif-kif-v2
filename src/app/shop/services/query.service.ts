import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Filter } from 'src/app/shared/models/filter.model';
import { Shops } from '../models/shops.model';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class QueryService {
  private http = inject(HttpClient);

  constructor() {}

  getAllShops(): Observable<Shops.GetShop[] | string[]> {
    console.log("getAllShops API URL:", `${environment.apiUrl}shops/`);
    return this.http.get<Shops.GetShop[]>(`${environment.apiUrl}shops/`, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<Shops.GetShop[]>) => {
          if (response.body) {
            console.log("API Response:", response.body);
            return response.body;
          } else {
            console.error("API Response is empty");
            throw new Error("Empty response body");
          }
        }),
        catchError((error) => {
          console.error("API Error:", error);
          return of(["error"]); // Return a fallback value
        })
      );
  }


}
