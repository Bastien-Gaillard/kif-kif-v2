import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Points } from '../models/points.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Offers } from '../models/offers.model';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}
  getGlobalPoints(userId: number): Observable<Points.GetGlobalPoints> {
    console.log("API URL:", environment.apiUrl);

    return this.http
      .get<Points.GetGlobalPoints>(
        `${environment.apiUrl}historyPoints/global-point/${userId}`,
        {
          observe: 'response',
        }
      )
      .pipe(map((response) => response.body as Points.GetGlobalPoints));
  }

  getCardNumber(userId: number): Observable<Points.GetGlobalPoints> {
    return this.http
      .get<Points.GetGlobalPoints>(
        `${environment.apiUrl}users/card-number/${userId}`,
        {
          observe: 'response',
        }
      )
      .pipe(map((response) => response.body as Points.GetGlobalPoints));
  }

  getOffers(distance: number, position: any): Observable<Offers.GetOffers> {
    console.log("API URL:", position);
    return this.http
      .get<Offers.GetOffers>(
        `${environment.apiUrl}offers/${distance}/${position.coords.latitude},${position.coords.longitude}`,
        {
          observe: 'response',
        }
      )
      .pipe(map((response) => response.body as Offers.GetOffers));

  }

  getHistoryPoints(userId: number): Observable<Points.GetGlobalPoints> {
    return this.http
      .get<Points.GetGlobalPoints>(
        `${environment.apiUrl}historyPoints/${userId}`,
        {
          observe: 'response',
        }
      )
      .pipe(map((response) => response.body as Points.GetGlobalPoints));
  }

  getCurrentPoints(userId: number): Observable<Points.GetGlobalPoints> {
    return this.http
      .get<Points.GetGlobalPoints>(
        `${environment.apiUrl}historyPoints/current-point/${userId}`,
        {
          observe: 'response',
        }
      )
      .pipe(map((response) => response.body as Points.GetGlobalPoints));
  }

}
