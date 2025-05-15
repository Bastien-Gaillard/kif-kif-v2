import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Shops } from '../models/shops.model';
import { QueryService } from '../services/query.service';
import { HttpResponse } from '@angular/common/http';
import { ShopsStore } from '../stores/shops.store';


@Injectable()
export class GetShopResolver {
  private store = inject(ShopsStore);

  constructor(private query: QueryService) {}
  resolve: ResolveFn<void> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void => {
    return this.store.getAllShops()
  };
}
