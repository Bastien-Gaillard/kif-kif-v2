import { HttpClient, HttpResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Filter } from "src/app/shared/models/filter.model";
import { Shops } from "../models/shops.model";
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class QueryService {
  private http = inject(HttpClient);

  constructor() {}

  getAllShops(filter?: Filter.FilterParams): Observable<HttpResponse<Shops.GetShop[]>> {
    if (!filter) filter = {};

    return this.http.get<Shops.GetShop[]>(`${environment.apiUrl}/shops`, { observe: 'response' });
  }
}
